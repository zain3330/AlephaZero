import React, { useState } from "react";
import "../src/Scelton.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Skeleton, Space, Switch } from "antd";
import one from "../src/images/scrollimg1.svg";

function Scelton() {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState("default");
  const [buttonShape, setButtonShape] = useState("default");
  const [avatarShape, setAvatarShape] = useState("circle");
  setTimeout(() => {
    setLoading(!loading);
  }, 2000);

  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="scelton-main overflow-hidden  ">
        <div className="scelton-left invisible lg:visible ">
          {!loading ? (
            <div className="vertical-slider">
              <div className="down">
                <div className="half-item">
                  <Space>
                    <div className="skelton-top">
                      <Skeleton
                        className="scelton"
                        paragraph={{
                          rows: 0,
                        }}
                      />
                    </div>

                    <div className="skelton-btn">
                      <Skeleton.Button
                        active={active}
                        size={size}
                        shape={buttonShape}
                        block={block}
                      />
                      <Skeleton.Button
                        active={active}
                        size={size}
                        shape={buttonShape}
                        block={block}
                      />
                      <Skeleton.Button
                        active={active}
                        size={size}
                        shape={buttonShape}
                        block={block}
                      />
                    </div>
                    <div className="skelton-btn">
                      <Skeleton.Button
                        active={active}
                        size={size}
                        shape={buttonShape}
                        block={block}
                      />
                      <Skeleton.Button
                        active={active}
                        size={size}
                        shape={buttonShape}
                        block={block}
                      />
                      <Skeleton.Button
                        active={active}
                        size={size}
                        shape={buttonShape}
                        block={block}
                      />
                    </div>
                  </Space>
                </div>
                <div className="down-item">
                  <div className="slider-card">
                    <div className="slider-card1">
                      <div>
                        <img src={one} alt="image1" />
                      </div>
                      <div>
                        <p>Interlock</p>
                      </div>
                    </div>
                    <div className="slider-card2">
                      <p className="slider-card2-para">
                        Flidy Technologies is an African crypto, blockchain, Web
                        3.0, and meta verse incubator for startups of the future
                      </p>
                    </div>
                    {/* <div className="slider-card3">
                      <p>wallet</p>
                    </div> */}
                    <div className="bg-[#16232E] slider-card3 text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                      <p>Identity management</p>
                    </div>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-card">
                    <div className="slider-card1">
                      <div>
                        <img src={one} alt="image1" />
                      </div>
                      <div>
                        <p>Interlock</p>
                      </div>
                    </div>
                    <div className="slider-card2">
                      <p className="slider-card2-para">
                        Flidy Technologies is an African crypto, blockchain, Web
                        3.0, and meta verse incubator for startups of the future
                      </p>
                    </div>
                    {/* <div className="slider-card3">
                      <p>wallet</p>
                    </div> */}
                    <div className="bg-[#16232E] slider-card3 text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                      <p>Identity management</p>
                    </div>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
              </div>
              <div className="up">
                <div className="up-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>

                <div className="up-item">
                  <div className="slider-card">
                    <div className="slider-card1">
                      <div>
                        <img src={one} alt="image1" />
                      </div>
                      <div>
                        <p>Interlock</p>
                      </div>
                    </div>
                    <div className="slider-card2">
                      <p className="slider-card2-para">
                        Flidy Technologies is an African crypto, blockchain, Web
                        3.0, and meta verse incubator for startups of the future
                      </p>
                    </div>
                    {/* <div className="slider-card3">
                      <p>wallet</p>
                    </div> */}
                    <div className="bg-[#16232E] slider-card3 text-center text-[15px] mt-10 border-10 border-[#14202a] w-[170px] text-[#bccbd6]">
                      <p>Identity management</p>
                    </div>
                  </div>
                </div>

                <div className="up-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="scelton-top-bottom">
              <div className="slider-scelton-main">
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
              </div>
              <div className="slider-scelton-main2">
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-scelton">
                    <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          avatar
                          paragraph={{
                            rows: 4,
                          }}
                        />
                      </div>

                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                      <div className="skelton-btn">
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                        <Skeleton.Button
                          active={active}
                          size={size}
                          shape={buttonShape}
                          block={block}
                        />
                      </div>
                    </Space>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <div className="scelton-main" data-aos="fade-left">
          <div>
            <p className="scelton-right-title">
              Applications
              <span className="left-title2"> Under Development </span>
            </p>
          </div>
          <div className="scelton-right-divider"></div>
          <div>
            <p className="scelton-right-para">
              With the mainnet launch, Aleph Zero has seen a notable initial
              adoption within the developer community. Our flexible environment
              will be familiar for builders who are already accustomed with Rust
              and the Substrate stack.
            </p>
          </div>
          <div>
            <button className="scelton-right-btn">Explore the Ecosystem</button>
          </div>
        </div> */}

        <div data-aos="fade-right ">
          <div className="flex flex-col justify-center py-22 overflow-hidden md:px-10 px-16   ">
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
    </>
  );
}

export default Scelton;
