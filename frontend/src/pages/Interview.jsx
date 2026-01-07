import { useState } from "react";
import Container from "react-bootstrap/Container";

import ChatBox from "../components/chat/ChatBox";

export default function Interview() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "I see React mentioned in your resume. Can you explain how hooks work?",
    },
  ]);

  const sendMessage = (text) => {
    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);

    // mock AI follow-up
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Good. Can you describe a real-world use case where useEffect caused issues?",
        },
      ]);
    }, 1000);
  };

  return (
    <Container className="py-4">
      {/* CENTERED PAGE COLUMN */}
      <div
        className="mx-auto d-flex flex-column gap-3"
        style={{ maxWidth: "820px" }}
      >
        {/* HEADER */}
        <h3 className="text-center text-md-start">Interview Mode</h3>

        {/* CHAT */}
        <ChatBox messages={messages} onSend={sendMessage} />
      </div>
    </Container>
  );
}
