import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import {
  Band,
  Button,
  Panel,
  SectionHead,
  accentText,
  bodyColor,
  headingColor,
} from "@/components/ui";
import {
  category,
  contact,
  decisions,
  enforcement,
  evidence,
  healthcare,
  how,
  problem,
  product,
  thesis,
} from "@/content/site";

function Bullets({
  tone,
  points,
}: {
  tone: "dark" | "light" | "white";
  points: readonly string[];
}) {
  return (
    <ul className="mt-5 space-y-3">
      {points.map((point) => (
        <li key={point} className={`flex gap-3 text-sm ${bodyColor[tone]}`}>
          <span className={accentText[tone].accent} aria-hidden>
            —
          </span>
          <span className="leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* ------------------------------------------------- problem · light */}
        <Band tone="light" id="problem">
          <SectionHead
            tone="light"
            kicker={problem.kicker}
            title={problem.title}
            subtitle={problem.subtitle}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problem.cards.map((card) => (
              <Panel
                key={card.title}
                tone="light"
                accent={card.accent}
                className="p-8 pl-9"
              >
                <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                <Bullets tone="light" points={card.points} />
              </Panel>
            ))}
          </div>
          <div className="mt-6 border border-purple/30 bg-white p-8 text-center">
            <p className="text-base font-medium text-balance text-ink">
              {problem.band}
            </p>
          </div>
        </Band>

        {/* -------------------------------------------------- thesis · dark */}
        <Band tone="dark">
          <SectionHead
            tone="dark"
            kicker={thesis.kicker}
            title={thesis.title}
            subtitle={thesis.quote}
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {thesis.stages.map((stage, i) => (
              <li
                key={stage.name}
                className="border border-white/12 bg-[#0a0a0a] p-7 text-center"
              >
                <span
                  className={`font-mono text-xs font-medium ${accentText.dark[stage.accent]}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">
                  {stage.name}
                </h3>
                <p
                  className={`mt-1.5 text-sm font-medium ${accentText.dark[stage.accent]}`}
                >
                  {stage.lead}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-dim">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>
        </Band>

        {/* ------------------------------------------------------ how · light */}
        <Band tone="light" id="how">
          <SectionHead
            tone="light"
            kicker={how.kicker}
            title={how.title}
            subtitle={how.subtitle}
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {how.flow.map((step, i) => (
              <div
                key={step.title}
                className={`border p-7 ${
                  i === 1
                    ? "border-purple/40 bg-white"
                    : "border-black/10 bg-white"
                }`}
              >
                <p
                  className={`font-mono text-[11px] font-medium tracking-[0.14em] uppercase ${
                    i === 1 ? "text-purple" : "text-slate"
                  }`}
                >
                  {step.title}
                </p>
                <div className="mt-3 space-y-1.5">
                  {step.lines.map((line) => (
                    <p key={line} className="text-sm text-slate">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {how.notes.map((note) => (
              <Panel
                key={note.title}
                tone="light"
                accent={note.accent}
                className="p-7 pl-8"
              >
                <h3 className="text-base font-bold text-ink">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {note.body}
                </p>
              </Panel>
            ))}
          </div>
        </Band>

        {/* --------------------------------------------- architecture · dark */}
        <Band tone="dark" id="architecture">
          <SectionHead
            tone="dark"
            kicker="Reference architecture"
            title="One path, drawn end to end."
            subtitle="Bind and interrogate feed a single policy decision point. That decision drives enforcement, the response path, and everything written to the evidence layer."
            align="left"
          />
          <figure className="mt-12">
            <div className="overflow-x-auto border border-white/12 bg-[#0a0a0a] p-6">
              <ArchitectureDiagram />
            </div>
            <figcaption className="mt-4 text-sm text-slate">
              Scroll horizontally to see the full diagram on narrow screens.
            </figcaption>
          </figure>
        </Band>

        {/* ------------------------------------------------ decisions · light */}
        <Band tone="light" id="decisions">
          <SectionHead
            tone="light"
            kicker={decisions.kicker}
            title={decisions.title}
            subtitle={decisions.subtitle}
          />
          <div className="mt-14 space-y-4">
            {decisions.rows.map((row) => (
              <Panel
                key={row.name}
                tone="light"
                accent={row.accent}
                className="p-7 pl-9"
              >
                <div className="grid gap-3 lg:grid-cols-12 lg:items-baseline lg:gap-6">
                  <span
                    className={`font-mono text-xs font-bold tracking-[0.12em] lg:col-span-3 ${accentText.light[row.accent]}`}
                  >
                    {row.name}
                  </span>
                  <p className="font-medium text-ink lg:col-span-4">
                    {row.meaning}
                  </p>
                  <p className="text-sm leading-relaxed text-slate lg:col-span-5">
                    {row.example}
                  </p>
                </div>
              </Panel>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate">{decisions.note}</p>
        </Band>

        {/* ---------------------------------------------- enforcement · dark */}
        <Band tone="dark">
          <SectionHead
            tone="dark"
            kicker={enforcement.kicker}
            title={enforcement.title}
            subtitle={enforcement.subtitle}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {enforcement.columns.map((col) => (
              <Panel
                key={col.title}
                tone="dark"
                accent={col.accent}
                className="p-8 pl-9"
              >
                <p
                  className={`font-mono text-[11px] font-medium tracking-[0.16em] uppercase ${accentText.dark[col.accent]}`}
                >
                  {col.title}
                </p>
                <p className="mt-3 text-base font-medium text-white">
                  {col.lead}
                </p>
                <Bullets tone="dark" points={col.points} />
              </Panel>
            ))}
          </div>
          <div className="mt-6 border border-white/12 bg-[#0a0a0a] p-8">
            <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-[#f87171] uppercase">
              {enforcement.disclaimer.title}
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-dim">
              {enforcement.disclaimer.body}
            </p>
          </div>
        </Band>

        {/* ------------------------------------------------- evidence · light */}
        <Band tone="light" id="evidence">
          <SectionHead
            tone="light"
            kicker={evidence.kicker}
            title={evidence.title}
            subtitle={evidence.subtitle}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {evidence.items.map((item) => (
              <Panel
                key={item.title}
                tone="light"
                accent={item.accent}
                className="p-8 pl-9"
              >
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">
                  {item.body}
                </p>
              </Panel>
            ))}
          </div>
          <div className="mt-6 border border-purple/30 bg-white p-8 text-center">
            <p className="font-medium text-balance text-ink">{evidence.band}</p>
          </div>
        </Band>

        {/* ----------------------------------------------- healthcare · dark */}
        <Band tone="dark" id="healthcare">
          <SectionHead
            tone="dark"
            kicker={healthcare.kicker}
            title={healthcare.title}
            subtitle={healthcare.subtitle}
            align="left"
          />
          <div className="mt-12 space-y-4">
            {healthcare.rows.map((row) => (
              <Panel
                key={row.ask}
                tone="dark"
                accent={row.accent}
                className="p-7 pl-9"
              >
                <div className="grid gap-3 lg:grid-cols-12 lg:items-baseline lg:gap-6">
                  <p className="font-medium text-white lg:col-span-4">
                    &ldquo;{row.ask}&rdquo;
                  </p>
                  <span
                    className={`font-mono text-xs font-bold tracking-[0.12em] lg:col-span-3 ${accentText.dark[row.accent]}`}
                  >
                    {row.decision}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-dim lg:col-span-5">
                    {row.detail}
                  </p>
                </div>
              </Panel>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate">
            {healthcare.note}
          </p>
        </Band>

        {/* ------------------------------------------------- category · light */}
        <Band tone="light">
          <SectionHead
            tone="light"
            kicker={category.kicker}
            title={category.title}
            subtitle={category.subtitle}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.adjacent.map((item) => (
              <div
                key={item.name}
                className="border border-black/10 bg-white px-7 py-6 text-center"
              >
                <h3 className="text-sm font-bold text-ink">{item.name}</h3>
                <p className="mt-1.5 text-sm text-slate">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-purple p-10 text-center">
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-white/70 uppercase">
              {category.highlight.label}
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-xl leading-relaxed font-medium text-white">
              {category.highlight.lead}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/75">
              {category.highlight.body}
            </p>
          </div>
        </Band>

        {/* --------------------------------------------------- product · dark */}
        <Band tone="dark">
          <SectionHead
            tone="dark"
            kicker={product.kicker}
            title={product.title}
            subtitle={product.subtitle}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {product.columns.map((col) => (
              <Panel
                key={col.title}
                tone="dark"
                accent={col.accent}
                className="p-8 pl-9"
              >
                <h3 className={`text-base font-bold ${headingColor.dark}`}>
                  {col.title}
                </h3>
                <Bullets tone="dark" points={col.points} />
              </Panel>
            ))}
          </div>
        </Band>

        {/* ------------------------------------------------- contact · white */}
        <Band tone="white" id="contact">
          <div className="bg-purple px-8 py-16 text-center">
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-white/70 uppercase">
              {contact.kicker}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
              {contact.body}
            </p>
            <div className="mt-9">
              <Button
                href={`mailto:${contact.email}?subject=Enigma%20working%20session`}
                variant="onPurple"
              >
                {contact.email}
              </Button>
            </div>
          </div>
        </Band>
      </main>

      <footer className="bg-purple px-6 py-7 sm:px-10">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Foundry360. All rights reserved.
          </p>
          <p className="text-sm text-white/55">
            Enigma · AI Action Governance · {contact.site}
          </p>
        </div>
      </footer>
    </>
  );
}
