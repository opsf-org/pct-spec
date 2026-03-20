/**
 * PCT token signing — Section 6.
 *
 * Produces a compact-serialised token (Base64URL header.payload.signature).
 */

import { CompactSign, importPKCS8, importJWK, type KeyLike } from "jose";
import type { PCTHeader, PCTPayload, SigningAlgorithm } from "../types/index.js";

export interface SignOptions {
  algorithm: SigningAlgorithm;
  /** PEM-encoded private key (RS256) or raw secret (HS256). */
  key: string | KeyLike | Uint8Array;
  keyId: string;
  pctVersion?: string;
}

/**
 * Sign a PCT payload and return the compact-serialised token string.
 */
export async function signToken(
  payload: PCTPayload,
  options: SignOptions,
): Promise<string> {
  const header: PCTHeader = {
    alg: options.algorithm,
    kid: options.keyId,
    typ: "PCT",
    pct_version: options.pctVersion ?? "0.1",
  };

  const encodedPayload = new TextEncoder().encode(JSON.stringify(payload));

  let signingKey: KeyLike | Uint8Array;

  if (typeof options.key === "string") {
    // Assume PEM-encoded private key for RS256
    signingKey = await importPKCS8(options.key, options.algorithm);
  } else {
    signingKey = options.key;
  }

  const token = await new CompactSign(encodedPayload)
    .setProtectedHeader(header as unknown as Record<string, unknown>)
    .sign(signingKey);

  return token;
}
