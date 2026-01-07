import Card from "react-bootstrap/Card";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function ChatBox({ messages, onSend }) {
  return (
    <Card className="p-3 p-md-4">
      {/* Messages */}
      <div
        className="d-flex flex-column gap-1 mb-3 overflow-auto"
        style={{
          maxHeight: "60vh",
        }}
      >
        {messages.length > 0 ? (
          messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} content={m.content} />
          ))
        ) : (
          <div className="text-center text-muted small py-4">
            Start the conversation…
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput onSend={onSend} />
    </Card>
  );
}
