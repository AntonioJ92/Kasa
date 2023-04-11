import React from "react"
import { useParams, Navigate } from "react-router-dom"
import "../../styles/FicheLogement.css"
import Slideshow from "../../components/Slideshow"
import { Data } from "../../Data/logements.jsx"
import FullStar from "../../assets/FullStar.svg"
import EmptyStar from "../../assets/EmptyStar.svg"
import Collapse from "../../components/Collapse"
import Tag from "../../components/Tag"

function FicheLogement() {
  const id = useParams()
  const ficheLogement = Data.find((logement) => logement.id === id.key)

  // Tags
  const tagsLogement = ficheLogement?.tags.map((tags, index) => {
    return <Tag key={index} tag={tags} />
  })

  // Evaluation
  let noteLogement = []
  let etoileComplete = true
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(ficheLogement?.rating)) {
      etoileComplete = false
    }
    if (etoileComplete === true) {
      noteLogement.push(
        <img
          key={index}
          className="star"
          src={FullStar}
          alt={`${ficheLogement?.rating}/5`}
        />
      )
    } else {
      noteLogement.push(
        <img
          key={index}
          className="star"
          src={EmptyStar}
          alt={`${ficheLogement?.rating}/5`}
        />
      )
    }
  }

  // Équipements
  const equipementsLogement = ficheLogement?.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>
    }
  )

  return (
    <div>
      {ficheLogement ? (
        <div className="fiche">
          <Slideshow pictures={ficheLogement?.pictures} />
          <div className="logement-host">
            <div className="logement-title-location">
              <span className="logement-title">{ficheLogement?.title}</span>
              <span className="logement-location">
                {ficheLogement?.location}
              </span>
              <div className="tags">{tagsLogement}</div>
            </div>
            <div className="logement-hostID-rating">
              <div className="logement-hostID">
                <span className="logement-hostName">
                  {ficheLogement?.host.name}
                </span>
                <img
                  className="logement-hostPicture"
                  src={ficheLogement?.host.picture}
                  alt="Hôte du logement"
                />
              </div>
              <div className="rating">{noteLogement}</div>
            </div>
          </div>
          <div className="logement-description-stuff">
            <Collapse
              title="Description"
              content={ficheLogement?.description}
            />
            <Collapse title="Équipements" content={equipementsLogement} />
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </div>
  )
}

export default FicheLogement
