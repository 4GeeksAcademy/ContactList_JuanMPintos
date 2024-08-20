import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const ContactCard = ({ contact }) => {

  const { store, actions } = useContext(Context);

  console.log(store.contact)
  return (
    <div className="contenedor_etiqueta">
      <div className="card mb-3" style={{ "maxWidth": "540px" }}>
        <div className="etiqueta row g-0">
          <div className="col-md-4">
            <img src="https://imgs.search.brave.com/UTrqqHMp0h2qrcKoNZuWKfa5NCtBhokLZjkPVRYu5ww/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9QcC1hdU04ZFBP/NUNOWnF3cUdkMVgt/aVJwVy1CSjc2UTlY/SnNpVTZYbjVMMnpN/NFVkOEUwQUtON2V3/NFVWSHN3ekNRPXcy/NDAtaDQ4MC1ydw.jpeg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="datos col-md-8">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text"><i className="fa-solid fa-location-dot">{contact.address}</i></p>
              <p className="card-text"><i className="fa-solid fa-mobile-screen">{contact.phone}</i></p>
              <p className="card-text"><i className="fa-solid fa-at">{contact.email}</i></p>
            </div>
            <div className="botones">
              <i id="lapiz" className="fa-solid fa-pen" onClick={() => actions.editarContacto(contact.id) }></i>
              <i id="cesto" className="fa-solid fa-trash" onClick={() => actions.borrarContacto(contact.id) }></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
