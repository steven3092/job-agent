import OpenAI from "openai";

export const tools: OpenAI.Responses.Tool[] = [
  {
    type: "function",
    name: "searchJobs",
    description: "Search software engineering job offers.",
    strict: true,
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search query like 'React Barcelona'",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
  },
];
