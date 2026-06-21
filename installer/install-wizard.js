#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "generated");
const demoMode = process.argv.includes("--demo");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question, fallback = "") {
  return new Promise((resolve) => {
    const suffix = fallback ? ` (${fallback})` : "";
    rl.question(`${question}${suffix}: `, (answer) => {
      resolve(answer.trim() || fallback);
    });
  });
}

function splitList(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

async function main() {
  console.log("AI Inbox Triage Kit installer questionnaire");
  console.log("This writes local files to generated/. No credentials are requested here.\n");

  const answers = demoMode
    ? {
        primaryEmail: "founder@example.com",
        primaryPrefix: "CEO@COMPANY",
        additional: "ops@example.com",
        importantPeople: "Investor Contact, Key Partner, Board Member",
        companyFinance: "finance@example.com",
        personalAdmin: "personal-admin@example.com",
        opsDelegate: "ops@example.com",
        urgentChannels: "Notion Inbox, Chat, Text",
        notionRulesUrl: "https://notion.example/rules",
        notionInboxUrl: "https://notion.example/inbox",
      }
    : {
        primaryEmail: await ask("Primary Gmail/Workspace inbox"),
        primaryPrefix: await ask("Short prefix for that inbox", "CEO@PRIMARY"),
        additional: await ask("Additional inboxes, comma-separated", ""),
        importantPeople: await ask("Important people or roles, comma-separated", "Investor Contact, Key Partner, Board Member"),
        companyFinance: await ask("Company finance delegate email", "finance@example.com"),
        personalAdmin: await ask("Personal admin delegate email", "personal-admin@example.com"),
        opsDelegate: await ask("Operations/legal delegate email", "ops@example.com"),
        urgentChannels: await ask("Urgent notification channels, comma-separated", "Notion Inbox, Chat, Text"),
        notionRulesUrl: await ask("Notion rules database URL", ""),
        notionInboxUrl: await ask("Notion decision inbox database URL", ""),
      };

  rl.close();

  fs.mkdirSync(outDir, { recursive: true });

  const config = {
    sourceInboxes: [
      {
        prefix: answers.primaryPrefix,
        email: answers.primaryEmail,
        label: "Primary inbox",
        enabled: Boolean(answers.primaryEmail),
      },
      ...splitList(answers.additional).map((email, index) => ({
        prefix: `INBOX${index + 2}`,
        email,
        label: `Additional inbox ${index + 2}`,
        enabled: true,
      })),
    ],
    people: {
      importantPeople: splitList(answers.importantPeople),
      delegates: {
        companyFinance: answers.companyFinance,
        personalAdmin: answers.personalAdmin,
        operationsLegal: answers.opsDelegate,
      },
    },
    notification: {
      urgentChannels: splitList(answers.urgentChannels),
    },
    notion: {
      rulesDatabaseUrl: answers.notionRulesUrl,
      decisionInboxDatabaseUrl: answers.notionInboxUrl,
    },
    bootstrapPolicy: {
      maxLookbackDays: 14,
      archiveVisibleInboxOlderThanDays: 14,
    },
  };

  fs.writeFileSync(path.join(outDir, "config.json"), `${JSON.stringify(config, null, 2)}\n`);

  const starterRulesPath = path.join(root, "templates", "starter-rules.json");
  const starterRules = JSON.parse(fs.readFileSync(starterRulesPath, "utf8"));
  const customizedRules = starterRules.map((rule) => {
    if (rule.Category === "Company Finance Delegate") {
      return { ...rule, "Delegate Email(s)": answers.companyFinance };
    }
    if (rule.Category === "Personal Admin Finance") {
      return { ...rule, "Delegate Email(s)": answers.personalAdmin };
    }
    if (rule.Category === "Legal / Compliance Deadline") {
      return { ...rule, "Delegate Email(s)": answers.opsDelegate };
    }
    if (rule.Category === "Domain Expiration Risk") {
      return { ...rule, "Notify Method": splitList(answers.urgentChannels) };
    }
    return rule;
  });

  fs.writeFileSync(path.join(outDir, "starter-rules.customized.json"), `${JSON.stringify(customizedRules, null, 2)}\n`);

  console.log("\nDone.");
  console.log(`Wrote ${path.join(outDir, "config.json")}`);
  console.log(`Wrote ${path.join(outDir, "starter-rules.customized.json")}`);
  console.log("Next: create/connect Notion databases and install the agent skills.");
}

main().catch((error) => {
  rl.close();
  console.error(error);
  process.exit(1);
});
