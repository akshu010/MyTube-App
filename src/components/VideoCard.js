import React from "react";
const VideoCard = ({ info }) => {
  if (!info || !info.snippet) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = info;
  // eslint-disable-next-line
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const formattedDate = publishedAt.replace(/T\d{2}:\d{2}:\d{2}Z/, "");

  return (
    <div className="flex flex-col w-72 mx-auto my-4 shadow-lg rounded-xl overflow-hidden bg-white cursor-pointer">
      <img
        src={thumbnails.high.url}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500 truncate">{channelTitle}</p>
        <div className="text-sm text-gray-400 mt-2">
          <p>{viewCount} views</p>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
