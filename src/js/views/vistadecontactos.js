import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";


export const VistaDeContactos = () => {

    const { store, action } = useContext(Context)



    return (
        <div className="contenedor-de-contactos">
            <h1>Agenda de Juan</h1>
            <Link to="/agregar" style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-success" onClick={() => action.agregarContacto() } >Add new contact</button>
            </Link>
            {store.contact.map((contact) => {
                return (
                    <ContactCard contact={contact} key={contact.id} />
                )
            })}
        </div>
    )
}
