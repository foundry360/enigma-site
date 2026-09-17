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

/* Every call to action asks for the same conversation, so the nav, the hero,
   and the closing block all read from one label. */
export const ctaLabel = "Consult an Expert";

export const nav = {
  links: [
    { href: "#problem", label: "Problem" },
    { href: "#how", label: "How it works" },
    { href: "#architecture", label: "Architecture" },
    { href: "#decisions", label: "Decisions" },
    { href: "#evidence", label: "Evidence" },
  ],
  cta: { href: "#contact", label: ctaLabel },
};

export const hero = {
  eyebrow: "Foundry360",
  title: "Enigma",
  tagline: "AI Action Governance Gateway",
  headline: "Govern AI Actions From Policy To Proof.",
  /* Rendered italic and in the brand blue inside the headline. */
  headlineAccent: "AI",
  body: "Enigma determines whether AI actions may proceed under enterprise policy, enforces the decision at the request boundary, routes exceptions to authorized approvers, and creates proof of what was decided and what happened.",
  cta: { href: "#contact", label: ctaLabel },
};

export const problem = {
  kicker: "The gap",
  title: "Your AI Can Act. Nothing Decides Whether It Should.",
  subtitle:
    "Identity systems, governance programs, and written AI policy all stop short of the moment that matters: the instant an agent attempts a consequential action.",
  cards: [
    {
      title: "No Decision Authority",
      icon: "gavel" as IconName,
      accent: "accent" as Accent,
      body: "Agents propose writes, tool calls, and regulated completions all day, but coarse application permissions cannot judge this action, on this data, for this purpose. The policy that should answer the question lives in documents rather than on the request path.",
    },
    {
      title: "No Enforcement On The Path",
      icon: "shieldOff" as IconName,
      accent: "accent" as Accent,
      body: "Controls are applied after the fact, if they are applied at all. There is no consistent hold for high-consequence actions, and human approval happens over email instead of acting as a gate the action has to pass through.",
    },
    {
      title: "No Defensible Evidence",
      icon: "scrollText" as IconName,
      accent: "accent" as Accent,
      body: "Who acted, what was attempted, what was decided, and who approved it? Application logs can be edited, so they are not proof. Regulators and boards ask for the chain, not a dashboard.",
    },
  ],
  band: "The missing layer is an authoritative decision at action time, on the request path, with enforcement behind it and evidence after it.",
};

export const thesis = {
  kicker: "Product thesis",
  title: "Enigma Governs AI Actions From Policy To Proof.",
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
  title: "One Decision Path On The AI Request Path.",
  subtitle:
    "Applications and agents call Enigma instead of calling models and tools directly.",
  flow: [
    {
      title: "Enterprise App Or Agent",
      icon: "appWindow" as IconName,
      lines: ["Copilots, internal agents, services"],
      accent: "accent" as Accent,
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
      accent: "accent" as Accent,
    },
    {
      title: "Evidence",
      icon: "archive" as IconName,
      lines: ["Decision and audit chain", "plus reported outcome"],
      accent: "accent" as Accent,
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
      title: "Actions And Writes",
      icon: "squarePen" as IconName,
      body: "Enigma authorizes the commit. Your system of record performs the change and reports the outcome back.",
      accent: "accent" as Accent,
    },
    {
      title: "Fail-Closed",
      icon: "lock" as IconName,
      body: "If the registry or the policy engine cannot establish authorization, the attempt is denied rather than assumed safe.",
      accent: "accent" as Accent,
    },
  ],
};

export const decisions = {
  kicker: "Decision model",
  title: "Four Decisions. One Record. No Silent Allow.",
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
  title: "We Are Precise About What The Gateway Controls.",
  subtitle:
    "Enforcement honesty is a feature. Buyers who over-trust a governance layer eventually discover the gap themselves.",
  columns: [
    {
      title: "Gateway-Enforced",
      icon: "shieldCheck" as IconName,
      accent: "accent" as Accent,
      lead: "Enigma itself applies the control.",
      body: "Authentication and actor binding, data classification and transforms, model eligibility and invocation, and inspection of the response before release all happen inside the gateway. When the decision is deny or review, Enigma withholds authorization rather than trusting the caller to stop.",
    },
    {
      title: "Client-Commit-Required",
      icon: "handshake" as IconName,
      accent: "accent" as Accent,
      lead: "Enigma authorizes; your system performs the change.",
      body: "After an allow or an approval, Enigma issues authorization to commit, your system of record executes the write, and the client reports the outcome back for the evidence chain. Bypassing the gateway altogether remains a customer-side risk.",
    },
  ],
  disclaimer: {
    title: "What We Do Not Claim",
    body: "Enigma does not control every AI system in an enterprise, does not execute all enterprise changes, and does not by itself make an organization compliant. It replaces neither identity management, governance programs, data loss prevention, nor security monitoring. It decides and evidences AI actions on its path.",
  },
};

export const evidence = {
  kicker: "Proof",
  title: "Evidence A Regulator Can Follow, Not A Dashboard.",
  subtitle:
    "Decision, enforcement, outcome, and evidence, with integrity that survives scrutiny.",
  items: [
    {
      title: "Decision Of Record",
      icon: "fileCheck" as IconName,
      accent: "accent" as Accent,
      body: "Every governed request writes one immutable machine decision capturing actor, action, policy, reasoning, and enforcement.",
    },
    {
      title: "Tamper-Evident Audit",
      icon: "link" as IconName,
      accent: "accent" as Accent,
      body: "Audit events are append-only, hash-chained, and signed, with periodic checkpoints and optional external anchoring.",
    },
    {
      title: "Reported Outcome",
      icon: "receipt" as IconName,
      accent: "accent" as Accent,
      body: "Client-commit actions return a sealed outcome receipt with conflict detection, recorded as reported evidence rather than assumed success.",
    },
    {
      title: "Frozen History",
      icon: "history" as IconName,
      accent: "accent" as Accent,
      body: "Later policy or registry changes never rewrite past decisions. The record reflects what was true at decision time.",
    },
  ],
  band: "Cryptographic, tamper-evident audit, hash-chained and signed. Deliberately not a blockchain ledger.",
};

export const category = {
  kicker: "Where Enigma fits",
  title: "Adjacent Tools Govern Programs. Enigma Governs The Attempt.",
  subtitle:
    "This is a category boundary, not a competitive attack. Most of these stay in the stack alongside Enigma.",
  adjacent: [
    {
      name: "Identity Management",
      icon: "keyRound" as IconName,
      body: "Who may sign in and hold access",
    },
    {
      name: "Governance And Risk",
      icon: "clipboardList" as IconName,
      body: "Programs, registers, attestations",
    },
    {
      name: "Data Loss Prevention",
      icon: "shieldAlert" as IconName,
      body: "Data movement and exfiltration",
    },
    {
      name: "Security Monitoring",
      icon: "activity" as IconName,
      body: "Telemetry and correlation",
    },
    {
      name: "AI Gateways",
      icon: "route" as IconName,
      body: "Model routing, keys, and cost",
    },
    {
      name: "AI Observability",
      icon: "lineChart" as IconName,
      body: "Traces, quality, and drift",
    },
  ],
  highlight: {
    label: "AI Action Governance: Enigma",
    lead: "Action-time decision, enforcement on the path, authorized human review, and evidence of what was decided and reported.",
    body: "None of the adjacent categories answer the runtime question: should this specific AI action, by this actor, on this data, for this purpose, be allowed right now?",
  },
};

export const product = {
  kicker: "Product",
  title: "Available Now As An Enterprise Appliance.",
  subtitle:
    "Deliberately scoped to the action-time governance chain and hardened, not a platform land grab.",
  columns: [
    {
      title: "What Ships",
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
  title: "Start With One Real AI Action.",
  body: "A working session on a single consequential action in your environment, followed by a live walkthrough of the decision, the hold, the approval, and the evidence it produces.",
  email: "hello@foundry360.us",
  site: "foundry360.us",
};
