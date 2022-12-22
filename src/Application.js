import React, { useEffect, useState } from "react";
import "../src/Driving.css";
import "../src/Scelton.css";
import a1 from "../src/images/a1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/Application.css";
import { Skeleton, Space, Switch } from "antd";
import one from "../src/images/scrollimg1.svg";

export default function Application() {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState("default");
  const [buttonShape, setButtonShape] = useState("default");
  const [avatarShape, setAvatarShape] = useState("circle");

  // setTimeout(() => {
  //   setLoading(!loading);
  // }, 2000);
  const [loading, setLoading] = useState(false);
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

  // const settings = {
  //   className: "center",
  //   centerPadding: "30%",
  //   cssEase: "linear",
  //   autoplay: true,
  //   autoplaySpeed: 380,

  //   dots: false,
  //   infinite: true,
  //   arrows: false,
  //   slidesToShow: 2,
  //   rows: 1,
  //   swipeToSlide: true,
  //   slidesToScroll: 3,
  //   speed: 1000,
  //   vertical: true,
  // };

  // const settings3 = {
  //   className: "center",
  //   centerPadding: "30%",
  //   cssEase: "linear",
  //   autoplay: true,
  //   autoplaySpeed: 180,

  //   dots: false,
  //   infinite: true,
  //   arrows: false,
  //   slidesToShow: 2,
  //   rows: 1,
  //   swipeToSlide: true,
  //   slidesToScroll: 1,
  //   speed: 1000,
  //   vertical: true,
  // };

  return (
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 px-10  py-10   bg-[#111b24] overflow-hidden">
      <div data-aos="fade-left " className="flex-col px-10  ">
        <Scelton />
      </div>

      <div data-aos="fade-right ">
        <div className="flex flex-col justify-center py-10 md:px-10 px-0  ">
          <p className="text-[34px] text-white ">
            <strong>Applications</strong> Under Development
          </p>
          <hr class="my-4 h-[3px]  w-[15%] bg-[#7FF4E3] border-0 dark:bg-gray-700" />
          <p className="text-[18px]  md:w-[400px] w-[290px] pt-2 text-[#bccbd6]">
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
