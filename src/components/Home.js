import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
    console.log(props);
    console.log("this.props", this);

    return (
      <div class="homepage-outer-container">
        <div class="container">
          <div class="homepage-container">
            <Link class="homepage-links" to="/cartoons">
              Cartoons
            </Link>
            <Link class="homepage-links" to="/essays">
              Essays
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default Home;
