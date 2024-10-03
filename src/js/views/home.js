import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";

export const Home = () => {
	const {store, actions} = useContext(Context)
	return(
		<>
		<div className="container">
			<div className="title text-danger"><h2>Characters</h2></div>
		</div>
		<div className="container">
			{store.characters == null ? <h1>Cargando personajes</h1> :
			store.characters == false ? <h1 className="text-danger">No se han cargado los personajes</h1> :
			store.characters && store.characters.length > 0 && store.characters.map(item => {
				return(
					<CharacterCard key={item.url} uid={item.url.split("/")[5]} name={item.name}/>
				)
			})}
		</div>
		</>
	)
};
