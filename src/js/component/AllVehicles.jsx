import React from "react";
import { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { getVehicles } from "../Service/Vehicles.js";
import Loading from "../component/Loading.jsx";
import Card from "../component/Card.jsx";

const AllVehicles = () => {
    const { store, actions } = useContext(Context); 
    const [loading, setLoading] = useState(false); 
    
    const getAllVehicles = () => {
        setLoading(true);
		getVehicles()
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				actions.setVehicles(data.results);
			})
			.catch((err) => {
				console.log(err);
			}).finally (() => {
                setLoading(false);
            });
	};

    useEffect(() => {
		getAllVehicles();
	}, []);

    return (
        <div>
            <h1 className="ms-3 text-warning mb-4">Vehicles</h1>
            <div className="container-fluid">
                 <div className="row flex flex-nowrap overflow-scroll"> 
                    { loading ? <Loading /> 
                    : store.Vehicles.map((vehicle) => (
                        <Card
                            key={vehicle.uid}
                            id={parseInt(vehicle.uid)}
                            name={vehicle.name}
                            type="Vehicles"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllVehicles ;