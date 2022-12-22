import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Video from "./Video";
import Slider1 from "./Slider";
import Companines from "./Companines";
import Navbar from "./Navbar";
import Static from "./Static";
import Block from "./Block";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Community from "./Community";
import Azero from "./Azero";
import Driving from "./Driving";
// import Application from "./Application";
import MainBlock from "./MainBlock";
import lftimg from "../src/images/leftimg.jpg";
import block2 from "../src/images/block2.jpg";
import block3 from "../src/images/block3.jpg";
import MainBlockComponent from "./MainBlockComponent";
import Scelton from "./Scelton";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App />
    {/* <Header /> */}{" "}
    <div className="bg-[#14202A]">
      <Header />
      <Navbar />
      {/* <MainBlock /> */}
      {/* <Menu /> */}
      {/* <Companines /> */}
      <Video />
      <Static />
      <Slider1 />
      <MainBlockComponent
        bg="pack-train"
        icon={lftimg}
        t1=" We're building a new take on"
        t2="blockchain infrastructure"
        t3="Why Aleph Zero"
        justifycontent="justify-end"
        padding="pt-20"
        lineh="h-[80px]"
        animation="fade-left"
      />
      {/* <Block /> */}
      <Driving />
      <MainBlockComponent
        bg="pack-train1"
        icon={block2}
        t1="Curious about"
        t2=" upcoming network upgrades?"
        t3="Go to the Roadmap"
        justifycontent="justify-start"
        padding="pt-20"
        lineh="h-[50px]"
        animation="fade-right"
      />
      {/* <Block2 /> */}
      <Community />
      <MainBlockComponent
        bg="pack-train2"
        icon={block3}
        t1="Aleph Zero is designed to "
        t2="care for the environment"
        t3="Our Carbon Footprint"
        justifycontent="justify-end"
        padding="pt-20"
        lineh="h-[80px]"
        animation="fade-left"
      />
      {/* <Block3 /> */}
      {/* <Application /> */}
      <Scelton />
      <Azero />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
