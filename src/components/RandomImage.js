import React from 'react';
import Data from "../json/Data.json";

function RandomImage({randomNum, setRandomNum}) {
  

  return(
    <div >
      <h2 style={{padding:"25px 100px 0px 100px"}}> Image Prompt: </h2>
      <div className="ImageWrapper" >
        <img   className="SingleImage" src={Data[randomNum].imageSrc} alt={Data.imageAlt}/>
      </div>
    </div>
  )
}


export default RandomImage;
