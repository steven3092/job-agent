import { useState } from "react";

type Props = {
  onSend(message: string): void;
  loading: boolean;
};

export function ChatInput({ onSend, loading }: Props) {
  const [value, setValue] = useState("");

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginTop: 20,
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          flex: 1,
          padding: 12,
        }}
        placeholder="Find me React jobs..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSend(value);
            setValue("");
          }
        }}
      />

      <button
        disabled={loading}
        onClick={() => {
          onSend(value);
          setValue("");
        }}
      >
        Send
      </button>
    </div>
  );
}
