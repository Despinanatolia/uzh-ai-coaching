"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "./I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, pending, open]);

  async function send() {
    const trimmed = input.trim();
    if (!trimmed || pending) return;
    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setPending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, lang }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) {
        setMessages((m) => [...m, { role: "assistant", content: t(ui.chat_error, lang) }]);
      } else {
        setMessages((m) => [...m, { role: "assistant", content: data.reply as string }]);
      }
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: t(ui.chat_error, lang) }]);
    } finally {
      setPending(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-uzh-blue text-white px-5 py-3 rounded-full shadow-lg hover:bg-uzh-blue-dark transition-colors font-medium text-sm md:text-base"
          aria-label={t(ui.chat_button, lang)}
        >
          💬 {t(ui.chat_button, lang)}
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-40 w-[min(92vw,380px)] h-[min(80vh,560px)] bg-white border border-uzh-blue rounded-sm shadow-2xl flex flex-col">
          <div className="flex items-center justify-between bg-uzh-blue text-white px-4 py-3">
            <div>
              <p className="font-semibold text-sm">{t(ui.chat_title, lang)}</p>
              <p className="text-[11px] opacity-80">AI Coaching · UZH</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t(ui.chat_close, lang)}
              className="text-white text-2xl leading-none hover:opacity-80"
            >
              ×
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.length === 0 && (
              <div className="text-gray-600 leading-relaxed">
                {t(ui.chat_intro, lang)}
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-sm px-3 py-2 whitespace-pre-wrap leading-relaxed ${
                    m.role === "user"
                      ? "bg-uzh-blue text-white"
                      : "bg-uzh-blue-light text-gray-900"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {pending && (
              <div className="flex justify-start">
                <div className="bg-uzh-blue-light text-gray-700 italic rounded-sm px-3 py-2">
                  {t(ui.chat_thinking, lang)}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 p-3 flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={2}
              placeholder={t(ui.chat_placeholder, lang)}
              className="flex-1 border border-gray-300 rounded-sm px-2 py-1 text-sm focus:outline-none focus:border-uzh-blue resize-none"
              disabled={pending}
            />
            <button
              type="button"
              onClick={send}
              disabled={pending || !input.trim()}
              className="bg-uzh-blue text-white text-sm font-medium px-3 rounded-sm hover:bg-uzh-blue-dark disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {t(ui.chat_send, lang)}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
