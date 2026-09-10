import type { ChatMessage } from "../types/Message";
import { Message } from "./messages";

type Props = {
  messages: ChatMessage[];
};

export function Chat({ messages }: Props) {
  return (
    <div
      style={{
        minHeight: 500,
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 10,
      }}
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
