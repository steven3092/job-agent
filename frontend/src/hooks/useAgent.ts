import { useState } from "react";
import { sendMessage } from "../services/agent";
import type { ChatMessage } from "../types/message";

export function useAgent() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function ask(message: string) {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((previous) => [...previous, userMessage]);

    setLoading(true);

    try {
      const response = await sendMessage(message);

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.answer,
      };

      setMessages((previous) => [...previous, assistantMessage]);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    messages,
    ask,
  };
}
