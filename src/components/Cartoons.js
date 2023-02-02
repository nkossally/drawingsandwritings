import React from "react";
import comic_1 from '../images/comic 1.png';
import comic_2 from '../images/comic 2.png';
import comic_3 from '../images/comic 3.png';
import comic_4 from '../images/comic 4.png';
import comic_5 from '../images/comic 5.png';
import comic_6 from '../images/comic 6.png';
import comic_7 from '../images/comic 7.png';
import comic_8 from '../images/comic 8.png';
import comic_9 from '../images/comic 9.png';
import comic_10 from '../images/comic 10.png';
import comic_11 from '../images/comic 11.png';
import comic_12 from '../images/comic 12.png';
import comic_13 from '../images/comic 13.png';
import comic_14 from '../images/comic 14.png';
import comic_15 from '../images/comic 15.png';

class Cartoons extends React.Component {
  render() {
    // const numCartoons = 14;
    // const comics = [];
    // {
    //   for (let i = numCartoons; i > 0; i--) {
    //     comics.push(<img src={`../images/comic ${i}.png`} className="comic" key={`images/cartoon ${i}.png`} />);
    //   }
    // }

    return <div class="cartoons-container">
      <img src={comic_15} className="comic" key={"cartoon 15.png"} />
      <img src={comic_14} className="comic" key={"cartoon 14.png"} />
      <img src={comic_13} className="comic" key={"/cartoon 13.png"} />
      <img src={comic_12} className="comic" key={"/cartoon 12.png"} />
      <img src={comic_11} className="comic" key={"/cartoon 11.png"} />
      <img src={comic_10} className="comic" key={"/cartoon 10.png"} />
      <img src={comic_9} className="comic" key={"/cartoon 9.png"} />
      <img src={comic_8} className="comic" key={"/cartoon 8.png"} />
      <img src={comic_7} className="comic" key={"cartoon 7.png"} />
      <img src={comic_6} className="comic" key={"/cartoon 6.png"} />  
      <img src={comic_5} className="comic" key={"/cartoon 5.png"} />
      <img src={comic_4} className="comic" key={"/cartoon 4.png"} />
      <img src={comic_3} className="comic" key={"/cartoon 3.png"} />
      <img src={comic_2} className="comic" key={"/cartoon 2.png"} />
      <img src={comic_1} className="comic" key={"/cartoon 1.png"} />

    </div>;
  }
}
export default Cartoons;
