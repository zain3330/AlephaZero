import React from "react";
// import lftimg from "../src/images/leftimg.jpg";
import "../src/Block.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function MainBlockComponent(props) {
  return (
    <div class="bg-[#111b24] py-10  ">
      <div
        className={`rounded-lg  bg-[#111b24]  shadow-lg  h-[350px] bg-${props.bg}   bg-no-repeat bg-contain  md:px-8 px-1 `}>
        <div data-aos={`${props.animation}`} className=" ">
          <div
            className={` abc  ${props.justifycontent} flex items-center ${props.padding} h-full   `}>
            <div class="  flex flex-col md:flex-row md:max-w-[600px] rounded-lg bg-white shadow-lg">
              <div className="zoomWrapper ">
                <img
                  class=" inner-img w-full h-96 md:h-[310px] object-cover md:w-[400px] rounded-t-sm md:rounded-none "
                  src={props.icon}
                  alt=""
                />
              </div>
              <div class="p-6 flex flex-col justify-start bg-[#111b24] ">
                <div className="flex justify-start mr-10 ">
                  <div
                    className={`${props.lineh}  mt-1  bg-[#7FF4E3] w-[2px]`}></div>
                  <h4
                    class="text-white  text-xl w-[230px] 
                  
                  
                   font-medium ml-5 mb-2 ">
                    {props.t1}
                    <strong className="pl-3s">{props.t2}</strong>
                  </h4>
                </div>
                <div className="pl-1 pt-10 flex justify-end  text-[#7FF4E3] cursor-pointer">
                  <div className="pl-3 text-[#00CCAB] text-[16px] hover:text-[#7FF4E3]">
                    <p className="text-[16px]">{props.t3}</p>
                  </div>
                  <div className="pl-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
                {/* <p class="text-gray-600 text-xs">Last updated 3 mins ago</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
