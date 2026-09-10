import { FastifyInstance } from "fastify";
import { searchRemoteOK } from "../providers/remoteOk.js";

export async function jobsRoutes(app: FastifyInstance) {
  app.get("/jobs", async (request) => {
    const { q } = request.query as { q?: string };

    const jobs = await searchRemoteOK(q ?? "");

    return jobs;
  });
}
