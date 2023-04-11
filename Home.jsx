import React from 'react'
import Common from './Common'
import img3  from "../web_components/Images/img3.jpg"
function Home() {
    
  return (
    <>
   <Common
        name=" Welcome to the world of "
        imgsrc={img3}
        visit="/Service"
        btnname="Get Started"
        content= "I speak fluent Java, Python, and sarcasm."
      ></Common>
    </>
  )
}

export default Home