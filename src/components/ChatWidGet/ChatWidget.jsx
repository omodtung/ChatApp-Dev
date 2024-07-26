import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function ChatWidget({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  console.log (messageList);
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        sender: username,
        room: room,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("chatToServer", messageData);
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    socket.on("chatToServer", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div>
      <div>
        <p>Live Chat</p>
      </div>
      <div className="chat">
        <ScrollToBottom >
          {messageList.map((messageContent) => {
            return (
              <div>
                <div>
                  <div>
                    <p>{messageContent.message}</p>
                  </div>
                  <div>
                    <p>{messageContent.time}</p>
                    <p>{messageContent.sender}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      {/* Thanh Input Nhap Vao */}
      <div>
        <input
          type="text"
          value={currentMessage}
          placeholder="Type a message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />

        <button onClick={sendMessage}>send</button>
      </div>
    </div>
  );
}

export default ChatWidget;
