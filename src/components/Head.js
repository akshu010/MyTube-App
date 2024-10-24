import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { MY_TUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowsuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    console.log(json)
    const titles = json?.items.map((item) => item?.snippet?.title);
    setSuggestions(titles);
    dispatch(cacheResults({ [searchQuery]: titles }));
  };

  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between px-6 py-6 shadow-xl items-center text-center sticky">
      <div className="flex gap-6">
        <i
          onClick={() => handleToggleMenu()}
          className="text-2xl cursor-pointer ri-menu-line"
        ></i>
        <div className="flex">
          <img className="h-8" src={MY_TUBE_LOGO} alt="MyTube Logo" />
          <h1 className="font-bold pt-1">MyTube</h1>
        </div>
      </div>
      <div className="relative">
        <div>
          <input
            className="h-10 w-[50vw] border border-black p-2 px-6 rounded-2xl"
            type="text"
            placeholder="Search Here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
          />

          <button className="absolute w-20 border border-black h-10 right-0 rounded-r-2xl bg-gray-500">
            <i className="ri-search-line"></i>
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white w-[45vw] text-start px-5 py-2 rounded-lg">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="py-3 shadow-sm cursor-pointer hover:bg-gray-100  rounded-lg"
                >
                  <i className="ri-search-line"></i> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <i className="text-3xl ri-user-fill"></i>
      </div>
    </div>
  );
};

export default Head;

