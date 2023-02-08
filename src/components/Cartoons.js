import React from "react";
import { Link } from "react-router-dom";

import comic_1 from "../images/comic 1.png";
import comic_2 from "../images/comic 2.png";
import comic_3 from "../images/comic 3.png";
import comic_4 from "../images/comic 4.png";
import comic_5 from "../images/comic 5.png";
import comic_6 from "../images/comic 6.png";
import comic_7 from "../images/comic 7.png";
import comic_8 from "../images/comic 8.png";
import comic_9 from "../images/comic 9.png";
import comic_10 from "../images/comic 10.png";
import comic_11 from "../images/comic 11.png";
import comic_12 from "../images/comic 12.png";
import comic_13 from "../images/comic 13.png";
import comic_14 from "../images/comic 14.png";
import comic_15 from "../images/comic 15.png";
import comic_16 from "../images/comic 16.png";
import comic_17 from "../images/comic 17.png";
import comic_18 from "../images/comic 18.png";
import comic_19 from "../images/comic 19.png";
import comic_20 from "../images/comic 20.png";
import comic_21 from "../images/comic 21.png";
import comic_22 from '../images/comic 22.png';
import comic_23 from '../images/comic 23.png';
import comic_24 from '../images/comic 24.png';
import comic_25 from '../images/comic 25.png';

const Cartoons = () => {

  return (
    <div class="cartoons-container below-nav-bar">
      <Link className="nav-link centered-container" to="/cartoon">
        View as slides
      </Link>
      <img
        src={comic_25}
        alt="comic"
        className="comic"
        key={"cartoon 25.png"}
      />
      <img
        src={comic_24}
        alt="comic"
        className="comic"
        key={"cartoon 24.png"}
      />
      <img
        src={comic_23}
        alt="comic"
        className="comic"
        key={"cartoon 23.png"}
      />
      <img
        src={comic_22}
        alt="comic"
        className="comic"
        key={"cartoon 22.png"}
      />
      <img
        src={comic_21}
        alt="comic"
        className="comic"
        key={"cartoon 21.png"}
      />
      <img
        src={comic_20}
        alt="comic"
        className="comic"
        key={"cartoon 20.png"}
      />
      <img
        src={comic_19}
        alt="comic"
        className="comic"
        key={"cartoon 19.png"}
      />
      <img
        src={comic_18}
        alt="comic"
        className="comic"
        key={"cartoon 18.png"}
      />
      <img
        src={comic_17}
        alt="comic"
        className="comic"
        key={"cartoon 17.png"}
      />
      <img
        src={comic_16}
        alt="comic"
        className="comic"
        key={"cartoon 16.png"}
      />
      <img
        src={comic_15}
        alt="comic"
        className="comic"
        key={"cartoon 15.png"}
      />
      <img
        src={comic_14}
        alt="comic"
        className="comic"
        key={"cartoon 14.png"}
      />
      <img
        src={comic_13}
        alt="comic"
        className="comic"
        key={"/cartoon 13.png"}
      />
      <img
        src={comic_12}
        alt="comic"
        className="comic"
        key={"/cartoon 12.png"}
      />
      <img
        src={comic_11}
        alt="comic"
        className="comic"
        key={"/cartoon 11.png"}
      />
      <img
        src={comic_10}
        alt="comic"
        className="comic"
        key={"cartoon 10.png"}
      />
      <img src={comic_9} alt="comic" className="comic" key={"cartoon 9.png"} />
      <img src={comic_8} alt="comic" className="comic" key={"cartoon 8.png"} />
      <img src={comic_7} alt="comic" className="comic" key={"cartoon 7.png"} />
      <img src={comic_6} alt="comic" className="comic" key={"cartoon 6.png"} />
      <img src={comic_5} alt="comic" className="comic" key={"cartoon 5.png"} />
      <img src={comic_4} alt="comic" className="comic" key={"cartoon 4.png"} />
      <img src={comic_3} alt="comic" className="comic" key={"cartoon 3.png"} />
      <img src={comic_2} alt="comic" className="comic" key={"cartoon 2.png"} />
      <img
        src={comic_1}
        alt="comic"
        className="comic extra-margin-bottom"
        key={"cartoon 1.png"}
      />
    </div>
  );
};

export default Cartoons;
