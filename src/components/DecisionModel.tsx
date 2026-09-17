/* One evaluation forks into four mutually exclusive outcomes, grouped by what
   they do to the request: proceed, hold, or stop. The diagram is the point;
   the labels stay short on purpose. */

const C = {
  ink: "#09090b",
  muted: "#64748b",
  line: "#cbd5e1",
  hub: "#ffffff",
  hubStroke: "#2697d9",
  card: "#ffffff",
  cardStroke: "#e2e8f0",
};

const OUTCOME = {
  allow: "#15803d",
  controls: "#1b72a6",
  review: "#b45309",
  deny: "#b91c1c",
};

const HUB = { x: 620, y: 48, w: 148, h: 44 };
const CROSS_Y = 118;
const LANE_Y = 168;
const STEM_Y = LANE_Y + 28;
const CARD_Y = 220;
const CARD_H = 72;
const CARD_W = 200;

/* Shared path length so every pulse travels hub → card in the same time. */
const PATH_LEN = 600;
const PULSE = 36;

type Card = {
  name: string;
  meaning: string;
  color: string;
  x: number;
};

type Lane = {
  label: string;
  color: string;
  cards: Card[];
};

/* Hold / Review sits on the hub axis so One evaluation connects straight down.
   Proceed stays left and Stop stays right, with a gutter so Allow with Controls
   and Review do not collapse into one cluster. */
const LANES: Lane[] = [
  {
    label: "Proceed",
    color: OUTCOME.allow,
    cards: [
      {
        name: "ALLOW",
        meaning: "Release on the path",
        color: OUTCOME.allow,
        x: 40,
      },
      {
        name: "ALLOW WITH CONTROLS",
        meaning: "Release with obligations",
        color: OUTCOME.allow,
        x: 264,
      },
    ],
  },
  {
    label: "Hold",
    color: OUTCOME.review,
    cards: [
      {
        name: "REVIEW",
        meaning: "Authorized approver next",
        color: OUTCOME.review,
        /* Centered on HUB.x */
        x: HUB.x - CARD_W / 2,
      },
    ],
  },
  {
    label: "Stop",
    color: OUTCOME.deny,
    cards: [
      {
        name: "DENY",
        meaning: "No path forward",
        color: OUTCOME.deny,
        x: 840,
      },
    ],
  },
];

function hubBottom() {
  return HUB.y + HUB.h;
}

function laneCenter(lane: Lane) {
  const first = lane.cards[0];
  const last = lane.cards[lane.cards.length - 1];
  return (first.x + last.x + CARD_W) / 2;
}

/* Full route from the hub through the lane fork and into one outcome card. */
function flowPath(laneCx: number, cardCx: number) {
  if (laneCx === HUB.x && cardCx === HUB.x) {
    return `M ${HUB.x} ${hubBottom()} V ${CARD_Y}`;
  }
  return `M ${HUB.x} ${hubBottom()} V ${CROSS_Y} H ${laneCx} V ${STEM_Y} H ${cardCx} V ${CARD_Y}`;
}

export function DecisionModel() {
  const hubCy = hubBottom();
  const holdCx = laneCenter(LANES[1]);
  const flows = LANES.flatMap((lane) => {
    const cx = laneCenter(lane);
    return lane.cards.map((card) => ({
      lane,
      cx,
      card,
      cardCx: card.x + CARD_W / 2,
    }));
  });

  return (
    <svg
      viewBox="0 0 1180 320"
      className="h-auto w-full min-w-[840px]"
      role="img"
      aria-label="One policy evaluation forks into four mutually exclusive decisions: Allow and Allow with Controls proceed, Review holds for an approver, and Deny stops the request."
    >
      {/* Full crossbar, then the Hold spine with the same label gap as Proceed/Stop. */}
      <path
        d={`M ${laneCenter(LANES[0])} ${CROSS_Y} H ${laneCenter(LANES[2])}`}
        fill="none"
        stroke={C.line}
        strokeWidth="1.5"
      />
      <path
        d={`M ${HUB.x} ${hubCy} V ${LANE_Y - 18} M ${HUB.x} ${LANE_Y + 10} V ${CARD_Y}`}
        fill="none"
        stroke={C.line}
        strokeWidth="1.75"
      />

      {LANES.map((lane) => {
        const cx = laneCenter(lane);
        const isHold = cx === holdCx;
        return (
          <g key={lane.label}>
            {!isHold ? (
              <path
                d={`M ${cx} ${CROSS_Y} V ${LANE_Y - 18}`}
                fill="none"
                stroke={C.line}
                strokeWidth="1.5"
              />
            ) : null}
            <text
              x={cx}
              y={LANE_Y}
              textAnchor="middle"
              fill={lane.color}
              fontFamily="var(--font-roboto-mono), ui-monospace, monospace"
              fontSize="12"
              fontWeight="700"
              letterSpacing="0.14em"
            >
              {lane.label.toUpperCase()}
            </text>

            {lane.cards.map((card) => {
              const cardCx = card.x + CARD_W / 2;
              return (
                <g key={card.name}>
                  {!isHold ? (
                    <path
                      d={`M ${cx} ${LANE_Y + 10} V ${STEM_Y} H ${cardCx} V ${CARD_Y}`}
                      fill="none"
                      stroke={C.line}
                      strokeWidth="1.5"
                    />
                  ) : null}
                  <rect
                    x={card.x}
                    y={CARD_Y}
                    width={CARD_W}
                    height={CARD_H}
                    rx="10"
                    fill={C.card}
                    stroke={C.cardStroke}
                    strokeWidth="1"
                  />
                  <rect
                    x={card.x}
                    y={CARD_Y}
                    width={CARD_W}
                    height="3"
                    rx="1.5"
                    fill={card.color}
                  />
                  <text
                    x={cardCx}
                    y={CARD_Y + 30}
                    textAnchor="middle"
                    fill={card.color}
                    fontFamily="var(--font-roboto-mono), ui-monospace, monospace"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="0.1em"
                  >
                    {card.name}
                  </text>
                  <text
                    x={cardCx}
                    y={CARD_Y + 52}
                    textAnchor="middle"
                    fill={C.muted}
                    fontFamily="var(--font-roboto), ui-sans-serif, system-ui"
                    fontSize="13"
                  >
                    {card.meaning}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      {flows.map((flow, i) => (
        <path
          key={`flow-${flow.card.name}`}
          d={flowPath(flow.cx, flow.cardCx)}
          fill="none"
          stroke={flow.card.color}
          strokeWidth="2.25"
          strokeLinecap="round"
          pathLength={PATH_LEN}
          strokeDasharray={`${PULSE} ${PATH_LEN}`}
          className="enigma-decision-flow"
          style={{ animationDelay: `${i * 2}s` }}
          opacity="0"
        />
      ))}

      <rect
        x={HUB.x - HUB.w / 2}
        y={HUB.y}
        width={HUB.w}
        height={HUB.h}
        rx="22"
        fill={C.hub}
        stroke={C.hubStroke}
        strokeWidth="1.75"
      />
      <text
        x={HUB.x}
        y={HUB.y + 28}
        textAnchor="middle"
        fill={C.ink}
        fontFamily="var(--font-roboto), ui-sans-serif, system-ui"
        fontSize="15"
        fontWeight="700"
      >
        One evaluation
      </text>
    </svg>
  );
}
