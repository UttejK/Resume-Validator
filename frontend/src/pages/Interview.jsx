import { useState } from "react";
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
    <>
      <h3 className="mb-3">Interview Mode</h3>
      <ChatBox messages={messages} onSend={sendMessage} />
    </>
  );
}
