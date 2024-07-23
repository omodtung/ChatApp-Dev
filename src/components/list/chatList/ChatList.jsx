import "./ChatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png"></img>
          <input type="text" placeholder="Search" />
        </div>
        <img src="./plus.png" className="add"></img>
      </div>
    </div>
  );
};
export default ChatList;
