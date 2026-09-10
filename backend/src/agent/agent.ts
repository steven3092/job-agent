import { openai } from "../config/openai.js";
import { tools } from "./tools.js";

export class Agent {
  async run(message: string) {
    const response = await openai.responses.create({
      model: "gpt-5.5",
      input: message,
      tools,
    });

    console.dir(response.output, {
      depth: null,
    });

    return {
      answer: response.output_text,
    };
  }
}
