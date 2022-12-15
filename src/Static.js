import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Static() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section className=" py-20  bg-[#111b24]">
      <div className="grid md:grid-cols-5 grid-cols-2  gap-4  ">
        <div
          data-aos="zoom-in"
          className=" flex flex-col justify-center items-center   ">
          <div className="pb-4">
            <p className="text-[24px] text-[#ffffff]">0.9 sec</p>
          </div>
          <div class="h-[2px] w-[65px]  mt-1   bg-green-300 "></div>
          <div className="pt-4 text-[#bccbd6] text-[16px]">
            <p>Time to Finality</p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center ">
          <div className="pb-4">
            <p className="text-[24px] text-[#ffffff]">0.0003 AZERO</p>
          </div>
          <div class="h-[2px] w-[65px]  mt-1   bg-green-300 "></div>
          <div className="pt-4 text-[#bccbd6] text-[16px]">
            <p>Avg Cost Per Transaction</p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center ">
          <div className="pb-4">
            <p className="text-[24px] text-[#ffffff]">~318,5 M</p>
          </div>
          <div class="h-[2px] w-[65px]  mt-1   bg-green-300 "></div>
          <div className="pt-4 text-[#bccbd6] text-[16px]">
            <p>Total Issuance</p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center ">
          <div className="pb-4">
            <p className="text-[24px] text-[#ffffff]">~34 M</p>
          </div>
          <div class="h-[2px] w-[65px]  mt-1   bg-green-300 "></div>
          <div className="pt-4 text-[#bccbd6] text-[16px]">
            <p>Finalized blocks</p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center ">
          <div className="pb-4">
            <p className="text-[24px] text-[#ffffff]">64.4%</p>
          </div>
          <div class="h-[2px] w-[65px]  mt-1   bg-[#00EAC7] "></div>
          <div className="pt-4 text-[#bccbd6] text-[16px]">
            <p>Supply Staked</p>
          </div>
        </div>
      </div>
    </section>
  );
}
