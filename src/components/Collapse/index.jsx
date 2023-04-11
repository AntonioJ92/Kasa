import React, { useState } from "react"
/*import PropTypes from "prop-types"*/
import Arrow from "../../assets/Arrow.svg"
import "../../styles/Collapse.css"

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse" id={`collapse-${title}`}>
      <div className="header-collapse">
        <div className="title-collapse">{title}</div>
        <span
          className={`arrow-collapse ${!isOpen}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Arrow} alt="Ouverture volet déroulant"></img>
        </span>
      </div>
      {
        // Si le Collapse est à TRUE alors il affichera la description
        isOpen && <div className="description-collapse">{content}</div>
      }
    </div>
  )
}

/*Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
}

Collapse.defaultProps = {
  title: "",
  content: "",
}*/

export default Collapse
