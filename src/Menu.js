import React from "react";
import img from "../src/images/discord.svg";

export default function Menu() {
  return (
    <div className="w-18   sticky top-[20%] z-50 flex flex-col   items-end gap-2 ">
      <div className="w-[30px] h-[30px]">
        <img src={img} />
      </div>
      <div className="w-[30px] h-[30px]">
        <img src={img} />
      </div>
      <div className="w-[30px] h-[30px]">
        <img src={img} />
      </div>
      <div className="w-[30px] h-[30px]">
        <img src={img} />
      </div>
      <div className="w-[30px] h-[30px]">
        <img src={img} />
      </div>
      <div className="w-[30px] h-[30px]">
        <img src={img} />
      </div>
      <div className="w-[30px] h-[30px]">
        <img src={img} />
      </div>
      <div className="w-[30px] h-[30px]">
        <img src={img} />
      </div>
      <div className="w-[30px] h-[30px]">
        <img src={img} />
      </div>
    </div>
  );
}
