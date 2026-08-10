import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

process.env.HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
process.env.PORT = process.env.PORT || "3000";

const server = join(process.cwd(), ".next", "standalone", "server.js");

if (!existsSync(server)) {
  console.error("Missing .next/standalone/server.js — run npm run build first.");
  process.exit(1);
}

const child = spawn(process.execPath, [server], {
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code) => process.exit(code ?? 1));
