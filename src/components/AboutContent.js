import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react.jpg";
import React2 from "../assets/website.avif";


import React from 'react'

const AboutConetent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>Im a react Front-end Developer. 
          I create responsive secure 
          websites for my clients.</p>
          <Link to="/contact">
            <button className="btn">
              contact
            </button>
          </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="react" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="react" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutConetent