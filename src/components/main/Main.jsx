import React from "react";
import "./main.css";
const Main = () => {
  return (
    <section className="main-content d-flex">
      <div className="buttons d-flex">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>React & Bootstrap</button>
      </div>
      <div className="projects d-flex">
        {[1,2,3,4,5,6].map((item)=>{
          return (
            <div key={item} className="card">
          <img width={250} src="../../../public/assets/imgs/title-icon.png" alt="" />
          <div className="card-body">
            <h3 className="card-title">project name</h3>
            <p className="card-paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              aliquid sint temporibus nisi pariatur eius rem quae reiciendis
              fuga sed ex excepturi deserunt, eligendi itaque, molestiae minima
              a magnam? Numquam?
            </p>
            <div className="icons d-flex">
              <div className="d-flex">

              <a href="http://">
                <div className="icon-link"></div>
              </a>
              <a href="http://">
                <div className="icon-github"></div>
              </a>
              </div>
              <a className="d-flex" href="http://">more 
                <span className="icon-arrow-right2"></span>
              </a>
            </div>
          </div>
        </div>
          )
        })}
      </div>
    </section>
  );
};

export default Main;
