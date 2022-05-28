import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Vehicles = () => {
    useEffect(() => {
        actions.loadVehicles()
    }, [])
    const { store, actions } = useContext(Context);
    console.log(store)
    return (
        <div className = "d-flex overflow">
            {!store.vehicles ? <h1>loading </h1> : store.vehicles.map((vehicle, i) => {
                return (
                    <div key={vehicle.uid}>
                        <img style={{height: 300, width: 300}} src="https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C50%2C1600%2C800" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary"><Link style={{color: 'white'}} to={`vehicle/${vehicle.uid}`}><p>{vehicle.name}</p></Link></button>
                                <button className="heart" variant="warning" onClick={() => actions.favoritesInfo(vehicle.name)}><i className="far fa-heart" /></button>
                            </div>
                            
                    </div>
                );
            })}
        </div>)}