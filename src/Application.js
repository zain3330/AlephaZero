import React, { useEffect } from "react";
import "../src/Driving.css";
import a1 from "../src/images/a1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/Application.css";
import Slider from "react-slick";

export default function Application() {
  // const data = [
  // {
  //   id: 1,
  //   name: "Gatenox",
  //   d1: " Gatenox is the platform for managing your identity in crypto, Web 3.0, and the metaverse.",
  //   image: a1,
  //   altr: "image1",
  // },
  // {
  //   id: 2,
  //   name: "Gatenox",
  //   d1: " Gatenox is the platform for managing your identity in crypto, Web 3.0, and the metaverse.",
  //   image: a1,
  //   altr: "image1",
  // },
  // {
  //   id: 2,
  //   name: "Gatenox",
  //   d1: " Gatenox is the platform for managing your identity in crypto, Web 3.0, and the metaverse.",
  //   image: a1,
  //   altr: "image1",
  // },
  // ];
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);
  const settings = {
    // className: "center",
    centerPadding: "30%",
    // centerMode: true,
    // autoplay: true,
    autoplaySpeed: 100,

    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    rows: 1,
    swipeToSlide: true,
    slidesToScroll: 5,
    speed: 1000,
    vertical: true,
  };
  return (
    <div class="grid grid-cols-2 gap-4 px-10 py-10   bg-[#111b24]">
      <div data-aos="fade-left" className="flex-col  ">
        {/* <Slider {...settings}> */}
        {/* {data.map((item) => {
            return ( */}
        <>
          <Slider {...settings}>
            {/* <div
              role="status"
              class="max-w-sm animate-pulse max-w-[265px]  ml-3  mb-3 mr-3  px-5 py-2 border-2 border-[#1B2B38]">
              <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
              <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
              <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

              <div class="flex gap-2 ">
                <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
              </div>

              <div class="flex gap-2">
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              </div>

              <span class="sr-only">Loading...</span>
            </div> */}

            {/* <div
              role="status"
              class="max-w-sm animate-pulse  max-w-[265px]  bg-[#111b24] ml-3  mb-3 mr-3 border-2 border-[#1B2B38]  px-5 py-2">
              <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
              <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
              <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

              <div class="flex gap-2 ">
                <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
              </div>

              <div class="flex gap-2">
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              </div>

              <span class="sr-only">Loading...</span>
            </div> */}

            <div className="flex items-center abc ">
              {/* <div className="w-[24px]  h-[85px] mb-3  bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a]"></div> */}
              <div className="bg-[#111b24] ml-3  mb-3 mr-3  px-5 py-2 w-[265px]  overflow-hidden border-2 border-[#1B2B38]">
                <div className="flex flex-col   py-5 ">
                  <div className="flex ">
                    <div className="">
                      <img src={a1} className="w-[48px] h-48px] "></img>
                    </div>
                    <div className=" pl-5 pt-3   text-white text-[18px] ">
                      <p>Gatenox</p>
                    </div>
                  </div>

                  <div className="  pt-3 text-start w-[200px] text-[16px] text-[#bccbd6] ">
                    <p>
                      Gatenox is the platform for managing your identity in
                      crypto, Web 3.0, and the metaverse.
                    </p>
                  </div>
                  <div className="bg-[#16232E] text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                    <p>Identity management</p>
                  </div>
                </div>
              </div>
              {/* <div className="w-[24px] h-[85px] mb-3 bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div> */}
            </div>

            <div className="flex items-center abc ">
              {/* <div className="w-[24px]  h-[85px] mb-3  bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a]"></div> */}
              <div className="bg-[#111b24] ml-3  mb-3 mr-3  px-5 py-2 w-[265px]  overflow-hidden border-2 border-[#1B2B38]">
                <div className="flex flex-col   py-5 ">
                  <div className="flex ">
                    <div className="">
                      <img src={a1} className="w-[48px] h-48px] "></img>
                    </div>
                    <div className=" pl-5 pt-3   text-white text-[18px] ">
                      <p>Gatenox</p>
                    </div>
                  </div>

                  <div className="  pt-3 text-start w-[200px] text-[16px] text-[#bccbd6] ">
                    <p>
                      Gatenox is the platform for managing your identity in
                      crypto, Web 3.0, and the metaverse.
                    </p>
                  </div>
                  <div className="bg-[#16232E] text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                    <p>Identity management</p>
                  </div>
                </div>
              </div>
              {/* <div className="w-[24px] h-[85px] mb-3 bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div> */}
            </div>

            <div
              role="status"
              class="max-w-sm animate-pulse max-w-[265px]  overflow-hidden ml-3  mb-3 mr-3  px-5 py-2 border-2 border-[#1B2B38]">
              <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
              <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
              <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

              <div class="flex gap-2 ">
                <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
              </div>

              <div class="flex gap-2">
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              </div>

              <span class="sr-only">Loading...</span>
            </div>

            <div
              role="status"
              class=" animate-pulse max-w-[265px]  overflow-hidden ml-3  mb-3 mr-3  px-5 py-2 border-2 border-[#1B2B38]">
              <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
              <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
              <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

              <div class="flex gap-2 ">
                <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
              </div>

              <div class="flex gap-2">
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              </div>

              <span class="sr-only">Loading...</span>
            </div>

            <div className="flex items-center abc ">
              {/* <div className="w-[24px]  h-[85px] mb-3  bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a]"></div> */}
              <div className="bg-[#111b24] overflow-hidden ml-3  mb-3 mr-3  px-5 py-2 w-[265px]  border-2 border-[#1B2B38]">
                <div className="flex flex-col   py-5 ">
                  <div className="flex ">
                    <div className="">
                      <img src={a1} className="w-[48px] h-48px] "></img>
                    </div>
                    <div className=" pl-5 pt-3   text-white text-[18px] ">
                      <p>Gatenox</p>
                    </div>
                  </div>

                  <div className="  pt-3 text-start w-[200px] text-[16px] text-[#bccbd6] ">
                    <p>
                      Gatenox is the platform for managing your identity in
                      crypto, Web 3.0, and the metaverse.
                    </p>
                  </div>
                  <div className="bg-[#16232E] text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                    <p>Identity management</p>
                  </div>
                </div>
              </div>
              {/* <div className="w-[24px] h-[85px] mb-3 bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div> */}
            </div>

            <div className="flex items-center abc ">
              {/* <div className="w-[24px]  h-[85px] mb-3  bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a]"></div> */}
              <div className="bg-[#111b24] overflow-hidden ml-3  mb-3 mr-3  px-5 py-2 w-[265px]  border-2 border-[#1B2B38]">
                <div className="flex flex-col   py-5 ">
                  <div className="flex ">
                    <div className="">
                      <img src={a1} className="w-[48px] h-48px] "></img>
                    </div>
                    <div className=" pl-5 pt-3   text-white text-[18px] ">
                      <p>Gatenox</p>
                    </div>
                  </div>

                  <div className="  pt-3 text-start w-[200px] text-[16px] text-[#bccbd6] ">
                    <p>
                      Gatenox is the platform for managing your identity in
                      crypto, Web 3.0, and the metaverse.
                    </p>
                  </div>
                  <div className="bg-[#16232E] text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                    <p>Identity management</p>
                  </div>
                </div>
              </div>
              {/* <div className="w-[24px] h-[85px] mb-3 bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div> */}
            </div>
          </Slider>
          {/* 
          <div
            role="status"
            class="max-w-sm animate-pulse w-[265px]  bg-[#111b24] ml-3  mb-3 mr-3 border-2 border-[#1B2B38]  px-5 py-2">
            <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
            <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
            <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

            <div class="flex gap-2 ">
              <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
            </div>

            <div class="flex gap-2">
              <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
            </div>

            <span class="sr-only">Loading...</span>
          </div> */}{" "}
        </>
        {/* );
          })} */}
      </div>

      <div data-aos="fade-left" className="flex-col  ">
        {/* <Slider {...settings}> */}
        {/* {data.map((item) => {
            return ( */}
        <>
          <Slider {...settings}>
            {/* <div
              role="status"
              class="max-w-sm animate-pulse max-w-[265px]  ml-3  mb-3 mr-3  px-5 py-2 border-2 border-[#1B2B38]">
              <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
              <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
              <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

              <div class="flex gap-2 ">
                <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
              </div>

              <div class="flex gap-2">
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              </div>

              <span class="sr-only">Loading...</span>
            </div> */}

            {/* <div
              role="status"
              class="max-w-sm animate-pulse  max-w-[265px]  bg-[#111b24] ml-3  mb-3 mr-3 border-2 border-[#1B2B38]  px-5 py-2">
              <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
              <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
              <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

              <div class="flex gap-2 ">
                <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
              </div>

              <div class="flex gap-2">
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              </div>

              <span class="sr-only">Loading...</span>
            </div> */}

            <div className="flex items-center abc ">
              {/* <div className="w-[24px]  h-[85px] mb-3  bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a]"></div> */}
              <div className="bg-[#111b24] ml-3  mb-3 mr-3  px-5 py-2 w-[265px]  overflow-hidden border-2 border-[#1B2B38]">
                <div className="flex flex-col   py-5 ">
                  <div className="flex ">
                    <div className="">
                      <img src={a1} className="w-[48px] h-48px] "></img>
                    </div>
                    <div className=" pl-5 pt-3   text-white text-[18px] ">
                      <p>Gatenox</p>
                    </div>
                  </div>

                  <div className="  pt-3 text-start w-[200px] text-[16px] text-[#bccbd6] ">
                    <p>
                      Gatenox is the platform for managing your identity in
                      crypto, Web 3.0, and the metaverse.
                    </p>
                  </div>
                  <div className="bg-[#16232E] text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                    <p>Identity management</p>
                  </div>
                </div>
              </div>
              {/* <div className="w-[24px] h-[85px] mb-3 bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div> */}
            </div>

            <div className="flex items-center abc ">
              {/* <div className="w-[24px]  h-[85px] mb-3  bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a]"></div> */}
              <div className="bg-[#111b24] ml-3  mb-3 mr-3  px-5 py-2 w-[265px]  overflow-hidden border-2 border-[#1B2B38]">
                <div className="flex flex-col   py-5 ">
                  <div className="flex ">
                    <div className="">
                      <img src={a1} className="w-[48px] h-48px] "></img>
                    </div>
                    <div className=" pl-5 pt-3   text-white text-[18px] ">
                      <p>Gatenox</p>
                    </div>
                  </div>

                  <div className="  pt-3 text-start w-[200px] text-[16px] text-[#bccbd6] ">
                    <p>
                      Gatenox is the platform for managing your identity in
                      crypto, Web 3.0, and the metaverse.
                    </p>
                  </div>
                  <div className="bg-[#16232E] text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                    <p>Identity management</p>
                  </div>
                </div>
              </div>
              {/* <div className="w-[24px] h-[85px] mb-3 bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div> */}
            </div>

            <div
              role="status"
              class="max-w-sm animate-pulse max-w-[265px]  overflow-hidden ml-3  mb-3 mr-3  px-5 py-2 border-2 border-[#1B2B38]">
              <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
              <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
              <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

              <div class="flex gap-2 ">
                <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
              </div>

              <div class="flex gap-2">
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              </div>

              <span class="sr-only">Loading...</span>
            </div>

            <div
              role="status"
              class=" animate-pulse max-w-[265px]  overflow-hidden ml-3  mb-3 mr-3  px-5 py-2 border-2 border-[#1B2B38]">
              <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
              <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
              <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

              <div class="flex gap-2 ">
                <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
              </div>

              <div class="flex gap-2">
                <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
                <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              </div>

              <span class="sr-only">Loading...</span>
            </div>

            <div className="flex items-center abc ">
              {/* <div className="w-[24px]  h-[85px] mb-3  bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a]"></div> */}
              <div className="bg-[#111b24] overflow-hidden ml-3  mb-3 mr-3  px-5 py-2 w-[265px]  border-2 border-[#1B2B38]">
                <div className="flex flex-col   py-5 ">
                  <div className="flex ">
                    <div className="">
                      <img src={a1} className="w-[48px] h-48px] "></img>
                    </div>
                    <div className=" pl-5 pt-3   text-white text-[18px] ">
                      <p>Gatenox</p>
                    </div>
                  </div>

                  <div className="  pt-3 text-start w-[200px] text-[16px] text-[#bccbd6] ">
                    <p>
                      Gatenox is the platform for managing your identity in
                      crypto, Web 3.0, and the metaverse.
                    </p>
                  </div>
                  <div className="bg-[#16232E] text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                    <p>Identity management</p>
                  </div>
                </div>
              </div>
              {/* <div className="w-[24px] h-[85px] mb-3 bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div> */}
            </div>

            <div className="flex items-center abc ">
              {/* <div className="w-[24px]  h-[85px] mb-3  bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a]"></div> */}
              <div className="bg-[#111b24] overflow-hidden ml-3  mb-3 mr-3  px-5 py-2 w-[265px]  border-2 border-[#1B2B38]">
                <div className="flex flex-col   py-5 ">
                  <div className="flex ">
                    <div className="">
                      <img src={a1} className="w-[48px] h-48px] "></img>
                    </div>
                    <div className=" pl-5 pt-3   text-white text-[18px] ">
                      <p>Gatenox</p>
                    </div>
                  </div>

                  <div className="  pt-3 text-start w-[200px] text-[16px] text-[#bccbd6] ">
                    <p>
                      Gatenox is the platform for managing your identity in
                      crypto, Web 3.0, and the metaverse.
                    </p>
                  </div>
                  <div className="bg-[#16232E] text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                    <p>Identity management</p>
                  </div>
                </div>
              </div>
              {/* <div className="w-[24px] h-[85px] mb-3 bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div> */}
            </div>
          </Slider>
          {/* 
          <div
            role="status"
            class="max-w-sm animate-pulse w-[265px]  bg-[#111b24] ml-3  mb-3 mr-3 border-2 border-[#1B2B38]  px-5 py-2">
            <div class="h-[48px] w-[48px] bg-[#16232E] rounded-sm dark:bg-gray-700  mb-4"></div>
            <div class="h-2 bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5"></div>
            <div class="h-2 w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2  w-[180px] bg-[#16232E] rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 w-[265px]  bg-[#16232E] rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>

            <div class="flex gap-2 ">
              <div class="h-7 w-[50px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              <div class="h-7 w-[60px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] mb-1"></div>
            </div>

            <div class="flex gap-2">
              <div class="h-7 w-[70px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              <div class="h-7 w-[40px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
              <div class="h-7 w-[45px] bg-[#16232E] rounded-sm dark:bg-gray-700 max-w-[300px] "></div>
            </div>

            <span class="sr-only">Loading...</span>
          </div> */}{" "}
        </>
        {/* );
          })} */}
      </div>

      <div data-aos="fade-right">
        <div className="flex flex-col justify-center py-10 px-20  px-5 ">
          <p className="text-[34px] text-white ">
            <strong>Applications</strong> Under Development
          </p>
          <hr class="my-4 h-[3px]  w-[15%] bg-[#7FF4E3] border-0 dark:bg-gray-700" />
          <p className="text-[18px]  w-[400px] pt-2 text-[#bccbd6]">
            With the mainnet launch, Aleph Zero has seen a notable initial
            adoption within the developer community. Our flexible environment
            will be familiar for builders who are already accustomed with Rust
            and the Substrate stack.
          </p>
          <div>
            <button
              type="submit"
              class=" text-[#00ccab] mt-6  bg-[#0f3538]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-[12px] dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-[#0e4445] dark:focus:ring-blue-800 ">
              <span className="text-[16px]">Explore the Ecosystem</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
