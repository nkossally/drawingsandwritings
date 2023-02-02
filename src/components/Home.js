import React from "react";

const Home = props => {
    console.log(props);
    console.log("this.props", this);

    return (
      <div class="homepage-outer-container">
        <div class="container">
          <div class="homepage-container">
            <a class="homepage-links" href="/cartoons">
              Cartoons
            </a>
            <a class="homepage-links" href="/essays">
              Essays
            </a>
          </div>
        </div>
      </div>
    );
  }

export default Home;
