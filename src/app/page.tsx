import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Card, Kicker, Mono, Section, accentText } from "@/components/ui";
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

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* ---------------------------------------------------------- problem */}
        <Section
          id="problem"
          kicker={problem.kicker}
          title={problem.title}
          subtitle={problem.subtitle}
        >
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problem.cards.map((card) => (
              <Card key={card.title} accent={card.accent} className="p-7 pl-8">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <ul className="mt-4 space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted">
                      <span className="text-faint" aria-hidden>
                        —
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-accent bg-panel-alt px-7 py-6">
            <p className="text-base font-medium text-balance">{problem.band}</p>
          </div>
        </Section>

        {/* ---------------------------------------------------------- thesis */}
        <Section kicker={thesis.kicker} title={thesis.title}>
          <blockquote className="mt-10 rounded-lg border border-line bg-panel p-8 border-l-[3px] border-l-accent">
            <p className="text-lg leading-relaxed text-balance">
              {thesis.quote}
            </p>
          </blockquote>

          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {thesis.stages.map((stage, i) => (
              <li
                key={stage.name}
                className="rounded-lg border border-line bg-panel p-6"
              >
                <Mono className={accentText[stage.accent]}>
                  {String(i + 1).padStart(2, "0")}
                </Mono>
                <h3 className="mt-3 text-base font-semibold">{stage.name}</h3>
                <p
                  className={`mt-1.5 text-sm font-medium ${accentText[stage.accent]}`}
                >
                  {stage.lead}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ---------------------------------------------------------- how */}
        <Section
          id="how"
          kicker={how.kicker}
          title={how.title}
          subtitle={how.subtitle}
        >
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {how.flow.map((step) => (
              <div
                key={step.title}
                className={`rounded-lg border bg-panel p-6 ${
                  step.accent === "accent"
                    ? "border-accent bg-panel-alt"
                    : "border-line"
                }`}
              >
                <Mono className={accentText[step.accent]}>{step.title}</Mono>
                <div className="mt-3 space-y-1.5">
                  {step.lines.map((line) => (
                    <p key={line} className="text-sm text-muted">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {how.notes.map((note) => (
              <Card key={note.title} accent={note.accent} className="p-6 pl-7">
                <h3 className="text-base font-semibold">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {note.body}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------- architecture */}
        <Section
          id="architecture"
          kicker="Reference architecture"
          title="One path, drawn end to end."
          subtitle="Bind and interrogate feed a single policy decision point. That decision drives enforcement, the response path, and everything written to the evidence layer."
        >
          <figure className="mt-12">
            <div className="overflow-x-auto rounded-lg border border-line bg-panel p-6">
              <ArchitectureDiagram />
            </div>
            <figcaption className="mt-4 text-sm text-muted">
              Scroll horizontally to see the full diagram on narrow screens.
            </figcaption>
          </figure>
        </Section>

        {/* ---------------------------------------------------------- decisions */}
        <Section
          id="decisions"
          kicker={decisions.kicker}
          title={decisions.title}
          subtitle={decisions.subtitle}
        >
          <div className="mt-12 space-y-3">
            {decisions.rows.map((row) => (
              <Card key={row.name} accent={row.accent} className="p-6 pl-8">
                <div className="grid gap-3 lg:grid-cols-12 lg:items-baseline lg:gap-6">
                  <Mono
                    className={`lg:col-span-3 ${accentText[row.accent]} block`}
                  >
                    {row.name}
                  </Mono>
                  <p className="font-medium lg:col-span-4">{row.meaning}</p>
                  <p className="text-sm leading-relaxed text-muted lg:col-span-5">
                    {row.example}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">{decisions.note}</p>
        </Section>

        {/* ---------------------------------------------------------- enforcement */}
        <Section
          kicker={enforcement.kicker}
          title={enforcement.title}
          subtitle={enforcement.subtitle}
        >
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {enforcement.columns.map((col) => (
              <Card key={col.title} accent={col.accent} className="p-7 pl-8">
                <Mono className={accentText[col.accent]}>{col.title}</Mono>
                <p className="mt-3 text-base font-medium">{col.lead}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted">
                      <span className="text-faint" aria-hidden>
                        —
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-line bg-panel-alt p-7">
            <Mono className="text-danger">
              {enforcement.disclaimer.title}
            </Mono>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted">
              {enforcement.disclaimer.body}
            </p>
          </div>
        </Section>

        {/* ---------------------------------------------------------- evidence */}
        <Section
          id="evidence"
          kicker={evidence.kicker}
          title={evidence.title}
          subtitle={evidence.subtitle}
        >
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {evidence.items.map((item) => (
              <Card key={item.title} accent={item.accent} className="p-7 pl-8">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-accent bg-panel-alt px-7 py-6">
            <p className="font-medium text-balance">{evidence.band}</p>
          </div>
        </Section>

        {/* ---------------------------------------------------------- healthcare */}
        <Section
          id="healthcare"
          kicker={healthcare.kicker}
          title={healthcare.title}
          subtitle={healthcare.subtitle}
        >
          <div className="mt-12 space-y-3">
            {healthcare.rows.map((row) => (
              <Card key={row.ask} accent={row.accent} className="p-6 pl-8">
                <div className="grid gap-3 lg:grid-cols-12 lg:items-baseline lg:gap-6">
                  <p className="font-medium lg:col-span-4">
                    &ldquo;{row.ask}&rdquo;
                  </p>
                  <Mono
                    className={`lg:col-span-3 ${accentText[row.accent]} block`}
                  >
                    {row.decision}
                  </Mono>
                  <p className="text-sm leading-relaxed text-muted lg:col-span-5">
                    {row.detail}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted">
            {healthcare.note}
          </p>
        </Section>

        {/* ---------------------------------------------------------- category */}
        <Section
          kicker={category.kicker}
          title={category.title}
          subtitle={category.subtitle}
        >
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.adjacent.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-line bg-panel px-6 py-5"
              >
                <h3 className="text-sm font-semibold text-muted">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-faint">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-accent bg-panel-alt p-8 border-l-[3px]">
            <Mono className="text-accent">{category.highlight.label}</Mono>
            <p className="mt-3 max-w-4xl text-lg leading-relaxed">
              {category.highlight.lead}
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted">
              {category.highlight.body}
            </p>
          </div>
        </Section>

        {/* ---------------------------------------------------------- product */}
        <Section
          kicker={product.kicker}
          title={product.title}
          subtitle={product.subtitle}
        >
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {product.columns.map((col) => (
              <Card key={col.title} accent={col.accent} className="p-7 pl-8">
                <h3 className="text-base font-semibold">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted">
                      <span className="text-faint" aria-hidden>
                        —
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------- contact */}
        <section id="contact" className="border-t border-line px-6 py-24 sm:px-10">
          <div className="mx-auto w-full max-w-[1180px]">
            <Kicker accent="brand">{contact.kicker}</Kicker>
            <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {contact.body}
            </p>
            <a
              href={`mailto:${contact.email}?subject=Enigma%20working%20session`}
              className="mt-8 inline-block rounded-md bg-brand px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              {contact.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-10 sm:px-10">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
            Enigma · AI Action Governance
          </p>
          <p className="text-sm text-faint">
            © {new Date().getFullYear()} Foundry360 · {contact.site}
          </p>
        </div>
      </footer>
    </>
  );
}
