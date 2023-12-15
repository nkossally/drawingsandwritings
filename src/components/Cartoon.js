import React, { useEffect } from "react";
import { useLocation, Link, Navigate, useNavigate } from "react-router-dom";

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
import comic_14 from "../images/comic 14.png";
import comic_19 from "../images/comic 16.png";
import comic_18 from "../images/comic 17.png";
import comic_17 from "../images/comic 18.png";
import comic_16 from "../images/comic 19.png";
import comic_20 from "../images/comic 20.png";
import comic_21 from "../images/comic 21.png";
import comic_22 from "../images/comic 22.png";
import comic_23 from "../images/comic 23.png";
import comic_24 from "../images/comic 24.png";
import comic_25 from "../images/comic 25.png";
import comic_26 from "../images/comic 26.png";
import comic_27 from "../images/comic 27.png";
import comic_28 from "../images/comic 28.png";
import comic_29 from "../images/comic 29.png";
import comic_30 from "../images/comic 30.png";
import comic_31 from "../images/comic 31.png";
import comic_32 from "../images/comic 32.png";
import comic_33 from "../images/comic 33.png";
import comic_34 from "../images/comic 34.png";
import comic_35 from "../images/comic 35.png";
import comic_36 from "../images/comic 36.png";
import comic_37 from "../images/comic 37.png";
import comic_38 from "../images/comic 38.png";
import comic_40 from "../images/comic 40.png";
import comic_41 from "../images/comic 41.png";
import comic_42 from "../images/comic 42.png";
import comic_43 from "../images/comic 43.png";
import comic_44 from "../images/comic 44.png";
import comic_45 from "../images/comic 45.png";
import comic_46 from "../images/comic 46.png";
import comic_47 from "../images/comic 47.png";

const Cartoon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const numComics = 47;
  let comicNumber = location.pathname.slice(9);

  if (!comicNumber) {
    comicNumber = 1;
  } else {
    comicNumber = parseInt(comicNumber);
  }

  const badNumbers = new Set([13, 15, 39]);

  let nextComic = comicNumber + 1 === numComics + 1 ? 1 : comicNumber + 1;
  let prevComic = comicNumber - 1 === 0 ? numComics : comicNumber - 1;
  badNumbers.forEach((num) => {
    if (num + 1 === comicNumber) {
      prevComic--;
    }
    if (num - 1 === comicNumber) {
      nextComic++;
    }
  });

  return (
    <div class="cartoons-container full-height vertically-centered below-nav-bar">
      <Link className="nav-link centered-container" to="/cartoons">
        View all
      </Link>
      {comicNumber === 46 && (
        <img
          src={comic_47}
          alt="comic"
          className="comic"
          key={"cartoon 47.png"}
        />
      )}
      {comicNumber === 46 && (
        <img
          src={comic_46}
          alt="comic"
          className="comic"
          key={"cartoon 46.png"}
        />
      )}
      {comicNumber === 45 && (
        <img
          src={comic_45}
          alt="comic"
          className="comic"
          key={"cartoon 45.png"}
        />
      )}
      {comicNumber === 44 && (
        <img
          src={comic_44}
          alt="comic"
          className="comic"
          key={"cartoon 44.png"}
        />
      )}
      {comicNumber === 43 && (
        <img
          src={comic_43}
          alt="comic"
          className="comic"
          key={"cartoon 43.png"}
        />
      )}
      {comicNumber === 42 && (
        <img
          src={comic_42}
          alt="comic"
          className="comic"
          key={"cartoon 42.png"}
        />
      )}
      {comicNumber === 41 && (
        <img
          src={comic_41}
          alt="comic"
          className="comic"
          key={"cartoon 41.png"}
        />
      )}
      {comicNumber === 40 && (
        <img
          src={comic_40}
          alt="comic"
          className="comic"
          key={"cartoon 40.png"}
        />
      )}
      {comicNumber === 38 && (
        <img
          src={comic_38}
          alt="comic"
          className="comic"
          key={"cartoon 38.png"}
        />
      )}
      {comicNumber === 37 && (
        <img
          src={comic_37}
          alt="comic"
          className="comic"
          key={"cartoon 37.png"}
        />
      )}
      {comicNumber === 36 && (
        <img
          src={comic_36}
          alt="comic"
          className="comic"
          key={"cartoon 36.png"}
        />
      )}
      {comicNumber === 35 && (
        <img
          src={comic_35}
          alt="comic"
          className="comic"
          key={"cartoon 35.png"}
        />
      )}
      {comicNumber === 34 && (
        <img
          src={comic_34}
          alt="comic"
          className="comic"
          key={"cartoon 34.png"}
        />
      )}
      {comicNumber === 33 && (
        <img
          src={comic_33}
          alt="comic"
          className="comic"
          key={"cartoon 33.png"}
        />
      )}
      {comicNumber === 32 && (
        <img
          src={comic_32}
          alt="comic"
          className="comic"
          key={"cartoon 32.png"}
        />
      )}
      {comicNumber === 31 && (
        <img
          src={comic_31}
          alt="comic"
          className="comic"
          key={"cartoon 31.png"}
        />
      )}
      {comicNumber === 30 && (
        <img
          src={comic_30}
          alt="comic"
          className="comic"
          key={"cartoon 30.png"}
        />
      )}
      {comicNumber === 29 && (
        <img
          src={comic_29}
          alt="comic"
          className="comic"
          key={"cartoon 29.png"}
        />
      )}
      {comicNumber === 28 && (
        <img
          src={comic_28}
          alt="comic"
          className="comic"
          key={"cartoon 28.png"}
        />
      )}
      {comicNumber === 27 && (
        <img
          src={comic_27}
          alt="comic"
          className="comic"
          key={"cartoon 27.png"}
        />
      )}
      {comicNumber === 26 && (
        <img
          src={comic_26}
          alt="comic"
          className="comic"
          key={"cartoon 26.png"}
        />
      )}
      {comicNumber === 25 && (
        <img
          src={comic_25}
          alt="comic"
          className="comic"
          key={"cartoon 25.png"}
        />
      )}
      {comicNumber === 24 && (
        <img
          src={comic_24}
          alt="comic"
          className="comic"
          key={"cartoon 24.png"}
        />
      )}
      {comicNumber === 23 && (
        <img
          src={comic_23}
          alt="comic"
          className="comic"
          key={"cartoon 23.png"}
        />
      )}
      {comicNumber === 22 && (
        <img
          src={comic_22}
          alt="comic"
          className="comic"
          key={"cartoon 22.png"}
        />
      )}
      {comicNumber === 21 && (
        <img
          src={comic_21}
          alt="comic"
          className="comic"
          key={"cartoon 21.png"}
        />
      )}
      {comicNumber === 20 && (
        <img
          src={comic_20}
          alt="comic"
          className="comic"
          key={"cartoon 20.png"}
        />
      )}
      {comicNumber === 19 && (
        <img
          src={comic_19}
          alt="comic"
          className="comic"
          key={"cartoon 19.png"}
        />
      )}{" "}
      {comicNumber === 18 && (
        <img
          src={comic_18}
          alt="comic"
          className="comic"
          key={"cartoon 18.png"}
        />
      )}
      {comicNumber === 17 && (
        <img
          src={comic_17}
          alt="comic"
          className="comic"
          key={"cartoon 17.png"}
        />
      )}
      {comicNumber === 16 && (
        <img
          src={comic_16}
          alt="comic"
          className="comic"
          key={"cartoon 16.png"}
        />
      )}
      {comicNumber === 14 && (
        <img
          src={comic_14}
          alt="comic"
          className="comic"
          key={"cartoon 14.png"}
        />
      )}
      {comicNumber === 12 && (
        <img
          src={comic_12}
          alt="comic"
          className="comic"
          key={"/cartoon 12.png"}
        />
      )}
      {comicNumber === 11 && (
        <img
          src={comic_11}
          alt="comic"
          className="comic"
          key={"/cartoon 11.png"}
        />
      )}
      {comicNumber === 10 && (
        <img
          src={comic_10}
          alt="comic"
          className="comic"
          key={"/cartoon 10.png"}
        />
      )}
      {comicNumber === 9 && (
        <img
          src={comic_9}
          alt="comic"
          className="comic"
          key={"/cartoon 9.png"}
        />
      )}
      {comicNumber === 8 && (
        <img
          src={comic_8}
          alt="comic"
          className="comic"
          key={"/cartoon 8.png"}
        />
      )}
      {comicNumber === 7 && (
        <img
          src={comic_7}
          alt="comic"
          className="comic"
          key={"cartoon 7.png"}
        />
      )}
      {comicNumber === 6 && (
        <img
          src={comic_6}
          alt="comic"
          className="comic"
          key={"/cartoon 6.png"}
        />
      )}
      {comicNumber === 5 && (
        <img
          src={comic_5}
          alt="comic"
          className="comic"
          key={"/cartoon 5.png"}
        />
      )}
      {comicNumber === 4 && (
        <img
          src={comic_4}
          alt="comic"
          className="comic"
          key={"/cartoon 4.png"}
        />
      )}
      {comicNumber === 3 && (
        <img
          src={comic_3}
          alt="comic"
          className="comic"
          key={"/cartoon 3.png"}
        />
      )}
      {comicNumber === 2 && (
        <img
          src={comic_2}
          alt="comic"
          className="comic"
          key={"/cartoon 2.png"}
        />
      )}
      {comicNumber === 1 && (
        <img
          src={comic_1}
          alt="comic"
          className="comic"
          key={"/cartoon 1.png"}
        />
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
