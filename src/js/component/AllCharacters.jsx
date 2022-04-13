import React from "react";
import { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { getCharacters } from "../Service/Character.js";
import Loading from "../component/Loading.jsx";
import Card from "../component/Card.jsx";

const allCharacters = () => {
    const { store, actions } = useContext(Context); 
    const [loading, setLoading] = useState(false); 
    
    const getAllCharacters = () => {
        setLoading(true);
		getCharacters()
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				actions.setCharacters(data.results);
			})
			.catch((err) => {
				console.log(err);
			}).finally (() => {
                setLoading(false);
            });
	};

    useEffect(() => {
		getAllCharacters();
	}, []);
    return(
    <div>
        <h1 className="ms-3 text-warning mb-4">Characters</h1>
            <div className="container-fluid">
                <div className="row flex flex-nowrap overflow-scroll"> 
                { loading ? <Loading /> 
                : store.Characters.map((character) => (
                    <Card
                        key={character.uid}
                        id={parseInt(character.uid)}
                        name={character.name}
                        type="Character"
                    />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default allCharacters;