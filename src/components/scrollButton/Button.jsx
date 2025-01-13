import React, { useEffect, useState } from "react";
import "./Button.css";
const Button = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>300){
        setShowScrollBtn(true)
      }
      else{
        setShowScrollBtn(false)
      }
      // console.log(window.scrollY)
    })
  },[])
  return (
    <>
      
        <a href="#top" className="scroll-up" style={{opacity: showScrollBtn?.7:0}}>
          <button className="icon-arrow-up2"></button>
        </a>
      
    </>
  );
};

export default Button;
