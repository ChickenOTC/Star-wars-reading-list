import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export const Characters = () => {
    useEffect(() => {
        actions.loadCharacters()
    }, [])
    const { store, actions } = useContext(Context);
    console.log(store)
    return (
        <div className = "d-flex overflow">
            {!store.characters ? <h1>loading </h1> : store.characters.map((character, i) => {
                return (
                    <div key={character.uid}>
                        <img style={{height: 300, width: 300}} src="https://cdn.vox-cdn.com/thumbor/632XKu70aaOQyRle6NDbklUR9b8=/85x0:1014x619/920x613/filters:focal(85x0:1014x619):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/12771259/ea_star_wars_darth_vader.0.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title" style ={{color: 'white'}}>{character.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary"><Link style={{color: 'white'}} to={`character/${character.uid}`}><p>{character.name}</p></Link></button>
                                <button className="heart" variant="warning" onClick={() => actions.favoritesInfo(character.name)}><i className="far fa-heart" /></button>
                            </div>
                            
                    </div>
                );
            })}
        </div>)
};
