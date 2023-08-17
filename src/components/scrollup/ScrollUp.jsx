import React from 'react'
import "./scrollup.css"
const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if (scrollUp !== null) {
          if (this.scrollY >= 10) scrollUp.classList.add("show-scroll");
          else scrollUp.classList.remove("show-scroll");
        }
      });
      
  return (
   <a href="#" className="scrollup">
    <i className="uil uil-arrow-up scrollup__icon"></i>
   </a>
  )
}

export default ScrollUp
