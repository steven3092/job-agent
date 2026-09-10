import { ChatMessage } from "../types/Message";

type Props = {
  message: ChatMessage;
};

export function Message({ message }: Props) {
  return (
    <div
      style={{
        marginBottom: 20,
        textAlign: message.role === "user" ? "right" : "left",
      }}
    >
      <strong>{message.role === "user" ? "👤 You" : "🤖 Agent"}</strong>

      <div>{message.content}</div>
    </div>
  );
}
