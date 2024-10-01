import "./chatList.css";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link>Create a new Chat</Link>
      <Link>Explore ChatBOT</Link>
      <Link>Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/chat1">Chat 1</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
        <Link to="/chat2">Chat 2</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="logo" />
        <div className="texts">
          <span>Upgrade to ChatBOT Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
