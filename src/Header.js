import React from "react";
import img1 from "../src/images/banner.png";
import "../src/Header.css";
import headerimg from "../src/images/header_img.jpeg";
import logoday from "../src/images/logo-day.svg";

export default function Header() {
  return (
    <>
      <div className="bg-white  overflow-hidden md:mb-0 mb-0 invisible md:visible ">
        <div className="flex  justify-center items-center md:h-[10px] h-0 pl-10 md:pl-0    ">
          <div className="pr-2">
            <img src={headerimg} className=" h-[30px]  w-[30px] " />
          </div>
          <div>
            <p className=" pr-2 pt-5 md:pt-0    ">
              <strong className="text-[#111B24] pl-5">
                {" "}
                Community Validators{" "}
              </strong>
              <span className="invisible md:visible">
                {" "}
                are live on the mainnet!
              </span>
            </p>
          </div>

          {/* <div class="vl"></div> */}
          <div class="h-[25px] ml-5 mt-1  bg-green-300 w-[2px] invisible md:visible "></div>
          {/* <div className="pl-5 hover:text-green-300">
            <p>Learn more</p>
          </div> */}
          <div className="pl-1 pt-1 flex hover:text-green-300 cursor-pointer   ">
            <div className="pl-3 hover:text-green-300">
              <p>Learn more</p>
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
        </div>

        <div className="h-top-2 overflow-hidden  invisible md:visible ">
          <div className="h-top-3"></div>
        </div>
      </div>
      {/* <div class=" relative pt-0 pb-12  ">
        <img src={img1} className="h-[55px] w-full" />
        <img
          src={headerimg}
          className=" absolute bottom-[56px] left-[32%] pr-2 -translate-x-1/2 h-5 w-8"
        />
        <p class=" content absolute text-3xl text-amber-400 bottom-14 left-[51%] -translate-x-1/2">
          Mainnet validators are coming to Aleph Zero in December, 2022
        </p>
        <div class="border content absolute text-3xl text-amber-400 bottom-14 left-[70%] -translate-x-1/2"></div>
      </div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logoday} />

            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header> */}
    </>
  );
}
