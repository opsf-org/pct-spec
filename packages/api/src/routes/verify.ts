/**
 * POST /verify — Section 7 Enforcement API endpoint.
 *
 * Accepts a verification request, runs the 8-step pipeline via @pct/core,
 * and returns the decision + audit record ID.
 */

import type { FastifyInstance } from "fastify";
import { verifyToken, type VerificationRequest } from "@pct/core";

export async function verifyRoute(app: FastifyInstance) {
  app.post<{ Body: VerificationRequest }>("/verify", async (request, reply) => {
    const verificationRequest = request.body;

    // In a real deployment the key would be resolved from a registry using
    // the token's `kid` header claim.  For the reference implementation we
    // read it from an environment variable.
    const publicKey = process.env.PCT_PUBLIC_KEY;

    if (!publicKey) {
      return reply.status(500).send({
        error: "Server misconfigured: PCT_PUBLIC_KEY not set",
      });
    }

    const { response } = await verifyToken(verificationRequest, {
      key: publicKey,
    });

    return reply.status(200).send(response);
  });
}
