import React from "react";
// import comic_1 from '../images/comic 1.png';
// import comic_2 from '../images/comic 2.png';
// import comic_3 from '../images/comic 3.png';
// import comic_4 from '../images/comic 4.png';
// import comic_5 from '../images/comic 5.png';
// import comic_6 from '../images/comic 6.png';
// import comic_7 from '../images/comic 7.png';
// import comic_8 from '../images/comic 8.png';
// import comic_9 from '../images/comic 9.png';
// import comic_10 from '../images/comic 10.png';
// import comic_11 from '../images/comic 11.png';
// import comic_12 from '../images/comic 12.png';
// import comic_13 from '../images/comic 13.png';
// import comic_14 from '../images/comic 14.png';
// import comic_15 from '../images/comic 15.png';

class Cartoons extends React.Component {
  render() {
    const numCartoons = 14;
    const comics = [];
    {
      for (let i = numCartoons; i > 0; i--) {
        comics.push(<img src={`images/comic ${i}.png`} class="comic" />);
      }
    }

    return <div class="cartoons-container">
        {comics}
    </div>;
  }
}
export default Cartoons;
