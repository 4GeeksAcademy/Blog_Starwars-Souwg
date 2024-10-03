import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const CharacterCard = ({uid, name}) => {
	return(
		<>
		<div className="container d-flex ">
			<div className="card" style={{ width: '20rem', }}>
  				<img src="..." className="card-img-top" alt=""/>
  				<div className="card-body">
    				<h5 className="card-title">{name}</h5>
    				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  				</div>
  				<ul className="list-group list-group-flush">
    				<li className="list-group-item">{uid}</li>
    				<li className="list-group-item">A second item</li>
    				<li className="list-group-item">A third item</li>
  				</ul>
 				<div className="card-body">
    				<Link to={`/character/${uid}`} className="card-link">Learn more!</Link>
    				<a href="#" className="card-link">Another link</a>
  				</div>
			</div>		
		</div>
		</>
	)
};

