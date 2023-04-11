import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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
        <Route exact path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/fiche-logement/:key" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
