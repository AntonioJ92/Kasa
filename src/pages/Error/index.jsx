import React from "react"
import "../../styles/Error.css"
import { NavLink } from "react-router-dom"

function Error() {
  return (
    <div className="ErrorWrapper">
      <h1 className="Error404">404</h1>
      <p className="ErrorOups">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="BackToHome">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  )
}

export default Error
