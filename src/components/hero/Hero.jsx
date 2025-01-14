import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import avatar from "../../../public/assets/imgs/title-icon.png"
import reactAnimation from "../../../public/assets/animation/react-animation.json";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero d-flex" id="hero">
      <div className="my-details">
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{transform:"scale(1)"}}
        transition={{damping:6,type:"spring"}}
         className="avatar">
          <img
          
           src={avatar} alt="avatar" />
        </motion.div>
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

      <div className="animation">
      <Lottie 
                  animationData={reactAnimation}
                  loop={true}
                  style={{height:"20%"}}
                />
      </div>
    </section>
  );
};

export default Hero;
