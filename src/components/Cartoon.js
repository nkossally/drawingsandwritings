import React from "react";
import { useLocation, Link } from "react-router-dom";

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
import comic_19 from '../images/comic 16.png';
import comic_18 from '../images/comic 17.png';
import comic_17 from '../images/comic 18.png';
import comic_16 from '../images/comic 19.png';
import comic_20 from '../images/comic 20.png';
import comic_21 from '../images/comic 21.png';
import comic_22 from '../images/comic 22.png';
import comic_23 from '../images/comic 23.png';
import comic_24 from '../images/comic 24.png';
import comic_25 from '../images/comic 25.png';
import comic_26 from '../images/comic 26.png';
import comic_27 from '../images/comic 27.png';
import comic_28 from '../images/comic 28.png';
import comic_29 from '../images/comic 29.png';
import comic_30 from '../images/comic 30.png';
import comic_31 from '../images/comic 31.png';
import comic_32 from '../images/comic 32.png';
import comic_33 from '../images/comic 33.png';
import comic_34 from '../images/comic 34.png';
import comic_35 from '../images/comic 35.png';

const Cartoon = () => {
  const location = useLocation();
  const numComics = 35;
  let comicNumber = location.pathname.slice(9);

  if (!comicNumber) {
    comicNumber = 1;
  } else {
    comicNumber = parseInt(comicNumber);
  }
  const nextComic = comicNumber + 1 === numComics + 1 ? 1 : comicNumber + 1;
  const prevComic = comicNumber - 1 === 0 ? numComics : comicNumber - 1


  return (
    <div class="cartoons-container full-height vertically-centered below-nav-bar">
      <Link className="nav-link centered-container" to="/cartoons">
        View all
      </Link>
      {comicNumber === 35 && (
        <img src={comic_35} alt="comic" className="comic" key={"cartoon 35.png"} />
      )}
      {comicNumber === 34 && (
        <img src={comic_34} alt="comic" className="comic" key={"cartoon 34.png"} />
      )}
      {comicNumber === 33 && (
        <img src={comic_33} alt="comic" className="comic" key={"cartoon 33.png"} />
      )}
      {comicNumber === 32 && (
        <img src={comic_32} alt="comic" className="comic" key={"cartoon 32.png"} />
      )}
      {comicNumber === 31 && (
        <img src={comic_31} alt="comic" className="comic" key={"cartoon 31.png"} />
      )}
      {comicNumber === 30 && (
        <img src={comic_30} alt="comic" className="comic" key={"cartoon 30.png"} />
      )}
      {comicNumber === 29 && (
        <img src={comic_29} alt="comic" className="comic" key={"cartoon 29.png"} />
      )}
            {comicNumber === 28 && (
        <img src={comic_28} alt="comic" className="comic" key={"cartoon 28.png"} />
      )}
      {comicNumber === 27 && (
        <img src={comic_27} alt="comic" className="comic" key={"cartoon 27.png"} />
      )}
      {comicNumber === 26 && (
        <img src={comic_26} alt="comic" className="comic" key={"cartoon 26.png"} />
      )}
      {comicNumber === 25 && (
        <img src={comic_25} alt="comic" className="comic" key={"cartoon 25.png"} />
      )} 
      {comicNumber === 24 && (
        <img src={comic_24} alt="comic" className="comic" key={"cartoon 24.png"} />
      )} 
      {comicNumber === 23 && (
        <img src={comic_23} alt="comic" className="comic" key={"cartoon 23.png"} />
      )} 
      {comicNumber === 22 && (
        <img src={comic_22} alt="comic" className="comic" key={"cartoon 22.png"} />
      )} 
      {comicNumber === 21 && (
        <img src={comic_21} alt="comic" className="comic" key={"cartoon 21.png"} />
      )} 
      {comicNumber === 20 && (
        <img src={comic_20} alt="comic" className="comic" key={"cartoon 20.png"} />
      )} 
      {comicNumber === 19 && (
        <img src={comic_19} alt="comic" className="comic" key={"cartoon 19.png"} />
      )}      {comicNumber === 18 && (
        <img src={comic_18} alt="comic" className="comic" key={"cartoon 18.png"} />
      )}
      {comicNumber === 17 && (
        <img src={comic_17} alt="comic"  className="comic" key={"cartoon 17.png"} />
      )}
      {comicNumber === 16 && (
        <img src={comic_16} alt="comic" className="comic" key={"cartoon 16.png"} />
      )}
      {comicNumber === 15 && (
        <img src={comic_15} alt="comic" className="comic" key={"cartoon 15.png"} />
      )}
      {comicNumber === 14 && (
        <img src={comic_14} alt="comic" className="comic" key={"cartoon 14.png"} />
      )}
      {comicNumber === 13 && (
        <img src={comic_13} alt="comic" className="comic" key={"/cartoon 13.png"} />
      )}
      {comicNumber === 12 && (
        <img src={comic_12} alt="comic" className="comic" key={"/cartoon 12.png"} />
      )}
      {comicNumber === 11 && (
        <img src={comic_11} alt="comic" className="comic" key={"/cartoon 11.png"} />
      )}
      {comicNumber === 10 && (
        <img src={comic_10} alt="comic" className="comic" key={"/cartoon 10.png"} />
      )}
      {comicNumber === 9 && (
        <img src={comic_9} alt="comic" className="comic" key={"/cartoon 9.png"} />
      )}
      {comicNumber === 8 && (
        <img src={comic_8} alt="comic" className="comic" key={"/cartoon 8.png"} />
      )}
      {comicNumber === 7 && (
        <img src={comic_7} alt="comic" className="comic" key={"cartoon 7.png"} />
      )}
      {comicNumber === 6 && (
        <img src={comic_6} alt="comic" className="comic" key={"/cartoon 6.png"} />
      )}
      {comicNumber === 5 && (
        <img src={comic_5} alt="comic" className="comic" key={"/cartoon 5.png"} />
      )}
      {comicNumber === 4 && (
        <img src={comic_4} alt="comic" className="comic" key={"/cartoon 4.png"} />
      )}
      {comicNumber === 3 && (
        <img src={comic_3} alt="comic" className="comic" key={"/cartoon 3.png"} />
      )}
      {comicNumber === 2 && (
        <img src={comic_2} alt="comic" className="comic" key={"/cartoon 2.png"} />
      )}
      {comicNumber === 1 && (
        <img src={comic_1} alt="comic" className="comic" key={"/cartoon 1.png"} />
      )}
      <div className="buttons-container">
        <Link className="nav-link" to={`/cartoon-${prevComic}`}>
          {" "}
          previous
        </Link>
        <Link className="nav-link" to={`/cartoon-${nextComic}`}>
          {" "}
          next
        </Link>
      </div>
    </div>
  );
};
export default Cartoon;
