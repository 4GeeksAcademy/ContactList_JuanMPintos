import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const ContactCard = () => {

  const { store, actions } = useContext(Context);


  return (
    <div className="contenedor_etiqueta">
      <div className="card mb-3" style={{ "maxWidth": "540px" }}>
        <div className="etiqueta row g-0">
          <div className="col-md-4">
            <img src="https://imgs.search.brave.com/UTrqqHMp0h2qrcKoNZuWKfa5NCtBhokLZjkPVRYu5ww/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9QcC1hdU04ZFBP/NUNOWnF3cUdkMVgt/aVJwVy1CSjc2UTlY/SnNpVTZYbjVMMnpN/NFVkOEUwQUtON2V3/NFVWSHN3ekNRPXcy/NDAtaDQ4MC1ydw.jpeg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="datos col-md-8">
            <div className="card-body">
              <h5 className="card-title">Full Name</h5>
              <p className="card-text"><i className="fa-solid fa-location-dot">Address</i></p>
              <p className="card-text"><i className="fa-solid fa-mobile-screen">Phone Number</i></p>
              <p className="card-text"><i className="fa-solid fa-at">email@email.com</i></p>
            </div>
            <div className="botones">
              <i className="fa-solid fa-pen"></i>
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
