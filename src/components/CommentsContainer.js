import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { COMMENTS_API_KEY } from "../utils/constants";

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [searchParems] = useSearchParams();

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, []);

  const fetchComments = async () => {
    const data = await fetch(COMMENTS_API_KEY + searchParems.get("v"));
    const json = await data.json();
    setComments(json.items || []);
    console.log(json);
    console.log(
      json?.items?.[2]?.snippet?.topLevelComment?.snippet?.textDisplay
    );
  };

  return (
    <div className="p-4 space-y-6 bg-gray-50 rounded-lg">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex gap-4 w-[75%]"
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
            alt="Author profile"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-900">
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(
                  comment.snippet.topLevelComment.snippet.publishedAt
                ).toLocaleDateString()}
              </p>
            </div>
            <p
              className="text-gray-700 mt-2 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: comment.snippet.topLevelComment.snippet.textDisplay,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsContainer;
