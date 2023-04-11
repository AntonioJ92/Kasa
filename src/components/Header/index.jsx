import React from "react"
import { NavLink } from "react-router-dom"
import HeaderLogo from "../../assets/HeaderLogo.png"
import "../../styles/Header.css"

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img className="header-logo" src={HeaderLogo} alt="Logo du site" />
      </NavLink>
      <nav>
        <NavLink className="header-nav-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="header-nav-link" to="/Kasa/propos">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
