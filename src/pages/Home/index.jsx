import React from "react"
import Banner from "../../components/Banner/index"
import BannerHome from "../../assets/BannerHome.jpg"
import { Data } from "../../Data/logements"
import { NavLink } from "react-router-dom"
import Card from "../../components/Card/index"
import "../../styles/Home.css"

function Home() {
  return (
    <div className="home-bloc">
      <Banner picture={BannerHome} text="Chez vous, partout et ailleurs" />
      <div className="logements-bloc">
        {Data.map((logement) => (
          <NavLink key={logement.id} to={"/fiche-logement/" + logement.id}>
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              picture={logement.cover}
            />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Home
