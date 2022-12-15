import React from "react";
import logoday from "../src/images/logo-day.svg";
import "../src/Navbar.css";

export default function Navbar() {
  return (
    <header class=" scrollbar-hide   top-0 z-50  text-gray-600 body-font bg-[#111b24]">
      <div class=" container mx-auto flex flex-wrap pb-5 px-5  flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logoday} className="w-auto h-[24px]" />
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center pt-5">
          <div class="dropdown">
            <a class=" mr-12 text-[#ffffff]  text-[16px]">Learn</a>
            <div class="dropdown-content ">
              <a href="#" class="text-[#ffffff]">
                Link 1
              </a>
              <a href="#" class="text-[#ffffff]">
                Link 2
              </a>
              <a href="#" class="text-[#ffffff]">
                Link 3
              </a>
            </div>
          </div>
          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-black drop-shadow-lg">
            <a class="px-5 py-3 hover:bg-gray-200" href="#">
              About Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">
              Contact Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">
              Privacy Policy
            </a>
          </div>
          <div class="dropdown">
            <a class=" mr-12 text-[#ffffff]  text-[16px]">Use</a>
            <div class="dropdown-content">
              <a href="#" class="text-[#ffffff]">
                Link 1
              </a>
              <a href="#" class="text-[#ffffff]">
                Link 2
              </a>
              <a href="#" class="text-[#ffffff]">
                Link 3
              </a>
            </div>
          </div>
          <div class="dropdown">
            <a class=" mr-12 text-[#ffffff]  text-[16px]">Explore</a>
            <div class="dropdown-content">
              <a href="#" class="text-[#ffffff]">
                Link 1
              </a>
              <a href="#" class="text-[#ffffff]">
                Link 2
              </a>
              <a href="#" class="text-[#ffffff]">
                Link 3
              </a>
            </div>
          </div>
          <div class="dropdown   ">
            <a class=" mr-12 text-[#ffffff] text-[16px]">Meet Us</a>
            <div class="dropdown-content  ">
              <a href="#" class="text-[#ffffff]">
                Link 1
              </a>
              <a href="#" class="text-[#ffffff]">
                Link 2
              </a>
              <a href="#" class="text-[#ffffff]">
                Link 3
              </a>
            </div>
          </div>
        </nav>
        {/* <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div> */}
        <button class="dropbtn px-4 py-[7px] flex  bg-[#7FF4E3] text-[#111b24] text-[14px] font-medium rounded-full">
          <div className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          Stake AZERO
        </button>
      </div>
    </header>
  );
}
