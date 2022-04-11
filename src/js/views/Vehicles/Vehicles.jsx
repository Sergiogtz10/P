import React from "react";
import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Loading from "../../component/Loading.jsx";
import { getVehicle } from "../../Service/Vehicles.js";

import "./Vehicles.css"

const Vehicles = () => {
const {id} = useParams();
    const {store , actions } = useContext(Context);
    const [loading, setLoading] = useState(false); 
    
      const getVehicle_Info = async () => {
        try {
            setLoading(true);
            const response = await getVehicle(id);
            const data = await response.json();
            actions.setVehicles_Info(data.result.properties);

        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
	};
    

    useEffect(() => {
		getVehicle_Info();
    }, []); 

    return(
    <>
    <div className="d-flex container mb-5">
        <img id="image" src="https://i.blogs.es/cc0667/force-awakens/450_1000.jpg"></img>
        <div className="ms-5">
        <h1 className="text-center text-warning mb-5">{ loading ? <Loading /> : store.Vehicles_info.model}</h1>
        <p>In addition to the human race, multiple types of extraterrestrial species are described, originating from the numerous planets and satellites that form said galaxy and that belong to the alliance of planets of the Galactic Republic.</p>
        </div>
    </div>
    <h3 className="text-center text-warning mb-4">Properties</h3>
    <hr />
    <div className="row text-center">
        <div className="col-2">Manufacturer</div>
        <div className="col-2">Cost</div>
        <div className="col-2">Cargo Capacity</div>
        <div className="col-2">Consumables</div>
        <div className="col-2">Passengers</div>
        <div className="col-2">Hyperdrive Rating</div>
    </div>
    <hr />
    <div className="row text-center  mb-5">
        <div className="col-2">{store.Vehicles_info.manufacturer}</div>
        <div className="col-2">{store.Vehicles_info.cost_in_credits}</div>
        <div className="col-2">{store.Vehicles_info.cargo_capacity}</div>
        <div className="col-2">{store.Vehicles_info.consumables}</div>
        <div className="col-2">{store.Vehicles_info.passengers}</div>
        <div className="col-2 mb-3">{store.Vehicles_info.hyperdrive_rating}</div>
        <hr />
    </div>
    
    </>
    );
}

export default Vehicles ;