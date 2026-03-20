/**
 * @pct/api — Enforcement API server.
 *
 * Implements the minimum API contract defined in Section 7 of the
 * PCT Specification v0.1.
 */

import Fastify from "fastify";
import { verifyRoute } from "./routes/verify.js";

export async function buildServer() {
  const app = Fastify({ logger: true });

  app.register(verifyRoute);

  // Health check
  app.get("/health", async () => ({ status: "ok" }));

  return app;
}

// Start if run directly
const isMain = process.argv[1]?.endsWith("server.js") || process.argv[1]?.endsWith("server.ts");
if (isMain) {
  const app = await buildServer();
  const port = Number(process.env.PORT ?? 3100);
  await app.listen({ port, host: "0.0.0.0" });
}
