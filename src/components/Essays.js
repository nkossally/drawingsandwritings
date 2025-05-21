import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FalseAllies from "../essays/falseAllies";
import ChatGpt from "../essays/chatGpt";
import LastOfUs from "../essays/lastOfUs";
import Drive from "../essays/drive";
import HighConcept from "../essays/highConcept";

const Essays = () => {
  const lastOfUsRef = useRef();
  const driveRef = useRef();
  const chatGPTRef = useRef();
  const falseAlliesRef = useRef();
  const highConceptRef = useRef();

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
    if (hash.toLowerCase().includes("falseAllies")) {
      falseAlliesRef?.current?.scrollIntoView();
    }
  });

    useEffect(() => {
    if (hash.toLowerCase().includes("highConcept")) {
      highConceptRef?.current?.scrollIntoView();
    }
  });

  return (
    <div class="outer-container below-nav-bar">
      <div class="container">
        <div class="inner-container">
          <div class="wrapper">
            <div class="navbar ">
              <span
                class="nav-button"
                onClick={() => highConceptRef.current.scrollIntoView()}
              >
                What High Concept Films Say About America in the 1990’s              </span>
              <span
                class="nav-button"
                onClick={() => chatGPTRef.current.scrollIntoView()}
              >
                ChatGPT
              </span>
              <span
                class="nav-button"
                onClick={() => falseAlliesRef?.current?.scrollIntoView()}
              >
                False Allies
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
          </div>

          <div className="">
            <div class="essays">
              <div class="top-margin" />
              <HighConcept ref={highConceptRef} />
              <div class="divider"></div>
              {/* <ChatGpt ref={chatGPTRef} />
              <div class="divider"></div>
              <FalseAllies ref={falseAlliesRef} />
              <div class="divider"></div>
              <LastOfUs ref={lastOfUsRef} />
              <div class="divider"></div>
              <Drive ref={driveRef} />
              <div class="divider"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essays;
