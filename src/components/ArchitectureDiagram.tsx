import { icons, type IconName } from "./icons";

/* Four steps, ending in evidence. Each step expands into the features that
   matter at that step, but stays at the level of what happens to an AI action,
   not how the system is built. No internals, component inventory, or evidence
   schema. The detailed architecture belongs in a working session.

   Wording is drawn from the thesis, decision-model, and evidence sections so
   the diagram reuses the site's vocabulary instead of inventing a parallel one.

   Palette is restrained on purpose: neutral cards with blue as the only
   accent, marking the gateway and carrying the flow animation. The four
   decision colours appear once, on the outcome icons. */

const C = {
  group: "#0d0d10",
  heroGroup: "#0b1219",
  card: "#16161a",
  heroCard: "#101b24",
  tile: "#1e1e24",
  line: "#26262b",
  ink: "#f8fafc",
  muted: "#94a3b8",
  faint: "#64748b",
  accent: "#2697d9",
  accentTile: "#123044",
};

const OUTCOME = {
  allow: "#4ade80",
  controls: "#2697d9",
  review: "#fbbf24",
  deny: "#f87171",
};

/* Enigma is deliberately the largest column and the only one with a product
   title. Every column is centred on the same axis so the flow reads as one
   line, which is why the taller hero column starts higher up. */
const AXIS = 223;

type Spec = {
  w: number;
  h: number;
  y: number;
  pad: number;
  top: number;
  item: number;
  gap: number;
  tile: number;
  glyph: number;
  titleSize: number;
  subSize: number;
  titleDy: number;
  subDy: number;
};

/* Card text is sized against the rendered width, not the viewBox: the diagram
   occupies about 1130px inside its band, so a unit here lands near 0.77px. The
   columns are wide enough that the longest line ("Proceed under gateway rules")
   still clears the card edge at these sizes. */
const STD: Spec = {
  w: 292,
  h: 346,
  y: AXIS - 173,
  pad: 12,
  top: 52,
  item: 60,
  gap: 12,
  tile: 28,
  glyph: 16,
  titleSize: 17,
  subSize: 13.5,
  titleDy: -4,
  subDy: 14,
};

const HERO: Spec = {
  w: 336,
  h: 414,
  y: AXIS - 207,
  pad: 14,
  top: 112,
  item: 62,
  gap: 12,
  tile: 30,
  glyph: 17,
  titleSize: 17.5,
  subSize: 14,
  titleDy: -4,
  subDy: 15,
};

const XS = [16, 380, 788, 1152];

/* One attempt takes 6s. The connectors pulse in turn on a 1.3s beat so the flow
   reads left to right, then the loop rests before repeating. */
const LINE_DELAY = (i: number) => `${0.8 + i * 1.3}s`;

type Item = {
  title: string;
  sub: string;
  icon: IconName;
  color?: string;
};

const STEPS: {
  label: string;
  hero?: { title: string; sub: string };
  items: Item[];
}[] = [
  {
    label: "01 · Any AI action",
    items: [
      { title: "Copilot", sub: "Chat and completions", icon: "messageSquare" },
      { title: "Agent", sub: "Autonomous tool calls", icon: "boxes" },
      { title: "Service", sub: "Application integrations", icon: "appWindow" },
      { title: "Record change", sub: "Actions and writes", icon: "squarePen" },
    ],
  },
  {
    label: "02 · Enigma gateway",
    hero: {
      title: "Enigma",
      sub: "One decision point on the AI request path",
    },
    items: [
      { title: "Bind", sub: "Actor resolved server-side", icon: "fingerprint" },
      { title: "Decide", sub: "One policy evaluation", icon: "scale" },
      { title: "Enforce", sub: "Control at the boundary", icon: "shieldCheck" },
      { title: "Review", sub: "Routed to an approver", icon: "userCheck" },
    ],
  },
  {
    label: "03 · Exactly one outcome",
    items: [
      {
        title: "Allow",
        sub: "Proceed under gateway rules",
        icon: "circleCheck",
        color: OUTCOME.allow,
      },
      {
        title: "Allow with controls",
        sub: "Obligations applied",
        icon: "shieldCheck",
        color: OUTCOME.controls,
      },
      {
        title: "Review",
        sub: "Held for an approver",
        icon: "clock",
        color: OUTCOME.review,
      },
      {
        title: "Deny",
        sub: "Stopped at the boundary",
        icon: "ban",
        color: OUTCOME.deny,
      },
    ],
  },
  {
    label: "04 · Evidence chain",
    items: [
      {
        title: "Decision of record",
        sub: "Actor, policy, reasoning",
        icon: "fileCheck",
      },
      {
        title: "Tamper-evident audit",
        sub: "Hash-chained and signed",
        icon: "link",
      },
      { title: "Reported outcome", sub: "Sealed receipt", icon: "receipt" },
      {
        title: "Frozen history",
        sub: "Never rewritten later",
        icon: "history",
      },
    ],
  },
];

const LINKS = ["Intercept", "Resolve", "Seal"];

function ItemCard({
  x,
  y,
  item,
  spec,
  hero,
}: {
  x: number;
  y: number;
  item: Item;
  spec: Spec;
  hero?: boolean;
}) {
  const Icon = icons[item.icon];
  const glyph = item.color ?? (hero ? C.accent : C.muted);
  const width = spec.w - spec.pad * 2;
  const textX = x + spec.tile + 20;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={spec.item}
        rx={7}
        fill={hero ? C.heroCard : C.card}
        stroke={C.line}
        strokeWidth={1}
      />
      <rect
        x={x + 12}
        y={y + (spec.item - spec.tile) / 2}
        width={spec.tile}
        height={spec.tile}
        rx={6}
        fill={hero ? C.accentTile : C.tile}
      />
      {/* Lucide renders a 24-unit svg, so scale it in place rather than relying
          on x/y passing through to the nested element. */}
      <g
        transform={`translate(${x + 12 + (spec.tile - spec.glyph) / 2} ${
          y + (spec.item - spec.glyph) / 2
        }) scale(${spec.glyph / 24})`}
      >
        <Icon width={24} height={24} color={glyph} strokeWidth={2} />
      </g>
      <text
        x={textX}
        y={y + spec.item / 2 + spec.titleDy}
        fill={C.ink}
        fontSize={spec.titleSize}
        fontWeight={700}
      >
        {item.title}
      </text>
      <text
        x={textX}
        y={y + spec.item / 2 + spec.subDy}
        fill={C.muted}
        fontSize={spec.subSize}
      >
        {item.sub}
      </text>
    </g>
  );
}

export function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 1460 446"
      className="h-auto w-full min-w-[1100px] font-sans"
      role="img"
      aria-label="How Enigma fits, at a high level, in four steps. One: any AI action, such as a copilot chat or completion, an autonomous agent tool call, a service integration, or a record change. Two: Enigma, one decision point on the AI request path, which binds the actor server-side, decides with one policy evaluation, enforces control at the boundary, and routes review to an authorized approver. Three: exactly one outcome of allow, allow with controls, review, or deny. Four: the evidence chain, containing a decision of record, a tamper-evident hash-chained audit, a sealed reported outcome, and a frozen history that is never rewritten."
    >
      {XS.slice(0, 3).map((x, i) => {
        const from = x + (STEPS[i].hero ? HERO.w : STD.w) + 6;
        const to = XS[i + 1] - 6;
        return (
          <g key={`link-${x}`}>
            <path
              d={`M${from} ${AXIS} L${to} ${AXIS}`}
              stroke={C.line}
              strokeWidth={1}
              fill="none"
            />
            <path
              d={`M${to - 8} ${AXIS - 4} L${to} ${AXIS} L${to - 8} ${AXIS + 4}`}
              stroke={C.faint}
              strokeWidth={1}
              fill="none"
            />
            <circle cx={(from + to) / 2} cy={AXIS} r={2.5} fill={C.faint} />
            <text
              x={(from + to) / 2}
              y={AXIS - 13}
              fill={C.faint}
              fontSize={10.5}
              fontWeight={700}
              letterSpacing="0.8"
              textAnchor="middle"
              className="font-mono"
            >
              {LINKS[i].toUpperCase()}
            </text>
            <path
              d={`M${from} ${AXIS} L${to} ${AXIS}`}
              stroke={C.accent}
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="10 60"
              fill="none"
              opacity={0}
              className="enigma-line"
              style={{ animationDelay: LINE_DELAY(i) }}
            />
          </g>
        );
      })}

      {STEPS.map((step, i) => {
        const spec = step.hero ? HERO : STD;
        return (
          <g key={step.label}>
            <rect
              x={XS[i]}
              y={spec.y}
              width={spec.w}
              height={spec.h}
              rx={10}
              fill={step.hero ? C.heroGroup : C.group}
              stroke={step.hero ? C.accent : C.line}
              strokeWidth={step.hero ? 1.25 : 1}
            />
            <text
              x={XS[i] + spec.pad}
              y={spec.y + 30}
              fill={step.hero ? C.accent : C.faint}
              fontSize={12}
              fontWeight={700}
              letterSpacing="1.1"
              className="font-mono"
            >
              {step.label.toUpperCase()}
            </text>

            {step.hero && (
              <>
                <text
                  x={XS[i] + spec.pad}
                  y={spec.y + 72}
                  fill={C.ink}
                  fontSize={24}
                  fontWeight={700}
                  letterSpacing="-0.3"
                >
                  {step.hero.title}
                </text>
                <text
                  x={XS[i] + spec.pad}
                  y={spec.y + 93}
                  fill={C.muted}
                  fontSize={13}
                >
                  {step.hero.sub}
                </text>
              </>
            )}

            {step.items.map((item, j) => (
              <ItemCard
                key={item.title}
                x={XS[i] + spec.pad}
                y={spec.y + spec.top + j * (spec.item + spec.gap)}
                item={item}
                spec={spec}
                hero={Boolean(step.hero)}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
