import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero d-flex">
      <div className="my-details">
        <div className="avatar">
          <img src="/public/assets/imgs/title-icon.png" alt="avatar" />
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
            <a href="https://drive.google.com/file/d/1XE5mrnM1p8o8i4mxbTu7X37uouaSkI4K/view?usp=drive_link">
            <div className="icon icon-phone"></div>
            </a>
            <a href="https://github.com/radwaokaily">
            <div className="icon icon-github"></div>
            </a>
            <a href="https://www.linkedin.com/in/radwa-okaily-8b1825214/">
            <div className="icon icon-linkedin-with-circle"></div>
            </a>
            
            <a href="mailto:radwaokaily69@gmail.com">
            <div className="icon icon-mail"></div>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="animation">ssssssssssssssss</div> */}
    </section>
  );
};

export default Hero;
