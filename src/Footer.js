import React from "react";
import "././Footer.css";
import logfooter from "../src/images/infoq-logo.svg";
import img from "../src/images/discord.svg";
import mail from "../src/images/mail.png";
import f_1 from "../src/images/f_1.svg";
import b1 from "../src/images/b1.svg";
import b2 from "../src/images/b2.svg";
import b3 from "../src/images/b3.svg";

export default function Footer() {
  const data = [
    {
      id: 1,
      b1: f_1,
      b2: " Aleph Zero Foundation",
      b3: "The Aleph Zero Foundation is responsible for overseeing the development of Aleph Zero protocol. The Foundation is also the issuer of the AZERO coin.",

      b4: b1,
      b5: " Bergliweg 15, 6300 Zug, Switzerland",
      b8: b2,
      b7: "hello@alephzero.org",
    },
    {
      id: 2,
      b1: f_1,
      b2: " Cardinal Cryptography Sp. z o.o.",
      b3: "Core Aleph Zero developer responsible for research, development, cryptography, native tooling, and incubating use cases deploying on top of the network.",

      b4: b1,
      b5: " Zamoyskiego 79A, 30-519 Krakow, Poland",
      b8: b3,
      b7: "www.cardinals.cc",
      // b10: b1,
      // b11: " Bergliweg 15, 6300 Zug, Switzerland",
      // b10: b3,
      // b11: "www.cardinals.cc",
      // innerdata: {
      //   b8: b3,
      //   b7: "www.cardinals.cc",
      //   b10: b3,
      //   b11: "www.cardinals.cc",
      // },
    },
  ];

  return (
    <footer div class="text-gray-600 body-font bg-[#111b24]">
      <div class="container px-[10px] py-[50px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-col pl-5 md:pl-10">
          <div className=" flex justify-start   ">
            <div class="h-[24px]  mt-1  bg-[#7FF4E3] w-[2px]"></div>
            <h4
              class="text-white  text-xl w-[240px] 
                  
                  
                   text-[24px] ml-5 mb-2 ">
              Be
              <strong className="pl-3">future-ready</strong>
            </h4>
          </div>
          <div>
            <p className="text-[14px] w-[320px] pt-4 text-[#bccbd6]">
              Get the latest from the Aleph Zero ecosystem and engineering
              updates, straight to your inbox.
            </p>
          </div>
          <div>
            <form>
              <label
                for="search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div class="relative mt-5 ">
                <div class="absolute  inset-y-0 left-0 flex items-center pl-3  pointer-events-none"></div>
                <input
                  type="search"
                  id="search"
                  class="block  md:max-h-[40px] max-h-0 p-4 pl-4 rounded-r-2xl text-sm text-gray-900 focus:outline-none border border-[#1B2B38] rounded-sm bg-[#0f171f] focus:ring-blue-500 focus:border-[#00EAC7] dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
                <button
                  type="submit"
                  class="flex text-[#111b24] absolute right-[1px] mr-5 hover:bg-[#7FF4E3] md:mr-0 bottom-[1px] bg-[#00EAC7]  focus:ring-4 focus:outline-none  font-medium rounded-3xl text-sm px-5 py-[5px] md:py-[10px] md:px-10  ">
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="flex ">
            <div class="form-check  pt-5">
              <input
                class="form-check-input form-check-label appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-black checked:bg-[#00EAC7]  checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <p className="w-[290px] text-[14px] text-[#bccbd6] pt-5">
              I consent to receive commercial information in the form of a
              newsletter sent to the e-mail address provided by the Aleph Zero
              Foundation with registered seat in Bergliweg 15, 6300 Zug.
              Providing consent is voluntary. Consent may be revoked at any
              time.
            </p>
          </div>
        </div>
        {/* <div>
          <p>
            Get the latest from the Aleph Zero ecosystem and engineering
            updates, straight to your inbox.
          </p>
        </div> */}
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-12 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-[170px] px-4">
            <h4 class="title-font font-medium text-[16px] font-sans text-[#ffff] leading-10   tracking-widest text-sm mb-3">
              Categories
            </h4>

            <nav class="list-none mb-10 ">
              <li className="">
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">
                  Why Aleph Zero?
                </a>
              </li>
              <li className="">
                <a class="  text-[#bccbd6] text-[14px] leading-8  ">
                  Applications
                </a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">
                  Utility & Economics
                </a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">
                  Carbon Footprint
                </a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8    ">FAQ</a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">
                  Whitepapers
                </a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">Blog</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-[170px] px-4">
            <h4 class="title-font font-medium text-[16px] font-sans text-[#ffff] leading-10  tracking-widest text-sm mb-3">
              Use
            </h4>
            <nav class="list-none mb-10">
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">
                  Code Repository
                </a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">
                  Ecosystem
                </a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8  ">Staking</a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8  ">
                  Documentation
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-[170px] px-4">
            <h4 class="title-font font-medium text-[16px]  text-[#ffff] leading-10  tracking-widest text-sm mb-3">
              Explore
            </h4>
            <nav class="list-none mb-10">
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">Testnet</a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8  ">Explorer</a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">Wallet</a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">
                  Press / Media Kit
                </a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">Roadmap</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-[170px] px-4">
            <h4 class="title-font font-medium text-[16px] font-sans leading-10 text-[#ffff]  tracking-widest text-sm mb-3">
              Meet Us
            </h4>
            <nav class="list-none mb-10 ">
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8  ">Team</a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8  ">
                  Ambassador Program
                </a>
              </li>
              <li>
                <a class="  text-[#bccbd6] text-[14px] leading-8   ">
                  Community
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2  grid-cols-1  py-8 px-5 gap-4">
        {data.map((item) => {
          return (
            <div className=" border-[#1B2B38]   py-5  rounded-sm border">
              <div className="flex justify-center     ">
                <img src={item.b1}></img>

                <div className="">
                  <p className="text-[14px] pl-10 pb-3 text-white">{item.b2}</p>
                  <p className="text-[#bccbd6] text-[14px] pl-10 md:w-[400px]">
                    {item.b3}
                  </p>
                </div>
              </div>
              <div>
                <hr class="my-4 mx-auto h-px w-[88%] bg-[#1B2B38] border-0 dark:bg-gray-700" />
              </div>

              <div className=" flex px-10 justify-between">
                <div className="flex justify-start">
                  <div className="text-white  ">
                    <img src={item.b4} class="w-[20px] h-[20px] color" />
                  </div>
                  <div>
                    <p className="text-[14px] pl-2 ">{item.b5}</p>
                  </div>
                </div>

                <div className="flex-col">
                  <div className="flex justify-start ">
                    <img src={item.b8} class="w-[20px] h-[20px]  " />

                    <div>
                      <p className="text-[14px] pl-2">{item.b7}</p>
                    </div>
                  </div>
                  {/* {data?.innerdata?.map((item) => {
                    return (
                      <>
                        <div className="flex justify-start ">
                          <img src={item.b8} class="w-[20px] h-[20px]  " />

                          <div>
                            <p className="text-[14px] pl-2">{item.b7}</p>
                          </div>
                        </div>
                        <div className="flex justify-start ">
                          <img src={item.b10} class="w-[20px] h-[20px]  " />

                          <div>
                            <p className="text-[14px] pl-2">{item.b11}</p>
                          </div>
                        </div>
                      </>
                    );
                  })} */}
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className=" border-[#1B2B38]  py-5   rounded-sm border">
          <div className="flex justify-center     ">
            <img src={f_1}></img>

            <div className="">
              <p className="text-[14px] pl-10 pb-3 text-white">
                Aleph Zero Foundation
              </p>
              <p className="text-[#bccbd6] text-[14px] pl-10  md:w-[365px]">
                The Aleph Zero Foundation is responsible for overseeing the
                development of Aleph Zero protocol. The Foundation is also the
                issuer of the AZERO coin.
              </p>
            </div>
          </div>
          <div>
            <hr class="my-4 mx-auto h-px w-[88%] bg-[#1B2B38] border-0 dark:bg-gray-700" />
          </div>

          <div className=" flex px-5 justify-between">
            <div className="flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[20px] h-[20px] ">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div>
                <p className="text-[14px] pl-2 ">
                  Bergliweg 15, 6300 Zug, Switzerland
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[20px] h-[20px] ">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <p className="text-[14px] pl-2">
                    Bergliweg 15, 6300 Zug, Switzerland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div class="bg-[#111b24] pb-2">
        <div class="container border-t-[.3px] w-[90%] [] border-[#1B2B38] mx-auto py-4 px-0 flex flex-wrap flex-col sm:flex-row">
          <p class="text-[#bccbc6] text-[14px] text-center sm:text-left">
            Aleph Zero Foundation © 2018-2022
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class=" text-[#bccbc6] text-[14px] pr-5">Privacy Policy</a>
            <a class=" text-[#bccbc6] text-[14px]">Cookies Policy</a>
          </span>
        </div>
      </div>

      {/* <aside class="w-12 mb-12" aria-label="Sidebar">
        <div class="overflow-y-auto py-1 px-1 bg-gray-50 rounded dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </aside> */}
    </footer>
  );
}
