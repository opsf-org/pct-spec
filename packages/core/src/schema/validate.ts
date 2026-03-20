/**
 * PCT payload validation against the JSON Schema (Appendix A).
 */

import Ajv from "ajv";
import addFormats from "ajv-formats";
import type { PCTPayload } from "../types/index.js";

// The schema will be loaded from schema/pct-schema-0.1.json at build time or
// passed explicitly.  For now we accept it as a parameter so the core library
// stays free of filesystem assumptions.

let _ajv: Ajv | undefined;

function getAjv(): Ajv {
  if (!_ajv) {
    _ajv = new Ajv({ allErrors: true });
    addFormats(_ajv);
  }
  return _ajv;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validate a PCT payload object against the PCT JSON Schema.
 */
export function validatePayload(
  payload: PCTPayload,
  schema: Record<string, unknown>,
): ValidationResult {
  const ajv = getAjv();
  const validate = ajv.compile(schema);
  const valid = validate(payload);

  return {
    valid: !!valid,
    errors: valid
      ? []
      : (validate.errors ?? []).map(
          (e) => `${e.instancePath || "/"} ${e.message ?? "unknown error"}`,
        ),
  };
}
