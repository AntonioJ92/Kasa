import React from "react"
import ReactDOM from "react-dom/client"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import { FontFamily } from "./utils/style/FontFamily"
import Home from "./pages/Home/index"
import Propos from "./pages/Propos/index"
import FicheLogement from "./pages/Fiche-Logement/index"
import Error from "./pages/Error/index"
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <FontFamily />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/Kasa" />} />
        <Route exact path="/Kasa" element={<Home />} />
        <Route path="/Kasa/propos" element={<Propos />} />
        <Route path="/Kasa/fiche-logement/:key" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
