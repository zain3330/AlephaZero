// import React from "react";
// import "../src/Driving.css";
// import g1 from "../src/images/g1.svg";
// import Slider from "react-slick";
// const data = [
//   {
//     id: 1,
//     name: "See Whats's Possible",
//     image: g1,
//     altr: "image1",
//   },
//   {
//     id: 2,
//     name: "See Whats's Possible",
//     image: g1,
//     altr: "image2",
//   },
//   {
//     id: 2,
//     name: "See Whats's Possible",
//     image: g1,
//     altr: "image2",
//   },
//   {
//     id: 2,
//     name: "See Whats's Possible",
//     image: g1,
//     altr: "image2",
//   },
//   {
//     id: 2,
//     name: "See Whats's Possible",
//     image: g1,
//     altr: "image2",
//   },
//   {
//     id: 2,
//     name: "See Whats's Possible",
//     image: g1,
//     altr: "image2",
//   },
// ];
// export default function Driving() {
//   const settings = {
//     // centerMode: true,
//     // centerPadding: "60px",
//     // slidesToShow: 3,
//     // centerMode: true,
//     // pauseOnHover: false,
//     // slidesToShow: 1,
//     // slidesToScroll: 1,
//     // swipeToSlide: true,
//     // vertical: true,
//     // verticalSwiping: true,
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     // vertical: true,
//     // verticalSwiping: true,
//     // responsive: [
//     //   {
//     //     breakpoint: 768,
//     //     settings: {
//     //       arrows: false,
//     //       centerMode: true,
//     //       centerPadding: "40px",
//     //       slidesToShow: 3,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 480,
//     //     settings: {
//     //       arrows: false,
//     //       centerMode: true,
//     //       centerPadding: "40px",
//     //       slidesToShow: 1,
//     //     },
//     //   },
//     // ],
//     // dots: true,
//     // infinite: true,
//     // slidesToShow: 3,
//     // slidesToScroll: 1,
//     // vertical: true,
//     // verticalSwiping: true,
//     // swipeToSlide: true,
//     // beforeChange: function (currentSlide, nextSlide) {
//     //   console.log("before change", currentSlide, nextSlide);
//     // },
//     // afterChange: function (currentSlide) {
//     //   console.log("after change", currentSlide);
//     // },
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     speed: 1000,
//     vertical: true,
//   };
//   return (
//     <div class="grid grid-cols-2 gap-4 px-12  bg-[#111b24]">
//       {/* <div>
//       </div> */}
//       <div>
//         <div className="flex flex-col justify-center   px-5 pb-10">
//           <p className="text-[34px] text-white ">
//             <strong>Driving</strong> Web3 Adoption
//           </p>
//           <hr class="my-4 h-[3px]  w-[15%] bg-[#7FF4E3] border-0 dark:bg-gray-700" />
//           <p className="text-[18px]  w-[400px] pt-2 text-[#bccbd6]">
//             Aleph Zero bridges the gap between scalability, security, developer
//             friendliness, and cost of use.  Moreover, the network will boast a
//             native privacy stack to further enable you to build solutions that
//             strike the balance between transparency and privacy.
//           </p>
//           <div>
//             <button
//               type="submit"
//               class=" text-[#00ccab] mt-6  bg-[#0f3538]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-[12px] dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-[#0e4445] dark:focus:ring-blue-800 ">
//               <span className="text-[16px]">See Whats's Possible</span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex-col mb-10  ">
//         <Slider {...settings}>
//           {data.map((item) => {
//             return (
//               <div className="bg-[#14202a] ml-24 h-24 mb-3  px-5 py-2 w-[460px] border-2 border-[#1B2B38]">
//                 <div className="flex  ">
//                   <div>
//                     <img
//                       src={item.image}
//                       alt={item.altr}
//                       className="w-[78px] h-[78px]"></img>
//                   </div>
//                   <div className="pt-5 pl-5 text-white text-[16px] ">
//                     <p>{item.name}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// }
"use strict";