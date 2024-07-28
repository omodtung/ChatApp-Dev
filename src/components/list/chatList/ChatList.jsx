import { useState } from "react";
import "./ChatList.css";
import AddUser from "./addUser/addUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
//   const [chats, setChats] = useState([]);
// const {currentUser} = useUserStore ();
//   const filteredChats = chats.filter((c) =>
//     c.user.username.toLowerCase().includes(input.toLowerCase())
//   );

  const handleSelect = async (chat) => {};
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png"></img>
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        ></img>
      </div>
      {/* {filteredChats.map((chat) => (
        <div
          className="item"
          // in chat has chatId
          key={chat.chatId}
          onClick={() => handleSelect(chat)}
          // make sense this code line
          style={{ backgroundColor: chat?.isSeen ? "transparent" : "#5183fe" ,}}
        > */}

{/* <img
 src={
  chat.user.blocked.includes (currentUser.id)
  ?"./ava"
 }
>

</img>

        </div>
      ))} */}
      <div className="item">
        <img src="./avatar.png"></img>
        <div className="texts">
          <span> jane Doe</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png"></img>
        <div className="texts">
          <span> jane Doe</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png"></img>
        <div className="texts">
          <span> jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
  {  addMode && <AddUser></AddUser>}
  {/* his line uses a conditional rendering technique in React.
It checks the value of addMode. If addMode is true, it will render the <AddUser></AddUser> component.
If addMode is false, nothing is rendered. */}
    </div>
  );
};
export default ChatList;
