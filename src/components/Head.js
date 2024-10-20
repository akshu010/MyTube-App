import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between px-6 py-6  shadow-xl items-center text-center">
      <div className="flex gap-6">
        <i
          onClick={() => handleToggleMenu()}
          className="text-2xl cursor-pointer ri-menu-line "
        ></i>
        <div className="flex">
          <img
            className="h-8 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGudGsuMSbjA-obNeESV0X3m1TIlOsf9z7Mg&s"
            alt="MyTube Logo"
          />
          <h1 className="font-bold pt-1">MyTube</h1>
        </div>
      </div>
      <div className="relative">
        <input
          className="h-10 w-[50vw] border border-black p-2 rounded-2xl "
          type="text"
          placeholder="Search Here"
        />
        <button className="absolute w-20 border border-black h-10 right-0 rounded-r-2xl bg-gray-500">
          <i class="ri-search-line"></i>
        </button>
      </div>
      <div>
        <i className=" text-3xl ri-user-fill"></i>
      </div>
    </div>
  );
};

export default Head;
