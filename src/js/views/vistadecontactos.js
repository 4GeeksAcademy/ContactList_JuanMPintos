import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard";
import { Context } from "../store/appContext";



export const VistaDeContactos = () =>{
    return (
        <div className="contenedor-de-contactos">
            <p>hello world</p>
            <ContactCard className="primer_contacto"/>
            <ContactCard className="segundo_contacto" />
            <ContactCard className="tercer_contacto" />
            <ContactCard className="cuarto_contacto" />
        </div>
    )
}