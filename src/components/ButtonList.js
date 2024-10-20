import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Cricket",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cooking",
  "Valentines",
  "Movies",
  "Comedy",
  "Wwe",
  "Tech",
  "Study",
];

const ButtonList = () => {
  return (
    <div className="w-full max-w-full overflow-x-auto">
      <div className="flex whitespace-nowrap space-x-4 p-2">
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
