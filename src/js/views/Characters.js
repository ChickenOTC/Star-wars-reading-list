import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom"

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
	const [currentCharacter, setCurrentCharacter] = useState(null);
	useEffect(async () => {
		setCurrentCharacter(await actions.getCharacterByID(params.characterID));
	}, []);
  return (
    <div>
      <h1>Characters</h1>
      {!store.characters ? <h1>loading</h1> : store.characters.map((character, i) => {
          return(
              <div key = {character.uid}>
                  <Link to={`character/${character.uid}`}><p>{character.name}</p></Link>
              </div>
          )
      })}
    </div>
  );
};
