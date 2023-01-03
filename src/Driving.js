import React, { useEffect } from "react";
import "../src/Driving.css";
import g1 from "../src/images/g1.svg";
import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";

const data = [
  {
    id: 1,
    name: "See Whats's Possible",
    image: g1,
    altr: "image1",
  },
  {
    id: 2,
    name: "Automatic Tax Payment",
    image: "https://alephzero.org/storage/tax-1668528261DjfXM.svg",
    altr: "image2",
  },
  {
    id: 2,
    name: "Databases",
    image: "https://alephzero.org/storage/database-1668528260aNWrV.svg",
    altr: "image2",
  },
  {
    id: 2,
    name: "Asset Digitization",
    image:
      "https://alephzero.org/storage/asset-digitization-1668528260tTuhA.svg",
    altr: "image2",
  },
  {
    id: 2,
    name: "IoT",
    image: "https://alephzero.org/storage/iot-1668528260hN7t5.svg",
    altr: "image2",
  },
  {
    id: 2,
    name: "DNS",
    image: "https://alephzero.org/storage/dns-1668528260ogSoc.svg",
    altr: "image2",
  },
  {
    id: 2,
    name: "DNS",
    image: "https://alephzero.org/storage/dns-1668528260ogSoc.svg",
    altr: "image2",
  },
  {
    id: 2,
    name: "Transparent Public Document Access",
    image: "https://alephzero.org/storage/public-documents-1668528260aop0X.svg",
    altr: "image2",
  },
  {
    id: 2,
    name: "    Automatic Payments and Shared Revenue Agreement",
    image: "https://alephzero.org/storage/shared-revenue-1668528260rXi5i.svg",
    altr: "image2",
  },
];

export default function Driving() {
  const settings = {
    className: "center",
    centerPadding: "15px",
    centerMode: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    // rows: 1,
    // swipeToSlide: true,
    speed: 1000,
    vertical: true,
  };
  return (
    <div class="grid md:grid-cols-2  grid-cols-1 gap-4 px-12 items-center   bg-[#111b24]">
      <div data-aos="fade-right">
        <div className="flex flex-col justify-center md:pb-0 pb-14   md:px-5 px-0 py-40 md:py-0 ">
          <p className="text-[34px] text-white ">
            <strong>Driving</strong> Web3 Adoption
          </p>
          <hr class="my-4 h-[3px]  w-[15%] bg-[#7FF4E3] border-0 dark:bg-gray-700" />
          <p className="text-[18px]  max-w-[400px] pt-2 text-[#bccbd6]">
            Aleph Zero bridges the gap between scalability, security, developer
            friendliness, and cost of use.  Moreover, the network will boast a
            native privacy stack to further enable you to build solutions that
            strike the balance between transparency and privacy.
          </p>
          <div>
            <button
              type="submit"
              class=" text-[#00ccab] mt-6  bg-[#0f3538] focus:outline-none font-medium rounded-3xl text-sm px-8 py-[12px]  hover:bg-[#0e4445] ">
              <span className="text-[16px]">See Whats's Possible</span>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="w-[24px] h-[70px] bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a]"></div>
      <div className="w-[24px] h-[70px] bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div> */}
      <div data-aos="fade-left" className="flex-col mb-5  ">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <>
                <div className="flex items-center ">
                  <div className="w-[24px]  h-[85px] mb-3  bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-l-[#14202a] "></div>
                  <div className="bg-[#121D26] ml-3  mb-3 mr-3  px-5 py-2 w-[460px] border-2 border-[#1B2B38] ">
                    <div className="flex   ">
                      <div className="">
                        <img
                          src={item.image}
                          alt={item.altr}
                          className="w-[78px] h-[70px] "></img>
                      </div>
                      <div className=" pl-5 pt-5 text-white text-[16px] ">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[24px] h-[85px] mb-3 bg-[#14202a] overflow-hidden border-[2px] border-[#1B2B38] border-r-[#14202a]"></div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
