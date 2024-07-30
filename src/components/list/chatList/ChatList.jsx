import { useEffect, useState } from "react";
import "./ChatList.css";
import AddUser from "./addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { onSnapshot } from "firebase/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
const ChatList = () => {
  const [chats, setChats] = useState([]);

  const [addMode, setAddMode] = useState(false);
  const { currentUser } = useUserStore();
  // const [currentUser] = useUserStore();
  //   const [chats, setChats] = useState([]);
  // const {currentUser} = useUserStore ();
  //   const filteredChats = chats.filter((c) =>
  //     c.user.username.toLowerCase().includes(input.toLowerCase())
  //   );

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, []);
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
      {chats.map((chat) => (
        <div className="item" key={chat.chatId}>
          <img src={chat.user.avatar ||'./avatar.png'}></img>
          <div className="texts">
            <span> {chat.user.username}</span>
            <p> {chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser></AddUser>}
      {/* his line uses a conditional rendering technique in React.
It checks the value of addMode. If addMode is true, it will render the <AddUser></AddUser> component.
If addMode is false, nothing is rendered. */}
    </div>
  );
};
export default ChatList;
