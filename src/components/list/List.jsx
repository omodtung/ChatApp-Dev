import "./List.css";
import ChatList from "./chatList/ChatList";
import UserInfo from "./userInfo/userInfo";
import userInfo from "./userInfo/userInfo";

const List = () => {
  return (
    <div className="list">
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </div>
  );
};
export default List;
