/**
 * pct verify — Verify a compact PCT token against a request context.
 *
 * Usage:
 *   pct verify --token <token-or-file> --purpose clinical_analytics \
 *              --region GB --key public.pem --action ai_call
 */

import { Command } from "commander";
import { readFile } from "node:fs/promises";
import { verifyToken, type VerificationRequest } from "@pct/core";
import { v4 as uuidv4 } from "uuid";

export function verifyCommand(): Command {
  return new Command("verify")
    .description("Verify a PCT token against a request context")
    .requiredOption("--token <value>", "Compact-serialised token or path to file containing it")
    .requiredOption("--purpose <purpose>", "Requested purpose")
    .requiredOption("--region <code>", "Processing region (ISO 3166-1 alpha-2)")
    .requiredOption("--key <path>", "Path to PEM-encoded public key")
    .option("--action <action>", "Requested action", "process")
    .option("--requestor <id>", "Requestor identifier", "cli")
    .action(async (opts) => {
      let token = opts.token;
      // If it looks like a file path, read it
      if (token.endsWith(".pct") || token.endsWith(".txt") || token.includes("/")) {
        token = (await readFile(token, "utf-8")).trim();
      }

      const key = await readFile(opts.key, "utf-8");

      const request: VerificationRequest = {
        pct: token,
        requested_action: opts.action,
        requested_purpose: opts.purpose,
        processing_region: opts.region,
        requestor_id: opts.requestor,
        request_timestamp: Math.floor(Date.now() / 1000),
        request_id: uuidv4(),
      };

      const { response, auditRecord } = await verifyToken(request, { key });

      console.log(JSON.stringify({ response, auditRecord }, null, 2));
      process.exitCode = response.decision === "ALLOW" ? 0 : 1;
    });
}
