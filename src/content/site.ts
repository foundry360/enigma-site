/**
 * All public copy for the Enigma site.
 *
 * Claims here are bounded by the commercial claims audit: Enigma *authorizes*
 * client-commit actions rather than executing them, Outcome is client-reported,
 * and policy packs contribute obligations rather than conferring compliance.
 * Keep qualifiers intact when editing.
 */

import type { IconName } from "@/components/icons";

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
  secondary: { href: "#architecture", label: "See the architecture" },
};

export const problem = {
  kicker: "The gap",
  title: "Your AI can act. Nothing decides whether it should.",
  subtitle:
    "Identity systems, governance programs, and written AI policy all stop short of the moment that matters: the instant an agent attempts a consequential action.",
  cards: [
    {
      title: "No decision authority",
      icon: "gavel" as IconName,
      accent: "accent" as Accent,
      body: "Agents propose writes, tool calls, and regulated completions all day, but coarse application permissions cannot judge this action, on this data, for this purpose. The policy that should answer the question lives in documents rather than on the request path.",
    },
    {
      title: "No enforcement on the path",
      icon: "shieldOff" as IconName,
      accent: "accent" as Accent,
      body: "Controls are applied after the fact, if they are applied at all. There is no consistent hold for high-consequence actions, and human approval happens over email instead of acting as a gate the action has to pass through.",
    },
    {
      title: "No defensible evidence",
      icon: "scrollText" as IconName,
      accent: "accent" as Accent,
      body: "Who acted, what was attempted, what was decided, and who approved it? Application logs can be edited, so they are not proof — and regulators and boards ask for the chain, not a dashboard.",
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
      icon: "fingerprint" as IconName,
      lead: "Who and what is acting",
      body: "Application, user, agent, tool, and operation are resolved server-side rather than trusted from the client.",
      accent: "accent" as Accent,
    },
    {
      name: "Decide",
      icon: "scale" as IconName,
      lead: "One authoritative decision",
      body: "A single policy evaluation produces one immutable decision record for the attempt.",
      accent: "accent" as Accent,
    },
    {
      name: "Enforce",
      icon: "shieldCheck" as IconName,
      lead: "Control at the boundary",
      body: "Block, tokenize, restrict the model path, hold the write, or authorize the commit.",
      accent: "accent" as Accent,
    },
    {
      name: "Review",
      icon: "userCheck" as IconName,
      lead: "Human authorization",
      body: "Decisions held for review route to an authorized approver, never to the requesting end user.",
      accent: "accent" as Accent,
    },
    {
      name: "Prove",
      icon: "fileCheck" as IconName,
      lead: "Evidence chain",
      body: "Decision, enforcement, and reported outcome, sealed in a tamper-evident audit chain.",
      accent: "accent" as Accent,
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
      icon: "appWindow" as IconName,
      lines: ["Copilots, internal agents, services"],
      accent: "muted" as Accent,
    },
    {
      title: "Enigma Gateway",
      icon: "shield" as IconName,
      lines: [
        "Bind actors, classify data",
        "Policy engine produces a decision",
        "Enforce controls",
      ],
      accent: "accent" as Accent,
    },
    {
      title: "Execution",
      icon: "cpu" as IconName,
      lines: [
        "Gateway runs the model,",
        "or authorizes the client system",
        "to perform the change",
      ],
      accent: "muted" as Accent,
    },
    {
      title: "Evidence",
      icon: "archive" as IconName,
      lines: ["Decision and audit chain", "plus reported outcome"],
      accent: "muted" as Accent,
    },
  ],
  notes: [
    {
      title: "Completions",
      icon: "messageSquare" as IconName,
      body: "Enigma applies controls such as tokenization, redaction, and model eligibility, then executes the model itself.",
      accent: "accent" as Accent,
    },
    {
      title: "Actions and writes",
      icon: "squarePen" as IconName,
      body: "Enigma authorizes the commit. Your system of record performs the change and reports the outcome back.",
      accent: "accent" as Accent,
    },
    {
      title: "Fail-closed",
      icon: "lock" as IconName,
      body: "If the registry or the policy engine cannot establish authorization, the attempt is denied rather than assumed safe.",
      accent: "accent" as Accent,
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
      icon: "circleCheck" as IconName,
      accent: "brand" as Accent,
      meaning: "Proceed under gateway rules.",
      example: "A low-risk read where the authorization facts are satisfied.",
    },
    {
      name: "ALLOW WITH CONTROLS",
      icon: "shieldCheck" as IconName,
      accent: "accent" as Accent,
      meaning: "Proceed, with obligations applied.",
      example:
        "A question about protected health data is answered with tokenization and model eligibility limits.",
    },
    {
      name: "REVIEW",
      icon: "clock" as IconName,
      accent: "warn" as Accent,
      meaning: "Held for an authorized approver.",
      example:
        "A record change waits for human authorization, then the same request resumes.",
    },
    {
      name: "DENY",
      icon: "ban" as IconName,
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
      icon: "shieldCheck" as IconName,
      accent: "accent" as Accent,
      lead: "Enigma itself applies the control.",
      body: "Authentication and actor binding, data classification and transforms, model eligibility and invocation, and inspection of the response before release all happen inside the gateway. When the decision is deny or review, Enigma withholds authorization rather than trusting the caller to stop.",
    },
    {
      title: "Client-commit-required",
      icon: "handshake" as IconName,
      accent: "accent" as Accent,
      lead: "Enigma authorizes; your system performs the change.",
      body: "After an allow or an approval, Enigma issues authorization to commit, your system of record executes the write, and the client reports the outcome back for the evidence chain. Bypassing the gateway altogether remains a customer-side risk.",
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
      icon: "fileCheck" as IconName,
      accent: "accent" as Accent,
      body: "Every governed request writes one immutable machine decision capturing actor, action, policy, reasoning, and enforcement.",
    },
    {
      title: "Tamper-evident audit",
      icon: "link" as IconName,
      accent: "accent" as Accent,
      body: "Audit events are append-only, hash-chained, and signed, with periodic checkpoints and optional external anchoring.",
    },
    {
      title: "Reported outcome",
      icon: "receipt" as IconName,
      accent: "accent" as Accent,
      body: "Client-commit actions return a sealed outcome receipt with conflict detection, recorded as reported evidence rather than assumed success.",
    },
    {
      title: "Frozen history",
      icon: "history" as IconName,
      accent: "accent" as Accent,
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
      icon: "shieldCheck" as IconName,
      decision: "ALLOW WITH CONTROLS",
      accent: "accent" as Accent,
      detail:
        "Protected health data is tokenized before the model runs, and the clinician still gets the answer.",
    },
    {
      ask: "Add a clinical note",
      icon: "clock" as IconName,
      decision: "REVIEW",
      accent: "warn" as Accent,
      detail:
        "The write is held for an approver, then the same request resumes and commits.",
    },
    {
      ask: "Change this prescription",
      icon: "userCheck" as IconName,
      decision: "REVIEW → COMMIT",
      accent: "warn" as Accent,
      detail:
        "The authorized write updates the prescription record, and the client reports the outcome back.",
    },
    {
      ask: "Agent without a tool grant",
      icon: "ban" as IconName,
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
    {
      name: "Identity management",
      icon: "keyRound" as IconName,
      body: "Who may sign in and hold access",
    },
    {
      name: "Governance and risk",
      icon: "clipboardList" as IconName,
      body: "Programs, registers, attestations",
    },
    {
      name: "Data loss prevention",
      icon: "shieldAlert" as IconName,
      body: "Data movement and exfiltration",
    },
    {
      name: "Security monitoring",
      icon: "activity" as IconName,
      body: "Telemetry and correlation",
    },
    {
      name: "AI gateways",
      icon: "route" as IconName,
      body: "Model routing, keys, and cost",
    },
    {
      name: "AI observability",
      icon: "lineChart" as IconName,
      body: "Traces, quality, and drift",
    },
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
      icon: "package" as IconName,
      accent: "accent" as Accent,
      body: "Governed completions and actions APIs sit in front of a server-authoritative agent and tool registry and a single policy engine that writes one decision record per attempt. Approver review resumes the original request, and a decisions-first operator console sits over tamper-evident audit and outcome receipts.",
    },
    {
      title: "Deployment",
      icon: "server" as IconName,
      accent: "accent" as Accent,
      body: "Enigma runs connected inside the enterprise or fully air-gapped against local models. Evidence stays in storage the customer controls, and production defaults are fail-closed rather than permissive.",
    },
    {
      title: "Packaging",
      icon: "boxes" as IconName,
      accent: "accent" as Accent,
      body: "Enigma Core covers the enterprise, and the healthcare policy pack is an option layered on top. Customer-specific policies run on the same engine as everything else rather than on a forked one.",
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
