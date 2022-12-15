import React from "react";
import camp1 from "../src/images/camp1.png";
import camp2 from "../src/images/camp2.png";
import camp3 from "../src/images/camp3.png";
import camp4 from "../src/images/camp4.png";
import "../src/Campanines.css";

export default function Companines() {
  return (
    <>
      <div class=" flex items-center text-[#ffff] vl px-4 py-5  text-[43px]  bg-black">
        <p>Partners & Investors</p>
      </div>
      <div class="grid md:grid-cols-4  grid-cols-2 bg-[#ff2345]  md:gap-10 gap-20  px-28 py-10">
        <div>
          <img src={camp1} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp2} className="w-auto h-[43px]" />
        </div>
        <div>
          <img src={camp3} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp4} className="w-auto h-[43px]" />
        </div>
        <div>
          <img src={camp1} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp2} className="w-auto h-[43px]" />
        </div>
        <div>
          <img src={camp3} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp4} className="w-auto h-[43px]" />
        </div>
        <div>
          <img src={camp1} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp2} className="w-auto h-[43px]" />
        </div>
        <div>
          <img src={camp3} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp4} className="w-auto h-[43px]" />
        </div>
        <div>
          <img src={camp1} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp2} className="w-auto h-[43px]" />
        </div>
        <div>
          <img src={camp3} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp4} className="w-auto h-[43px]" />
        </div>
        <div>
          <img src={camp1} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp2} className="w-auto h-[43px]" />
        </div>
        <div>
          <img src={camp3} className="w-auto h-[43px]" />
        </div>

        <div>
          <img src={camp4} className="w-auto h-[43px]" />
        </div>
      </div>
    </>
  );
}
