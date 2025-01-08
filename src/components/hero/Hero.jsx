import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero d-flex">
      <div className="my-details">
        <div className="avatar">
          <img src="/public/title-icon.png" alt="avatar" />
        </div>
        <div className="objective">
          <h1 className="title">Frontend Developer using React.js</h1>
          <p className="summary">
            A motivated front-end developer skilled in HTML5, CSS3, JavaScript,
            and TypeScript, with expertise in frameworks like React, Next.js,
            and Redux Toolkit. Seeking to leverage proficiency in responsive
            design, Bootstrap, and Sass to build dynamic, user-centric web
            applications. Known for strong problem-solving abilities and a
            passion for delivering seamless, high-performance interfaces.
          </p>
          <div className="social-icons d-flex">
            <div className="icon icon-phone"></div>
            <div className="icon icon-github"><a href="https://github.com/radwaokaily"></a></div>
            <div className="icon icon-linkedin-with-circle"></div>
            <div className="icon icon-mail"></div>
          </div>
        </div>
      </div>
      {/* <div className="animation">ssssssssssssssss</div> */}
    </section>
  );
};

export default Hero;
