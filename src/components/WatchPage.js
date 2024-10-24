import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/chatSlice";

const WatchPage = () => {
  const [liveMessage, setLiveMessage] = useState();
  const [searchParems] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex flex-col  ">
      <div className="pl-6 flex">
        <iframe
          className="rounded-xl"
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParems.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-[390px] flex flex-col">
          <LiveChat />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(liveMessage);
              dispatch(
                addMessage({
                  name: "Akshay",
                  message: liveMessage,
                })
              );
              setLiveMessage("")
            }}
          >
            <input
              className="w-80 h-10 p-1 border border-black rounded-md"
              type="text"
              placeholder="write your message"
              value={liveMessage}
              onChange={(e) => {
                setLiveMessage(e.target.value);
              }}
            />
            <button className="bg-gray-300 h-10 w-16 ml-1 rounded-lg">
              Send
            </button>
          </form>
        </div>
      </div>
      <div>
        <CommentsContainer videoId = {searchParems.get("v")} />
      </div>
    </div>
  );
};

export default WatchPage;
