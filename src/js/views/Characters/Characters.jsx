import React from "react";
import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import Loading from "../../component/Loading.jsx";
import { getCharacter } from "../../Service/Character.js";

import "./Characters.css"

const Characters = () => {
    const {id} = useParams();
    const {store , actions } = useContext(Context);
    const [loading, setLoading] = useState(false); 
    
      const getCharacter_Info = async () => {
        try {
            setLoading(true);
            const response = await getCharacter(id);
            const data = await response.json();
            actions.setCharacter_Info(data.result.properties);

        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
	};
    

    useEffect(() => {
		getCharacter_Info();
    }, []); 

    return(
    <>
    <div className="d-flex container mb-5">
        <img id="image" src="https://i.blogs.es/cc0667/force-awakens/450_1000.jpg"></img>
        <div className="ms-5">
        <h1 className="text-center text-warning mb-5">{ loading ? <Loading /> : store.Character_info.name}</h1>
        <p>In addition to the human race, multiple types of extraterrestrial species are described, originating from the numerous planets and satellites that form said galaxy and that belong to the alliance of planets of the Galactic Republic.</p>
        </div>
    </div>
    <h3 className="text-center text-warning mb-4">Properties</h3>
    <hr />
    <div className="row text-center">
        <div className="col-2">Birth Year</div>
        <div className="col-2">Gender</div>
        <div className="col-2">Height</div>
        <div className="col-2">Mass</div>
        <div className="col-2">Skin Color</div>
        <div className="col-2">Eye Color</div>
    </div>
    <hr />
    <div className="row text-center  mb-5">
        <div className="col-2">{store.Character_info.birth_year}</div>
        <div className="col-2">{store.Character_info.gender}</div>
        <div className="col-2">{store.Character_info.height}</div>
        <div className="col-2">{store.Character_info.mass}</div>
        <div className="col-2">{store.Character_info.skin_color}</div>
        <div className="col-2 mb-3">{store.Character_info.eye_color}</div>
        <hr />
    </div>
    
    </>
    );
}

export default Characters;