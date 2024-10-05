import "./chatList.css";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ChatList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link>Create a new Chat</Link>
      <Link>Explore ChatBOT</Link>
      <Link>Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {" "}
        {isLoading
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.length > 0 // Ensure data has content to map over
          ? data.map((chat) => (
              <Link key={chat._id} to={`/dashboard/chats/${chat._id}`}>
               {chat.title}
              </Link>
            ))
          : "No chats found!"}
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
