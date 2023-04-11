import React, { useState } from "react"
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
      {isOpen && <div className="description-collapse">{content}</div>}
    </div>
  )
}

export default Collapse
