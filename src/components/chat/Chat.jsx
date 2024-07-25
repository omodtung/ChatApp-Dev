import { useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const  [open,setOpen] = useState(false);
    const [text,setText] = useState("");
const handleEmoji=(e)=>
{
    setText((prev)=> prev + e.emoji);
    setOpen(false);

}
  return (

    
    <div className="chat">
      <div className="top">

      {/* user  */}
        <div className="user">
          <img src={"./avatar.png"} alt="" />
          {/* <span>{user?.username}</span> */}

          {/*  Texts */}
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
      </div>

      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>

        <input
          type="text"
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
