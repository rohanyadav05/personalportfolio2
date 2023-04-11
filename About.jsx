import React from "react";
import Common from "./Common";
import img2  from "../web_components/Images/img2.png"
function About() {
  return (
    <div>
      <Common
        name="Welcome to About Page of"
        content="I'm a software developer. I turn coffee into code, bugs into features, and deadlines into adrenaline-fueled coding marathons."
        imgsrc={img2}
        visit="/History"
        btnname="Know More About Me"
      ></Common>
    </div>
  );
}

export default About;