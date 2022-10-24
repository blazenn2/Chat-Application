import { useState } from "react";
import ChatArea from "./container/chat-area";
import SideBar from "./container/sider-bar";

function App() {
  const [filter, setFilter] = useState(0);
  const [friendList, setFriendList] = useState([
      { name: "Hamza", message: "Hello world!", time: "7:39 am", unseen: 3, isActive: true, status: "online" },
      { name: "Alex", message: "Hello Javascript! Long time no see buddy", time: "10:11 am", unseen: 5, isActive: false, status: "away" },
      { name: "Jason", message: "Sometimes, we have to do what is right!", time: "12:01 am", isActive: false, status: "offline" },
      { name: "Usman", message: "I have a very big butt :D", time: "3:32 pm", isActive: false, status: "online" },
      { name: "John", message: "Something is coming ... you can feel it, can you?", time: "1:24 pm", unseen: 1, isActive: false, status: "away" },
  ]);
  return (
    <div className="w-screen h-screen flex items-center justify-start">
      <SideBar filter={filter} setFilter={setFilter} friendList={friendList} setFriendList={setFriendList} />
      <ChatArea filter={filter} setFilter={setFilter} friendList={friendList} setFriendList={setFriendList} />
    </div>
  );
}

export default App;
