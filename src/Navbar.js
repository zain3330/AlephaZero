import React, { useEffect, useState } from "react";
import logoday from "../src/images/logo-day.svg";
import "../src/Navbar.css";
import headerimg from "../src/images/header_img.jpeg";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <>
      <nav className="w-full bg-[#111b24] shadow md:hidden ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="javascript:void(0)">
                <img src={logoday} className="w-full h-[24px]" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}>
              <ul className="items-center  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className=" text-[#ffffff]">
                  <a className=" text-[#ffffff]" href="javascript:void(0)">
                    Learn
                  </a>
                </li>
                <li className="text-white ">
                  <a className=" text-[#ffffff]" href="javascript:void(0)">
                    Use
                  </a>
                </li>
                <li className="text-white ">
                  <a className=" text-[#ffffff]" href="javascript:void(0)">
                    Explore
                  </a>
                </li>
                <li className="text-white ">
                  <a className=" text-[#ffffff]" href="javascript:void(0)">
                    Contact US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <header
        className={`sticky ${
          scrollDirection === "down" ? "-top-24" : "top-0"
        }  top-0 z-50  text-gray-600 body-font bg-[#111b24] invisible md:visible`}>
        <div class=" container mx-auto flex flex-wrap md:pb-5 pb-0 px-5  flex-col md:flex-row items-center ">
          <a class="flex title-font font-medium items-center text-gray-900 mb-2  md:pt-0  md:mb-0">
            <img src={logoday} className="w-auto h-[24px]" />
          </a>
          <nav class="md:ml-auto ml-5 md:mr-auto flex flex-wrap items-center text-base justify-center md:pt-5  pl-1 ">
            <div class="dropdown">
              <a class=" mr-12 text-[#ffffff]  text-[16px] font-press-start">
                Learn
              </a>
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
              <a class=" mr-12 text-[#ffffff]  text-[16px] " id="explore">
                Explore
              </a>
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
              <a class=" mr-12 text-[#ffffff] text-[16px] " id="meet">
                Meet Us
              </a>
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
          <button class="dropbtn px-4 py-[7px] flex text-[#111b24] text-[14px] bg-[#7FF4E3] hover:bg-[#7FF4E3] font-medium rounded-full invisible md:visible">
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
    </>
  );
}
