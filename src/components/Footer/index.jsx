import { NavLink } from "react-router-dom"
import FooterLogo from "../../assets/FooterLogo.png"
import "../../styles/Footer.css"

function Footer() {
  return (
    <footer>
      <NavLink to="/" className="link">
        <img className="footer-logo" src={FooterLogo} alt="Logo du site" />
      </NavLink>
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
