/**
 * pct inspect — Decode and pretty-print a compact PCT token WITHOUT
 * verifying its signature.  Useful for debugging.
 *
 * Usage:
 *   pct inspect <token>
 */

import { Command } from "commander";
import { decodeProtectedHeader, decodeJwt } from "jose";
import { readFile } from "node:fs/promises";

export function inspectCommand(): Command {
  return new Command("inspect")
    .description("Decode and pretty-print a PCT token (no signature verification)")
    .argument("<token>", "Compact-serialised token or path to file")
    .action(async (tokenArg: string) => {
      let token = tokenArg;
      if (token.endsWith(".pct") || token.endsWith(".txt") || token.includes("/")) {
        token = (await readFile(token, "utf-8")).trim();
      }

      const header = decodeProtectedHeader(token);
      const payload = decodeJwt(token);

      console.log(JSON.stringify({ header, payload }, null, 2));
    });
}
