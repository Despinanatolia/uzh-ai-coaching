import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { buildSiteContext } from "@/lib/siteContext";
import type { Lang } from "@/lib/i18n";

export const runtime = "nodejs";
export const maxDuration = 30;

type ChatMessage = { role: "user" | "assistant"; content: string };

const systemPromptDe = (ctx: string) => `Du bist der Toolkit-Assistent auf der Website "KI in der Lehre" von Despina Fidanoglu (AI-Coach, Abteilung Lehrentwicklung, Universität Zürich). Die Website unterstützt Prof. Daniel Ursprung (Historisches Seminar) bei der didaktisch sinnvollen Integration von KI in sein BA-Seminar Moldau.

Deine Aufgabe:
- Beantworte Fragen zu den Inhalten dieser Website: Methoden, Bloom-Taxonomie, KI-Entwicklungen, Ressourcen, Kontakt.
- Antworte knapp, freundlich und auf Deutsch (es sei denn, die Frage ist auf Englisch).
- Verweise bei Bedarf auf die passende Seite (z.B. /methoden, /bloom, /entwicklungen).
- Wenn etwas nicht auf der Website steht, sag das ehrlich. Erfinde keine Methoden, Zitate oder Entwicklungen.
- Keine langen Listen, keine Marketingsprache. Wissenschaftlich präzise und didaktisch konkret.

Hier sind die kompletten Inhalte der Website, die du zur Beantwortung nutzen sollst:

${ctx}`;

const systemPromptEn = (ctx: string) => `You are the Toolkit Assistant on the "AI in Teaching" website by Despina Fidanoglu (AI Coach, Teaching Development Unit, University of Zurich). The site supports Prof. Daniel Ursprung (Department of History) in meaningfully integrating AI into his BA Seminar Moldau.

Your role:
- Answer questions about this site's content: methods, Bloom's taxonomy, AI developments, resources, contact.
- Respond concisely and warmly in the user's language (German or English).
- Point to the relevant page when helpful (e.g. /methoden, /bloom, /entwicklungen).
- If something isn't on the site, say so honestly. Do not invent methods, citations, or developments.
- No long lists, no marketing copy. Scholarly precise and pedagogically concrete.

Here is the full site content you should use:

${ctx}`;

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      messages?: ChatMessage[];
      lang?: Lang;
    };

    const messages = Array.isArray(body.messages) ? body.messages : [];
    const lang: Lang = body.lang === "en" ? "en" : "de";

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        {
          error:
            "ANTHROPIC_API_KEY is not configured. Add it in Vercel → Project → Settings → Environment Variables.",
        },
        { status: 500 }
      );
    }

    if (messages.length === 0) {
      return NextResponse.json({ error: "No messages provided." }, { status: 400 });
    }

    // Trim to last 20 turns to keep requests small.
    const trimmed = messages.slice(-20);

    // Light length guard to limit abuse.
    for (const m of trimmed) {
      if (typeof m.content !== "string" || m.content.length > 4000) {
        return NextResponse.json({ error: "Message too long." }, { status: 400 });
      }
    }

    const ctx = buildSiteContext(lang);
    const system = lang === "en" ? systemPromptEn(ctx) : systemPromptDe(ctx);

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const resp = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      system,
      messages: trimmed.map((m) => ({ role: m.role, content: m.content })),
    });

    const text = resp.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("[/api/chat] error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
