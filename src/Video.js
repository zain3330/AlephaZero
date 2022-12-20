import React from "react";
import "././Video.css";

export default function () {
  return (
    <>
      {/* <div className="bg-[#111b24] pl-[15px] pr-[30px]">
      <div className="">
       <iframe
          class="w-[800px] h-[550px] aspect-video hover:aspect-square"
          src="https://fast.wistia.com/embed/medias/26rzfjtw60"></iframe>
      </div>
    </div> */}
      <div className="bg-[#0f1113]   ">
        <div class="aspect-w-16    aspect-video aspect-h-9  bg-[#0f1113]">
          <iframe
            src="https://fast.wistia.com/embed/medias/26rzfjtw60"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}
