import React, { useEffect, useState } from 'react'
import "./Home.css"

export const Home = () => {
  const [currentContent, setCurrentContent] = useState(0)
  const nextSlide = () => {
    setCurrentContent((currentContent + 1) % HomeSlider.length)
  };
  const previousSlide = () => {
    setCurrentContent((currentContent - 1 + HomeSlider.length) % HomeSlider.length)
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentContent]);
  const HomeSlider = [
    {
      title: "Ismail",
      details: "Codes"
    },
    {
      title: "Ismail",
      details: "Develops"
    },
    {
      title: "Ismail",
      details: "Writes"
    },
    {
      title: "Ismail",
      details: "Designs"
    },
    {
      title: "Ismail",
      details: "Debugs"
    },
    {
      title: "Ismail",
      details: "IS A GENIUS"
    },
  ];

   
  
  return (
    <div>
<div className="home">
<div className="home-container">

<h1>Into the Possibilities of <br/> <span>Digital Reality.</span></h1>
<small> Affixed to comply to the modern practices of building websites,
  here, we compile the most of the best of attributed and significant
  styling and responsive designs that are top notch in the market. Get
  your idea serviced by our expertise.
</small>
     </div>
     

    <div className="home-disp">
    <div className="home-image">
      <img src={require("../../Assets/hala-removebg-preview.png")} alt="" />
     </div>
     </div>
<div className="home-content">
  <div className="home-c-header">
  <div className="home-c-content">
    <h1>{HomeSlider[currentContent].title}</h1>
    <h2>{HomeSlider[currentContent].details}</h2>
  </div>
  </div>
  <small>A Frontend Developer; Backend Developer; Blockchain Developer; UI/UX Designer;
     Accounts & Finance; Scriptwriter & Author.
     </small>
</div>
</div>
</div>
  )
}
