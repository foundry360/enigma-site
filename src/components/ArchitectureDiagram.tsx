const C = {
  panel: "#161b21",
  panelAlt: "#1a2028",
  line: "#232833",
  lineStrong: "#2e3544",
  ink: "#f4f6f8",
  muted: "#8b93a7",
  faint: "#5c6578",
  accent: "#2697d9",
  brand: "#1fad6d",
  warn: "#fbbf24",
};

type GroupProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  color: string;
  fill?: string;
  children?: React.ReactNode;
};

function Group({
  x,
  y,
  w,
  h,
  label,
  color,
  fill = C.panel,
  children,
}: GroupProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill={fill}
        stroke={color}
        strokeWidth={1}
      />
      <text
        x={x + 14}
        y={y + 22}
        fill={color}
        fontSize={10.5}
        fontWeight={700}
        letterSpacing="1.2"
        className="font-mono"
      >
        {label.toUpperCase()}
      </text>
      {children}
    </g>
  );
}

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  color?: string;
};

function Box({ x, y, w, h, title, sub, color = C.ink }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={5}
        fill={C.panelAlt}
        stroke={C.lineStrong}
        strokeWidth={1}
      />
      <text
        x={x + 10}
        y={y + (sub ? 20 : h / 2 + 4)}
        fill={color}
        fontSize={11.5}
        fontWeight={600}
      >
        {title}
      </text>
      {sub ? (
        <text x={x + 10} y={y + 35} fill={C.muted} fontSize={9.5}>
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({ x, y }: { x: number; y: number }) {
  return (
    <text
      x={x}
      y={y}
      fill={C.faint}
      fontSize={17}
      textAnchor="middle"
      aria-hidden
    >
      →
    </text>
  );
}

export function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 1240 700"
      className="h-auto w-full min-w-[1080px] font-sans"
      role="img"
      aria-label="Enigma reference architecture: client layer calls the Enigma gateway, which binds actors, interrogates input, produces one policy decision, enforces it, and either executes the model or authorizes the customer system to commit. All decisions, approvals, outcomes, and audit events persist to a customer-controlled PostgreSQL evidence layer."
    >
      {/* client layer */}
      <Group x={20} y={70} w={215} h={380} label="Client layer" color={C.muted}>
        <Box x={36} y={112} w={183} h={66} title="Enterprise copilots" sub="Embedded in the SoR UI" />
        <Box x={36} y={192} w={183} h={66} title="Agents & services" sub="Governed AI actors" />
        <Box x={36} y={272} w={183} h={66} title="REST / LLM clients" sub="Application API key" />
        <Box x={36} y={352} w={183} h={66} title="Operator console" sub="Decisions · Audit" />
      </Group>

      <rect x={250} y={20} width={2} height={430} fill={C.line} />
      <text x={251} y={468} fill={C.faint} fontSize={9} textAnchor="middle" className="font-mono">
        DMZ
      </text>
      <Arrow x={251} y={250} />

      {/* gateway */}
      <rect x={265} y={20} width={610} height={430} rx={8} fill={C.panel} stroke={C.accent} />
      <rect x={265} y={22} width={3} height={426} fill={C.accent} />
      <text x={283} y={44} fill={C.accent} fontSize={10.5} fontWeight={700} letterSpacing="1.2" className="font-mono">
        ENIGMA GATEWAY · POLICY DECISION POINT + ENFORCEMENT POINT
      </text>

      <Group x={281} y={60} w={281} h={118} label="1 · Bind" color={C.ink} fill={C.panelAlt}>
        <Box x={293} y={94} w={124} h={32} title="API key → app" />
        <Box x={425} y={94} w={124} h={32} title="User + purpose" />
        <Box x={293} y={132} w={124} h={32} title="Agent (server)" />
        <Box x={425} y={132} w={124} h={32} title="Tool + operation" />
      </Group>

      <Group x={578} y={60} w={281} h={118} label="2 · Interrogate input" color={C.ink} fill={C.panelAlt}>
        <Box x={590} y={94} w={124} h={32} title="Detectors" />
        <Box x={722} y={94} w={124} h={32} title="Semantic class." />
        <Box x={590} y={132} w={124} h={32} title="Entity types" />
        <Box x={722} y={132} w={124} h={32} title="Sensitivity label" />
      </Group>

      <Group
        x={281}
        y={194}
        w={578}
        h={128}
        label="3 · Decide · enterprise policy architecture (single PDP)"
        color={C.accent}
        fill={C.panelAlt}
      >
        <Box x={293} y={226} w={131} h={44} title="Policy packs" sub="Regulatory + baseline" />
        <Box x={434} y={226} w={131} h={44} title="Agent → tool grant" sub="Deny if not granted" />
        <Box x={575} y={226} w={131} h={44} title="Obligations" sub="Pack-contributed" />
        <Box x={716} y={226} w={131} h={44} title="Model eligibility" sub="Restrict provider" />
        <rect x={293} y={278} width={554} height={32} rx={6} fill={C.panel} stroke={C.accent} />
        <text
          x={570}
          y={298}
          fill={C.ink}
          fontSize={11}
          fontWeight={700}
          textAnchor="middle"
          letterSpacing="0.6"
          className="font-mono"
        >
          ONE DECISION → ALLOW · ALLOW WITH CONTROLS · REVIEW · DENY
        </text>
      </Group>

      <Group x={281} y={338} w={281} h={96} label="4 · Enforce" color={C.brand} fill={C.panelAlt}>
        <Box x={293} y={366} w={124} h={28} title="Tokenize / redact" />
        <Box x={425} y={366} w={124} h={28} title="Hold for review" />
        <Box x={293} y={398} w={124} h={28} title="Block" />
        <Box x={425} y={398} w={124} h={28} title="Authorize commit" />
      </Group>

      <Group x={578} y={338} w={281} h={96} label="5 · Response path" color={C.brand} fill={C.panelAlt}>
        <Box x={590} y={366} w={124} h={28} title="Inspector" />
        <Box x={722} y={366} w={124} h={28} title="Grounding check" />
        <Box x={590} y={398} w={124} h={28} title="De-tokenize" />
        <Box x={722} y={398} w={124} h={28} title="Release or block" />
      </Group>

      <Arrow x={890} y={250} />

      {/* right column */}
      <Group x={905} y={20} w={315} h={130} label="Model execution" color={C.muted}>
        <Box x={921} y={52} w={137} h={30} title="Local model" />
        <Box x={1066} y={52} w={137} h={30} title="External provider" />
        <Box
          x={921}
          y={90}
          w={282}
          h={44}
          title="Selected by policy eligibility"
          sub="Air-gap supported · not cost or load routing"
        />
      </Group>

      <Group x={905} y={166} w={315} h={130} label="Human review" color={C.warn}>
        <Box
          x={921}
          y={198}
          w={282}
          h={44}
          title="Authorized approver resolves"
          sub="Never the requesting end user"
        />
        <Box
          x={921}
          y={248}
          w={282}
          h={40}
          title="Authorize → resume"
          sub="Resume revalidates the binding"
        />
      </Group>

      <Group x={905} y={312} w={315} h={138} label="Client commit · customer executes" color={C.warn}>
        <Box
          x={921}
          y={344}
          w={282}
          h={44}
          title="System of record performs the write"
          sub="Enigma does not execute external DML"
        />
        <Box
          x={921}
          y={396}
          w={282}
          h={44}
          title="Outcome reported and sealed"
          sub="Conflict detection on report"
        />
      </Group>

      {/* evidence */}
      <Group
        x={20}
        y={480}
        w={1200}
        h={170}
        label="Evidence & data layer · customer-controlled PostgreSQL"
        color={C.brand}
      >
        <Box x={36} y={520} w={281} h={56} title="Decision records" sub="Authoritative, immutable, frozen" />
        <Box x={332} y={520} w={281} h={56} title="Agents · tools · grants" sub="Server-authoritative registry" />
        <Box x={628} y={520} w={281} h={56} title="Policies · packs · versions" sub="Obligations and scopes" />
        <Box x={924} y={520} w={281} h={56} title="Approvals" sub="Human resolutions, additive" />
        <Box x={36} y={586} w={281} h={56} title="Action outcomes" sub="Client-reported execution" />
        <Box x={332} y={586} w={281} h={56} title="Token vault" sub="Tokenization store" />
        <Box x={628} y={586} w={281} h={56} title="Audit events" sub="Append-only · hash-chained · signed" />
        <Box x={924} y={586} w={281} h={56} title="Checkpoints · anchors" sub="Integrity + optional anchoring" />
      </Group>

      <text x={20} y={678} fill={C.muted} fontSize={10.5}>
        Enforcement boundary: Enigma authorizes, the customer system executes. Authorization to commit is not proof of commit.
      </text>
    </svg>
  );
}
