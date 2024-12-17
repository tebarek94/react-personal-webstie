import React from "react";
import "./Home.css"; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h1>
          Welcome to the website. If you're here, you're likely looking to find
          random words. Random Word Generator is the perfect tool to help you do
          this. While this tool isn't a word creator, it is a word generator
          that will generate random words for a variety of activities or uses.
          Even better, it allows you to adjust the parameters of the random
          words to best fit your needs.
        </h1>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}

export default Home;
