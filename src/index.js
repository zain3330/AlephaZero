import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
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
import Application from "./Application";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App />
    {/* <Header /> */}{" "}
    <Header />
    {/* <Menu /> */}
    {/* <Companines /> */}
    <Navbar />
    <Video />
    <Static />
    <Slider1 />
    <Block />
    <Block2 />
    <Block3 />
    <Community />
    <Driving />
    {/* <Application /> */}
    <Azero />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
