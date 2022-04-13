import React from "react";
import { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { getPlanets } from "../Service/Planets.js";
import Loading from "../component/Loading.jsx";
import Card from "../component/Card.jsx";


const AllPlanets = () => {
    const { store, actions } = useContext(Context); 
    const [loading, setLoading] = useState(false); 
    
    const getAllPlanets = () => {
        setLoading(true);
		getPlanets()
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				actions.setPlanets(data.results);
			})
			.catch((err) => {
				console.log(err);
			}).finally (() => {
                setLoading(false);
            });
	};

    useEffect(() => {
		getAllPlanets();
	}, []);
    return(
    <div>
        <h1 className="ms-3 text-warning mb-4">Planets</h1>
            <div className="container-fluid">
                <div className="row flex flex-nowrap overflow-scroll"> 
                { loading ? <Loading /> 
                : store.Planets.map((planet) => (
                    <Card
                        key={planet.uid}
                        id={parseInt(planet.uid)}
                        name={planet.name}
                        type="Planets"
                    />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllPlanets;