import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom"
import { Image } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

export const Character = (props) => {   
  const { store, actions } = useContext(Context);
  const params = useParams();
	const [currentCharacter, setCurrentCharacter] = useState(null);
	useEffect(async () => {
		setCurrentCharacter(await actions.getCharacterByID(params.characterID));
	}, []);
    //We always need to check for null, for all variables that are being set by and API call//
	if (currentCharacter === null || currentCharacter === undefined) {
		return <Image className="mx-auto d-block" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />;
	}
  return (
    <Container className=" therecipe text-center">
			<h1 className="cocktailRecipeCartaTitle">{currentCharacter.properties.name}</h1>

		
			<Row className="cocktailRecipeCartaTitleList">
				<Col>Ingredients</Col>
				<Col> Measurements</Col>
				<Col> Glassware </Col>
			</Row>
		
		</Container>
  );
};
