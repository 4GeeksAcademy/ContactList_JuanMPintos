import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";



export const VistaDeContactos = () =>{
    return (
        <div className="contenedor-de-contactos">
            <Link to="/agregar" style={{textDecoration: "none"}}>
            <button type="button" className="btn btn-success" >Add new contact</button>
            </Link>
            <ContactCard />
        </div>
        
    )
}