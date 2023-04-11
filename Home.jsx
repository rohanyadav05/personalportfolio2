import React from 'react'
import Common from './Common'
import img3  from "../web_components/Images/img3.jpg"
function Home() {
    
  return (
    <>
   <Common
        name=" Grow your Business with"
        imgsrc={img3}
        visit="/Service"
        btnname="Get Started"
      ></Common>
    </>
  )
}

export default Home