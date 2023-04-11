import React from "react"
import PropTypes from "prop-types"
import "../../styles/Card.css"

function Card({ id, title, picture }) {
  return (
    <div className="card" id={id}>
      <img className="card-picture" src={picture} alt="Logement" />
      <div className="card-filter"></div>
      <span className="card-title">{title}</span>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  id: "",
  title: "",
  picture: "",
}

export default Card
