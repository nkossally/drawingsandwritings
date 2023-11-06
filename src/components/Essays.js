import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Libs from "../essays/libs";
import ChatGpt from "../essays/chatGpt";
import LastOfUs from "../essays/lastOfUs";
import Drive from "../essays/drive";

const Essays = () => {
  const lastOfUsRef = useRef();
  const driveRef = useRef();
  const chatGPTRef = useRef();
  const libsRef = useRef();

  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    if (hash.includes("drive")) {
      driveRef.current.scrollIntoView();
    }
  });

  useEffect(() => {
    if (hash.includes("last-of-us")) {
      lastOfUsRef.current.scrollIntoView();
    }
  });

  useEffect(() => {
    if (hash.toLowerCase().includes("chatgpt")) {
      chatGPTRef.current.scrollIntoView();
    }
  });

  useEffect(() => {
    if (hash.toLowerCase().includes("libs")) {
      libsRef?.current?.scrollIntoView();
    }
  });

  return (
    <div class="outer-container below-nav-bar">
      <div class="container">
        <div class="inner-container">
          <div class="navbar">
            {/* <span
              class="nav-button"
              onClick={() => libsRef?.current?.scrollIntoView()}
            >
              Libs
            </span> */}
            <span
              class="nav-button"
              onClick={() => chatGPTRef.current.scrollIntoView()}
            >
              ChatGPT
            </span>
            <span
              class="nav-button"
              onClick={() => lastOfUsRef.current.scrollIntoView()}
            >
              The Last of Us
            </span>
            <span
              class="nav-button"
              onClick={() => driveRef.current.scrollIntoView()}
            >
              Drive
            </span>
          </div>

          <div className="">
            <div class="essays">
              <div class="top-margin" />
              {/* <Libs ref={libsRef} /> */}
              {/* <div class="divider"></div> */}
              <ChatGpt ref={chatGPTRef} />
              <div class="divider"></div>
              <LastOfUs ref={lastOfUsRef} />
              <div class="divider"></div>
              <Drive ref={driveRef} />
              <div class="divider"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essays;
