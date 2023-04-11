import React from "react";
import Common from "./Common";
import img2  from "../web_components/Images/img2.png"
function About() {
  return (
    <div>
      <Common
        name="Welcome to About Page"
        imgsrc={img2}
        visit="/Contact"
        btnname="Contact Now"
      ></Common>
    </div>
  );
}

export default About;