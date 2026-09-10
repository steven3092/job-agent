import { Chat } from "./components/chat";
import { ChatInput } from "./components/chatInput";
import { useAgent } from "./hooks/useAgent";

function App() {
  const { messages, loading, ask } = useAgent();

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "50px auto",
      }}
    >
      <h1>🤖 Job Agent</h1>

      <Chat messages={messages} />

      <ChatInput loading={loading} onSend={ask} />
    </div>
  );
}

export default App;
