import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomMessageGenerator, randomNameGenerater } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.messages);
  useEffect(() => {
    const polling = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: randomNameGenerater(),
          message: randomMessageGenerator(20) + "🚀",
        })
      );
    }, 500);

    return () => clearInterval(polling);
  }, []);

  return (
    <div className="ml-2 p-2 w-full h-[500px] border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
