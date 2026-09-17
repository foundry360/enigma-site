import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import {
  Band,
  Button,
  CardIcon,
  Panel,
  SectionHead,
  accentText,
} from "@/components/ui";
import {
  category,
  contact,
  ctaLabel,
  decisions,
  enforcement,
  evidence,
  how,
  problem,
  product,
  thesis,
} from "@/content/site";

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
              <Panel key={card.title} tone="light" className="p-8">
                <CardIcon name={card.icon} tone="light" accent={card.accent} />
                <h3 className="mt-5 text-lg font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {card.body}
                </p>
              </Panel>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-black/10 bg-white p-8 text-center">
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
            {thesis.stages.map((stage) => (
              <li key={stage.name}>
                <Panel tone="dark" className="h-full p-7 text-center">
                  <div className="flex justify-center">
                    <CardIcon
                      name={stage.icon}
                      tone="dark"
                      accent={stage.accent}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
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
                </Panel>
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
            {how.flow.map((step) => (
              <Panel key={step.title} tone="light" className="p-7" hover>
                <CardIcon
                  name={step.icon}
                  tone="light"
                  accent={step.accent}
                  className="transition-colors group-hover:text-white"
                />
                <p className="mt-4 text-sm font-bold text-ink transition-colors group-hover:text-white">
                  {step.title}
                </p>
                <div className="mt-2 space-y-1.5">
                  {step.lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm text-slate transition-colors group-hover:text-white"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </Panel>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {how.notes.map((note) => (
              <Panel key={note.title} tone="light" className="p-7" hover>
                <CardIcon
                  name={note.icon}
                  tone="light"
                  accent={note.accent}
                  className="transition-colors group-hover:text-white"
                />
                <h3 className="mt-4 text-base font-bold text-ink transition-colors group-hover:text-white">
                  {note.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate transition-colors group-hover:text-white">
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
            title="One Path, Drawn End To End."
            subtitle="Every governed AI action converges on one authoritative decision. The control applied, the approval, and the reported outcome are all recorded against that decision."
            align="left"
          />
          <figure className="mt-12">
            <div className="overflow-x-auto rounded-lg border border-white/12 bg-[#0a0a0a] p-6">
              <ArchitectureDiagram />
            </div>
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
              <Panel key={row.name} tone="light" className="p-7">
                <div className="grid gap-3 lg:grid-cols-12 lg:items-center lg:gap-6">
                  <div className="flex items-center gap-3 lg:col-span-3">
                    <CardIcon
                      name={row.icon}
                      tone="light"
                      accent={row.accent}
                      size="size-6"
                      className="shrink-0"
                    />
                    <span
                      className={`font-mono text-xs font-bold tracking-[0.12em] ${accentText.light[row.accent]}`}
                    >
                      {row.name}
                    </span>
                  </div>
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
              <Panel key={col.title} tone="dark" className="p-8">
                <CardIcon name={col.icon} tone="dark" accent={col.accent} />
                <p
                  className={`mt-5 font-mono text-[11px] font-medium tracking-[0.16em] uppercase ${accentText.dark[col.accent]}`}
                >
                  {col.title}
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  {col.lead}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-dim">
                  {col.body}
                </p>
              </Panel>
            ))}
          </div>
          <Panel tone="dark" className="mt-6 p-8">
            <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-[#f87171] uppercase">
              {enforcement.disclaimer.title}
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-dim">
              {enforcement.disclaimer.body}
            </p>
          </Panel>
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
              <Panel key={item.title} tone="light" className="p-8">
                <CardIcon name={item.icon} tone="light" accent={item.accent} />
                <h3 className="mt-5 text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">
                  {item.body}
                </p>
              </Panel>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-black/10 bg-white p-8 text-center">
            <p className="font-medium text-balance text-ink">{evidence.band}</p>
          </div>
        </Band>

        {/* -------------------------------------------------- category · dark */}
        <Band tone="dark">
          <SectionHead
            tone="dark"
            kicker={category.kicker}
            title={category.title}
            subtitle={category.subtitle}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {category.adjacent.map((item) => (
              <Panel
                key={item.name}
                tone="dark"
                className="flex flex-col items-center px-7 py-7 text-center"
              >
                <CardIcon name={item.icon} tone="dark" />
                <h3 className="mt-4 text-sm font-bold text-white">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-dim">{item.body}</p>
              </Panel>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-blue-deep p-10 text-center">
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

        {/* -------------------------------------------------- product · light */}
        <Band tone="light">
          <SectionHead
            tone="light"
            kicker={product.kicker}
            title={product.title}
            subtitle={product.subtitle}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {product.columns.map((col) => (
              <Panel key={col.title} tone="light" className="p-8">
                <CardIcon name={col.icon} tone="light" accent={col.accent} />
                <h3 className="mt-5 text-base font-bold text-ink">
                  {col.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {col.body}
                </p>
              </Panel>
            ))}
          </div>
        </Band>

        {/* ------------------------------------------------- contact · white */}
        <Band tone="white" id="contact">
          <div className="rounded-lg bg-blue-deep px-8 py-16 text-center">
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
                variant="onAccent"
              >
                {ctaLabel}
              </Button>
            </div>
          </div>
        </Band>
      </main>

      <footer className="bg-black px-6 py-7 sm:px-10">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Foundry360. All rights reserved.
          </p>
          <p className="text-sm text-white/55">
            Enigma · AI Action Governance · {contact.site}
          </p>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}
