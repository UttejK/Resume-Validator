export default function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`mb-2 text-${isUser ? "end" : "start"}`}>
      <span className={`badge bg-${isUser ? "primary" : "secondary"}`}>
        {isUser ? "You" : "AI"}
      </span>
      <div className="mt-1">{content}</div>
    </div>
  );
}
