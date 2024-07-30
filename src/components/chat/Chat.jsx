import { useEffect, useReducer, useRef, useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);
  const [chat, setChat] = useState();
  console.log(text);
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
  useChatStore();
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat.messages]);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);
  console.log(chat);
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    // Structure Ui Follow Class Top
    // chat ( Top -> Bottom)

    <div className="chat">
      <div className="top">
        {/* user  */}
        <div className="user">
          <img src={"./avatar.png"} alt="" />

          <div className="texts">
            <span> Jane Done </span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>

        {/* Icons  of User */}
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
        {/* Icon */}
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" />
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <span>1 Min Ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" />
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <span>1 Min Ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" />
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <span>1 Min Ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" />
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <span>1 Min Ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" />
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <span>1 Min Ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" />
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <span>1 Min Ago</span>
          </div>
        </div>
      </div>
      {/* bottom of user  */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>

        <input
          type="text"
          value={text}
          placeholder="Type a message"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button
          className="sendButton"
          //   onClick={handleSend}
          //   disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Chat;
