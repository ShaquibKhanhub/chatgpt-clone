import "./chatpage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";

const ChatPage = () => {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();
  const { isLoading, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
  console.log(data);
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message ai </div>
          {isLoading
  ? "Loading..."
  : error
  ? "Something went wrong!"
  : data?.length > 0
  ? data.history.map((msg, i) => {
      console.log(msg); // Log each message
      return (
        <div key={i} className="message user">
          {msg.parts && msg.parts.length > 0 ? (
            <Markdown>{msg.parts[0].text}</Markdown>
          ) : (
            "No text available"
          )}
        </div>
      );
    })
  : "No messages found!"}
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
