import { useEffect, useRef } from "react";
import "./chatpage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message ai </div>
          <div className="message user">
            Test message from user Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis, quidem quos autem magnam voluptas
            recusandae magni molestiae ad quia voluptates.
          </div>
          <div className="message ">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>

          <div className="message user">Test message from user</div>
          <div className="message ">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>

          <div className="message user">Test message from user</div>
          <div className="message ">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>

          <div className="message user">Test message from user</div>
          <div className="message ">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>

          <div className="message user">Test message from user</div>
          <div className="message ">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <NewPrompt />
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
