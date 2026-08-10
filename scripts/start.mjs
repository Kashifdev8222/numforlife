import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

// Linux/Render already sets HOSTNAME to the container name.
// Next standalone uses HOSTNAME as the listen address — that causes 502.
// Always bind to all interfaces for Render.
process.env.HOSTNAME = "0.0.0.0";
process.env.PORT = process.env.PORT || "3000";

const server = join(process.cwd(), ".next", "standalone", "server.js");

if (!existsSync(server)) {
  console.error("Missing .next/standalone/server.js — run npm run build first.");
  process.exit(1);
}

console.log(`Starting Next on ${process.env.HOSTNAME}:${process.env.PORT}`);

const child = spawn(process.execPath, [server], {
  stdio: "inherit",
  env: process.env,
  cwd: join(process.cwd(), ".next", "standalone"),
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`Server killed by signal: ${signal}`);
    process.exit(1);
  }
  process.exit(code ?? 1);
});
