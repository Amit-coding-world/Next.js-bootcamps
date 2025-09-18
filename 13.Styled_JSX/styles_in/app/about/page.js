"use client"
import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1>This is about me</h1>
      <p>hey i am a good boy</p>

      <style jsx>
        {`
          .container {
            background-color: yellow;
            color:black;
          }
        `}
      </style>
    </div>
  );
};

export default About;
