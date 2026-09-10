import Fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";
import { jobsRoutes } from "./routes/jobs.js";
import { agentRoutes } from "./routes/agent.js";

const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: true,
});

await app.register(jobsRoutes);
await app.register(agentRoutes);

await app.listen({
  port: 3000,
});
