import React, { useState } from "react"
import "../../styles/Slideshow.css"
import Arrow from "../../assets/Arrow.svg"

function Slideshow({ pictures }) {
  let [pictureDisplay, setPictureDisplay] = useState(0)
  let picturesNumber = pictures.length

  const previousPicture = () => {
    if (pictureDisplay === 0) {
      setPictureDisplay(picturesNumber - 1)
    } else {
      setPictureDisplay(pictureDisplay - 1)
    }
    return setPictureDisplay
  }

  const nextPicture = () => {
    if (pictureDisplay === picturesNumber - 1) {
      setPictureDisplay((picturesNumber = 0))
    } else {
      setPictureDisplay(pictureDisplay + 1)
    }
    return setPictureDisplay
  }

  return (
    <React.StrictMode>
      <div className="slideshow">
        {picturesNumber > 1 && (
          <img
            className="arrow arrow-left"
            src={Arrow}
            alt="Contenu précedént"
            onClick={previousPicture}
          />
        )}
        {pictures.map((picture, index) => {
          return (
            <img
              key={index}
              className={
                index === pictureDisplay
                  ? "slideshow-picture actif"
                  : "slideshow-picture"
              }
              src={picture}
              alt="Logement"
            />
          )
        })}
        {picturesNumber > 2 ? (
          <span className="current-number">
            {pictureDisplay + 1}/{picturesNumber}
          </span>
        ) : null}
        {picturesNumber > 1 && (
          <img
            className="arrow arrow-right"
            src={Arrow}
            alt="Contenu suivant"
            onClick={nextPicture}
          />
        )}
      </div>
    </React.StrictMode>
  )
}

export default Slideshow
