import React, { useState, useEffect } from "react";
import styles from "./Landing.module.css";
import landingOne from "../../../public/assets/landing1.jpg"
import landingTwo from "../../../public/assets/landing2.jpg"
import landingThree from "../../../public/assets/landing3.jpg"

function Landing( { trendingList, setSearchQuery } ) {
  const [images, setImages] = useState([landingOne, landingTwo, landingThree]);
  const [currentImg, setCurrentImg] = useState(landingOne);

  useEffect(() => {
    let currentIndex = images.indexOf(currentImg);
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];

    const timeout = setTimeout(() => {
      setCurrentImg(nextImage);
    }, 6000);

    return () => {
      clearInterval(timeout);
    };
  }, [images, currentImg]);



  return (
    <div className={styles.landing}>
      <img 
        src={currentImg} 
        alt="landingImage"
      ></img>
      <h1>Shop For:</h1>
      <div
        id={styles.trendContainer}
      >
        {trendingList.map((trend, index) => (
          <p 
          key={index}
          >
            <a
              className={styles.trend}
              onClick={(e) => setSearchQuery(e.target.innerHTML)}
            >{trend[0].toUpperCase() + trend.slice(1)}</a>
          </p>
        ))}
      </div>
    </div>
  )
}

export default Landing