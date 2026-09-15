/**
 * All public copy for the Enigma site.
 *
 * Claims here are bounded by the commercial claims audit: Enigma *authorizes*
 * client-commit actions rather than executing them, Outcome is client-reported,
 * and policy packs contribute obligations rather than conferring compliance.
 * Keep qualifiers intact when editing.
 */

export type Accent = "accent" | "brand" | "warn" | "danger" | "muted";

export const nav = {
  links: [
    { href: "#problem", label: "Problem" },
    { href: "#how", label: "How it works" },
    { href: "#architecture", label: "Architecture" },
    { href: "#decisions", label: "Decisions" },
    { href: "#evidence", label: "Evidence" },
    { href: "#healthcare", label: "Healthcare" },
  ],
  cta: { href: "#contact", label: "Request a working session" },
};

export const hero = {
  eyebrow: "Foundry360",
  title: "Enigma",
  tagline: "AI Action Governance Gateway",
  headline: "Govern AI actions from policy to proof.",
  body: "Enigma decides whether an AI-mediated action may proceed under enterprise policy, enforces that decision on the request path, routes exceptions to an authorized approver, and produces evidence of what was decided.",
  stages: ["Bind", "Decide", "Enforce", "Review", "Prove"],
  primary: { href: "#contact", label: "Request a working session" },
  secondary: { href: "#architecture", label: "See the architecture" },
  meta: "Enterprise appliance · Connected or air-gapped · Deploys in your environment",
};

export const problem = {
  kicker: "The gap",
  title: "Your AI can act. Nothing decides whether it should.",
  subtitle:
    "Identity systems, governance programs, and written AI policy all stop short of the moment that matters: the instant an agent attempts a consequential action.",
  cards: [
    {
      title: "No decision authority",
      accent: "danger" as Accent,
      points: [
        "Agents propose writes, tool calls, and regulated completions",
        "Coarse application permissions cannot judge this action, this data, this purpose",
        "Policy lives in documents, not on the request path",
      ],
    },
    {
      title: "No enforcement on the path",
      accent: "warn" as Accent,
      points: [
        "Controls are applied after the fact, if at all",
        "No consistent hold for high-consequence actions",
        "Human approval happens over email, not as a gate",
      ],
    },
    {
      title: "No defensible evidence",
      accent: "accent" as Accent,
      points: [
        "Who acted, what was attempted, what was decided, who approved?",
        "Application logs can be edited, so they are not proof",
        "Regulators and boards ask for the chain, not a dashboard",
      ],
    },
  ],
  band: "The missing layer is an authoritative decision at action time — on the request path, with enforcement behind it and evidence after it.",
};

export const thesis = {
  kicker: "Product thesis",
  title: "Enigma governs AI actions from policy to proof.",
  quote:
    "AI governance becomes meaningful when policy is applied to an actual AI action and produces an authoritative decision that can be enforced, reviewed, and evidenced.",
  stages: [
    {
      name: "Bind",
      lead: "Who and what is acting",
      body: "Application, user, agent, tool, and operation are resolved server-side rather than trusted from the client.",
      accent: "accent" as Accent,
    },
    {
      name: "Decide",
      lead: "One authoritative decision",
      body: "A single policy evaluation produces one immutable decision record for the attempt.",
      accent: "accent" as Accent,
    },
    {
      name: "Enforce",
      lead: "Control at the boundary",
      body: "Block, tokenize, restrict the model path, hold the write, or authorize the commit.",
      accent: "accent" as Accent,
    },
    {
      name: "Review",
      lead: "Human authorization",
      body: "Decisions held for review route to an authorized approver, never to the requesting end user.",
      accent: "warn" as Accent,
    },
    {
      name: "Prove",
      lead: "Evidence chain",
      body: "Decision, enforcement, and reported outcome, sealed in a tamper-evident audit chain.",
      accent: "brand" as Accent,
    },
  ],
};

export const how = {
  kicker: "How it works",
  title: "One decision path on the AI request path.",
  subtitle:
    "Applications and agents call Enigma instead of calling models and tools directly.",
  flow: [
    {
      title: "Enterprise app or agent",
      lines: ["Copilots, internal agents, services"],
      accent: "muted" as Accent,
    },
    {
      title: "Enigma Gateway",
      lines: [
        "Bind actors, classify data",
        "Policy engine produces a decision",
        "Enforce controls",
      ],
      accent: "accent" as Accent,
    },
    {
      title: "Execution",
      lines: [
        "Gateway runs the model,",
        "or authorizes the client system",
        "to perform the change",
      ],
      accent: "warn" as Accent,
    },
    {
      title: "Evidence",
      lines: ["Decision and audit chain", "plus reported outcome"],
      accent: "brand" as Accent,
    },
  ],
  notes: [
    {
      title: "Completions",
      body: "Enigma applies controls such as tokenization, redaction, and model eligibility, then executes the model itself.",
      accent: "accent" as Accent,
    },
    {
      title: "Actions and writes",
      body: "Enigma authorizes the commit. Your system of record performs the change and reports the outcome back.",
      accent: "warn" as Accent,
    },
    {
      title: "Fail-closed",
      body: "If the registry or the policy engine cannot establish authorization, the attempt is denied rather than assumed safe.",
      accent: "brand" as Accent,
    },
  ],
};

export const decisions = {
  kicker: "Decision model",
  title: "Four decisions. One record. No silent allow.",
  subtitle:
    "Every governed request produces exactly one immutable decision in the system of record.",
  rows: [
    {
      name: "ALLOW",
      accent: "brand" as Accent,
      meaning: "Proceed under gateway rules.",
      example: "A low-risk read where the authorization facts are satisfied.",
    },
    {
      name: "ALLOW WITH CONTROLS",
      accent: "accent" as Accent,
      meaning: "Proceed, with obligations applied.",
      example:
        "A question about protected health data is answered with tokenization and model eligibility limits.",
    },
    {
      name: "REVIEW",
      accent: "warn" as Accent,
      meaning: "Held for an authorized approver.",
      example:
        "A record change waits for human authorization, then the same request resumes.",
    },
    {
      name: "DENY",
      accent: "danger" as Accent,
      meaning: "Must not proceed at the boundary.",
      example:
        "The agent holds no grant for the tool, so no authorization to commit is issued.",
    },
  ],
  note: "The machine decision is never overwritten. Human review is additive, and a denial cannot be approved away.",
};

export const enforcement = {
  kicker: "Enforcement boundary",
  title: "We are precise about what the gateway controls.",
  subtitle:
    "Enforcement honesty is a feature. Buyers who over-trust a governance layer eventually discover the gap themselves.",
  columns: [
    {
      title: "Gateway-enforced",
      accent: "brand" as Accent,
      lead: "Enigma itself applies the control.",
      points: [
        "Authentication and actor binding",
        "Data classification and transforms",
        "Model eligibility and invocation",
        "Response inspection, release, or block",
        "Withholding authorization on deny or review",
      ],
    },
    {
      title: "Client-commit-required",
      accent: "warn" as Accent,
      lead: "Enigma authorizes; your system performs the change.",
      points: [
        "Authorization to commit is issued after allow or approval",
        "The system of record executes the write",
        "The client reports the outcome back to Enigma",
        "Bypassing the gateway remains a customer-side risk",
      ],
    },
  ],
  disclaimer: {
    title: "What we do not claim",
    body: "Enigma does not control every AI system in an enterprise, does not execute all enterprise changes, and does not by itself make an organization compliant. It replaces neither identity management, governance programs, data loss prevention, nor security monitoring. It decides and evidences AI actions on its path.",
  },
};

export const evidence = {
  kicker: "Proof",
  title: "Evidence a regulator can follow, not a dashboard.",
  subtitle:
    "Decision, enforcement, outcome, and evidence — with integrity that survives scrutiny.",
  items: [
    {
      title: "Decision of record",
      accent: "accent" as Accent,
      body: "Every governed request writes one immutable machine decision capturing actor, action, policy, reasoning, and enforcement.",
    },
    {
      title: "Tamper-evident audit",
      accent: "brand" as Accent,
      body: "Audit events are append-only, hash-chained, and signed, with periodic checkpoints and optional external anchoring.",
    },
    {
      title: "Reported outcome",
      accent: "warn" as Accent,
      body: "Client-commit actions return a sealed outcome receipt with conflict detection, recorded as reported evidence rather than assumed success.",
    },
    {
      title: "Frozen history",
      accent: "muted" as Accent,
      body: "Later policy or registry changes never rewrite past decisions. The record reflects what was true at decision time.",
    },
  ],
  band: "Cryptographic, tamper-evident audit — hash-chained and signed. Deliberately not a blockchain ledger.",
};

export const healthcare = {
  kicker: "Reference deployment",
  title: "A clinical copilot that cannot quietly change the chart.",
  subtitle:
    "A healthcare copilot calling Enigma, running as a live reference implementation.",
  rows: [
    {
      ask: "Summarize this chart",
      decision: "ALLOW WITH CONTROLS",
      accent: "accent" as Accent,
      detail:
        "Protected health data is tokenized before the model runs, and the clinician still gets the answer.",
    },
    {
      ask: "Add a clinical note",
      decision: "REVIEW",
      accent: "warn" as Accent,
      detail:
        "The write is held for an approver, then the same request resumes and commits.",
    },
    {
      ask: "Change this prescription",
      decision: "REVIEW → COMMIT",
      accent: "warn" as Accent,
      detail:
        "The authorized write updates the prescription record, and the client reports the outcome back.",
    },
    {
      ask: "Agent without a tool grant",
      decision: "DENY",
      accent: "danger" as Accent,
      detail:
        "No authorization to commit is issued, and the blocked attempt is still evidenced.",
    },
  ],
  note: "Healthcare policy packs contribute obligations through the same decision path, and organizations can layer their own rules on top — for example, holding clinical decision support for human review.",
};

export const category = {
  kicker: "Where Enigma fits",
  title: "Adjacent tools govern programs. Enigma governs the attempt.",
  subtitle:
    "This is a category boundary, not a competitive attack. Most of these stay in the stack alongside Enigma.",
  adjacent: [
    { name: "Identity management", body: "Who may sign in and hold access" },
    { name: "Governance and risk", body: "Programs, registers, attestations" },
    { name: "Data loss prevention", body: "Data movement and exfiltration" },
    { name: "Security monitoring", body: "Telemetry and correlation" },
    { name: "AI gateways", body: "Model routing, keys, and cost" },
    { name: "AI observability", body: "Traces, quality, and drift" },
  ],
  highlight: {
    label: "AI Action Governance — Enigma",
    lead: "Action-time decision, enforcement on the path, authorized human review, and evidence of what was decided and reported.",
    body: "None of the adjacent categories answer the runtime question: should this specific AI action, by this actor, on this data, for this purpose, be allowed right now?",
  },
};

export const product = {
  kicker: "Product",
  title: "Available now as an enterprise appliance.",
  subtitle:
    "Deliberately scoped to the action-time governance chain, hardened — not a platform land grab.",
  columns: [
    {
      title: "What ships",
      accent: "brand" as Accent,
      points: [
        "Governed completions and actions APIs",
        "Server-authoritative agent and tool registry",
        "One policy engine, one decision record",
        "Approver review with resume",
        "Decisions-first operator console",
        "Tamper-evident audit and outcome receipts",
      ],
    },
    {
      title: "Deployment",
      accent: "accent" as Accent,
      points: [
        "Connected enterprise deployment",
        "Air-gapped with local models",
        "Customer-controlled evidence storage",
        "Fail-closed production defaults",
      ],
    },
    {
      title: "Packaging",
      accent: "warn" as Accent,
      points: [
        "Enigma Core for the enterprise",
        "Healthcare policy pack as an option",
        "Customer-specific policies on the same engine",
      ],
    },
  ],
};

export const contact = {
  kicker: "Next step",
  title: "Start with one real AI action.",
  body: "A working session on a single consequential action in your environment, followed by a live walkthrough of the decision, the hold, the approval, and the evidence it produces.",
  email: "hello@foundry360.us",
  site: "foundry360.us",
};
