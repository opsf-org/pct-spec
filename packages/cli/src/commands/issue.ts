/**
 * pct issue — Create and sign a new PCT from a JSON payload file.
 *
 * Usage:
 *   pct issue --payload payload.json --key private.pem --kid my-key-id
 */

import { Command } from "commander";
import { readFile } from "node:fs/promises";
import { signToken } from "@pct/core";

export function issueCommand(): Command {
  return new Command("issue")
    .description("Create and sign a new PCT")
    .requiredOption("--payload <path>", "Path to JSON file containing the PCT payload")
    .requiredOption("--key <path>", "Path to PEM-encoded private key (RS256) or secret file (HS256)")
    .requiredOption("--kid <id>", "Key identifier to include in the header")
    .option("--algorithm <alg>", "Signing algorithm (RS256 or HS256)", "RS256")
    .action(async (opts) => {
      const payloadJson = await readFile(opts.payload, "utf-8");
      const payload = JSON.parse(payloadJson);

      const key = await readFile(opts.key, "utf-8");

      const token = await signToken(payload, {
        algorithm: opts.algorithm,
        key,
        keyId: opts.kid,
      });

      // Output the compact-serialised token to stdout
      process.stdout.write(token + "\n");
    });
}
