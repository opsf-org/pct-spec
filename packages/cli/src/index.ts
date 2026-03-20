#!/usr/bin/env node

/**
 * @pct/cli — Command-line tool for working with Privacy Claims Tokens.
 *
 * Commands:
 *   pct issue     Create and sign a new PCT
 *   pct verify    Verify a token against a request context
 *   pct inspect   Pretty-print a token's claims
 *   pct audit     Query / export audit records
 */

import { Command } from "commander";
import { issueCommand } from "./commands/issue.js";
import { verifyCommand } from "./commands/verify.js";
import { inspectCommand } from "./commands/inspect.js";

const program = new Command();

program
  .name("pct")
  .description("Privacy Claims Token — reference CLI")
  .version("0.1.0");

program.addCommand(issueCommand());
program.addCommand(verifyCommand());
program.addCommand(inspectCommand());

program.parse();
