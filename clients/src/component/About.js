import React, { useState } from "react";
// Make sure the image path is correct
import "./About.css";
import women from "../Assets/image.jpg";

function About() {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="container">
      <img src={women} alt="Best women " className="about-image" />
      <div className="personal-desc">
        <p className="more-info">
          Welcome to the website. If you're here, you're likely looking to find
          random words. Random Word Generator is the perfect tool to help you do
          this. While this tool isn't a word creator, it is a word generator
          that will generate random words for a variety of activities or uses.
          Even better, it allows you to adjust the parameters of the random
          words to best fit your needs. The first option the tool allows you to
          adjust is the number of random words to be generated. You can choose
          as many or as few as you'd like. You also have the option of choosing
          words that only begin with a certain letter, only end with a certain
          letter or only begin and end with certain letters. If you leave these
          blank, the randomized words that appear will be from the complete
          list.
        </p>
        {isReadMore && (
          <p className="more-text">
            There’s more! The random word generator also allows you to filter
            words based on the length of the word, type of word (e.g., nouns,
            verbs, adjectives), and more. With this flexibility, the tool can be
            helpful for creative writing, brainstorming, learning new words, or
            just having fun discovering random words.
          </p>
        )}
        <button className="read-more-btn" onClick={toggleReadMore}>
          {isReadMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default About;
