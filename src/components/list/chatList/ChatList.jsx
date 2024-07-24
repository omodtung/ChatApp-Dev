import { useState } from "react";
import "./ChatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
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
    </div>
  );
};
export default ChatList;
