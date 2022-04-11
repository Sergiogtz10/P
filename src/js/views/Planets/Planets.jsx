import React from "react";
import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Loading from "../../component/Loading.jsx";
import { getPlanet } from "../../Service/Planets.js";

import "./Planets.css"

const Planets = () => {
    const {id} = useParams();
    const {store , actions } = useContext(Context);
    const [loading, setLoading] = useState(false); 
    
      const getPlanet_Info = async () => {
        try {
            setLoading(true);
            const response = await getPlanet(id);
            const data = await response.json();
            actions.setPlanet_Info(data.result.properties);

        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
	};
    

    useEffect(() => {
		getPlanet_Info();
    }, []); 

    return(
    <>
    <div className="d-flex container mb-5">
        <img id="image" src="https://i.blogs.es/cc0667/force-awakens/450_1000.jpg"></img>
        <div className="ms-5">
        <h1 className="text-center text-warning mb-5">{ loading ? <Loading /> : store.Planets_info.name}</h1>
        <p>In addition to the human race, multiple types of extraterrestrial species are described, originating from the numerous planets and satellites that form said galaxy and that belong to the alliance of planets of the Galactic Republic.</p>
        </div>
    </div>
    <h3 className="text-center text-warning mb-4">Properties</h3>
    <hr />
    <div className="row text-center">
        <div className="col-2">Diameter</div>
        <div className="col-2">Rotation period</div>
        <div className="col-2">Orbital period</div>
        <div className="col-2">Population</div>
        <div className="col-2">Climate</div>
        <div className="col-2">Gravity</div>
    </div>
    <hr />
    <div className="row text-center  mb-5">
        <div className="col-2">{store.Planets_info.diameter}</div>
        <div className="col-2">{store.Planets_info.rotation_period}</div>
        <div className="col-2">{store.Planets_info.orbital_period}</div>
        <div className="col-2">{store.Planets_info.population}</div>
        <div className="col-2">{store.Planets_info.climate}</div>
        <div className="col-2 mb-3">{store.Planets_info.gravity}</div>
        <hr />
    </div>
    
    </>
    );
}

export default Planets;