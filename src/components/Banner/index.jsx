import React from "react"
import "../../styles/Banner.css"

function Banner({ picture, text }) {
  return (
    <div className="banner">
      <img className="banner-cover" src={picture} alt="Bannière" />
      <div className="banner-filter"></div>
      <span className="banner-text">{text}</span>
    </div>
  )
}

export default Banner
