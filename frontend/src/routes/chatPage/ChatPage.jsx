import "./chatpage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";

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

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          {isLoading
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data && data.length > 0 && data[0]?.history?.length > 0 // Ensure data and history exist
            ? data[0].history.map((msg, i) => (
                <>
                  {msg?.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={msg?.img}
                      height={"300"}
                      width={"400"}
                      transformation={[{ height: 300, width: 400 }]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                    />
                  )}
                  <div
                    key={i}
                    className={
                      msg?.role === "user" ? "message user" : "message"
                    }
                  >
                    {msg.parts && msg.parts.length > 0 ? (
                      <Markdown>{msg.parts[0].text}</Markdown> // Display the message
                    ) : (
                      "No text available"
                    )}
                  </div>
                </>
              ))
            : "No messages found!"}
         {data && data.length > 0 && data[0]?._id ? (
    <NewPrompt data={data[0]} />  // Change to pass data[0]
) : (
    "No messages found!"
)}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
