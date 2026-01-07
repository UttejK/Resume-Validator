import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export default function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`d-flex mb-3 ${
        isUser ? "justify-content-end" : "justify-content-start"
      }`}
    >
      <Card
        className={`px-3 py-2 border-0 ${
          isUser ? "bg-primary text-white" : "bg-light"
        }`}
        style={{
          maxWidth: "85%",
        }}
      >
        <div className="d-flex align-items-center gap-2 mb-1">
          <Badge
            bg={isUser ? "light" : "secondary"}
            text={isUser ? "dark" : ""}
          >
            {isUser ? "You" : "AI"}
          </Badge>
        </div>

        <div className="small lh-sm">{content}</div>
      </Card>
    </div>
  );
}
