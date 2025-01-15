import React, { useState } from "react";
import "./main.css";
import { motion,AnimatePresence } from "framer-motion";
const projects = [
  {
    title: "Backery Shop",
    paragraph:
      " A fully responsive website template for a bakery. Built with Bootstrap, it features a clean and modern design suitable for showcasing bakery products. The project includes various sections such as product displays about, contact.",
    img: "/portfolio/assets/imgs/backery.jpg",
    category: "css",
    link:"https://radwaokaily.github.io/Bakery-bootstrap/",
    repo:"https://github.com/radwaokaily/Bakery-bootstrap"
  },
  {
    title: "Guess Word Game",
    paragraph:
      "A simple word guessing game built with JavaScript. The game randomly selects a word, and players guess letters to reveal it within a limited number of attempts. Features include real-time feedback, tracking of correct/incorrect guesses.",
    img: "/portfolio/assets/imgs/guess-word.webp",
    category: "js",
    link:"https://radwaokaily.github.io/Guess-word-game/",
    repo:"https://github.com/radwaokaily/Guess-word-game"
  },
  {
    title: "RMShop",
    paragraph:" E-commerce website built using React, allowing users to view, interact with, and manage product listings in an online shopping format. It was set up with Create React App, making it easily modifiable and scalable.",
    img: "/portfolio/assets/imgs/rm-shop.jpg",
    category: "react-boot",
    link:"https://mostafa-wahba.github.io/E-commerce/",
    repo:'https://github.com/mostafa-wahba/E-commerce'
  },
  {
    title: "PrayersApp",
    paragraph:"A React.js web application that provides accurate prayer times based on the user's location. Features include a clean and intuitive interface, responsive design optimized for different devices",
    img: "/portfolio/assets/imgs/prayer.png",
    category: "react-mui",
    link:"https://radwaokaily.github.io/PrayersApp/",
    repo:"https://github.com/radwaokaily/PrayersApp"
  },
  {
    title: "Resturant",
    paragraph:"Developed a responsive restaurant application with interactive menus, dynamic order management, and smooth navigation. Utilized React for component-driven architecture, efficient state management.",
    img: "/portfolio/assets/imgs/resturant.png",
    category: "react-boot",
    link:"https://restaurant-project-sigma-blush.vercel.app/",
    repo:"https://github.com/Mudzzo/Restraunt-project"
  },
  {
    title: "Portfolio",
    paragraph:"Developed a responsive restaurant application with interactive menus, dynamic order management, and smooth navigation. Utilized React for component-driven architecture, efficient state management.",
    img: "/portfolio/assets/imgs/portfolio.webp",
    category: "react-boot",
    link:"https://radwaokaily.github.io/portfolio/",
    repo:"https://github.com/radwaokaily/portfolio"
  },
  {
    title: "Salles",
    paragraph:" A responsive web application featuring CRUD operations, built with HTML, CSS, and JavaScript. The project demonstrates the ability to manage and manipulate data dynamically, interactive UI design, and core functionality for data handling.",
    img: "/portfolio/assets/imgs/crud.webp",
    category: "js",
    link:"https://radwaokaily.github.io/salles/",
    repo:"https://github.com/radwaokaily/salles"
  },
  // {
  //   title: "Engage",
  //   paragraph:
  //     " A fully responsive website template for a bakery. Built with Bootstrap, it features a clean and modern design suitable for showcasing bakery products. The project includes various sections such as product displays about, contact, and testimonials.",
  //   img: "/portfolio/assets/imgs/backery.jpg",
  //   category: "css",
  //   link:"https://radwaokaily.github.io/Engage-update/",
  //   repo:"https://github.com/radwaokaily/Bakery-bootstrap"
  // }
];
const Main = () => {
  //current active class 
  const [currentActive, setCurrentActive] = useState("all");
  //filter project
  const [filterProjects, setFilterProjects] = useState(projects);
  //handle function to choose the category button
  const handleClick=(btnClick)=>{
    setCurrentActive(btnClick);
            const newArr = projects.filter((item) => {
              return item.category === btnClick;
            });
            setFilterProjects(newArr);
  }
  return (
    <section className="main-content d-flex" id="projects">
      <div className="buttons d-flex">
        <button
          className={currentActive === "all" ? "active" : null}
          onClick={() => {
            setCurrentActive("all");
            setFilterProjects(projects)
          }}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css")
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          className={currentActive === "js" ? "active" : null}
          onClick={() => {
            handleClick("js")
          }}
        >
          JavaScript
        </button>
        <button
          className={currentActive === "react-mui" ? "active" : null}
          onClick={() => {
            handleClick("react-mui")
          }}
        >
          React & MUI
        </button>
        <button
          className={currentActive === "react-boot" ? "active" : null}
          onClick={() => {
            handleClick("react-boot")
          }}
        >
          React & Bootstrap
        </button>
      </div>
      <div className="projects d-flex">
      <AnimatePresence>

        {filterProjects.map((item) => {
          return (
            <motion.div
            layout
      initial={{transform:"scale(.4)"}}
      animate={{transform:"scale(1)"}}
      transition={{type:"spring",damping:8,stiffness:50}}
      // transition={{duration:1}}
             key={item.title} className="card">
              <img width={250} src={item.img} alt="" />
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-paragraph">{item.paragraph}</p>
                <div className="icons d-flex">
                  <div className="d-flex">
                    <a href={item.link}>
                      <div className="icon-link"></div>
                    </a>
                    <a href={item.repo}>
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      </div>
    </section>
  );
};

export default Main;
