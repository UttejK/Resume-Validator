import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function ChatBox({ messages, onSend }) {
  return (
    <div className="card p-3">
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} content={m.content} />
        ))}
      </div>
      <ChatInput onSend={onSend} />
    </div>
  );
}
