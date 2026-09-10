import { FastifyInstance } from "fastify";
import { Agent } from "../agent/agent.js";

const agent = new Agent();

export async function agentRoutes(app: FastifyInstance) {
  app.post("/agent", async (request) => {
    const body = request.body as {
      message: string;
    };

    return await agent.run(body.message);
  });
}
