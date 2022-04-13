import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "../../styles/index.css"


const Card = (props) =>{

return(
<div className="card text-black me-5 mb-3 " style={{"width": "18rem"}}>
  <img src="https://www.printpeppermint.com/es/contenido-de-wp/Subidos/2018/10/Art%C3%ADculo-StarWars-02.svg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={`/${props.type}/info/${props.id}`}>
      <button className="btn btn-warning">Learn more!</button>
    </Link>
  </div>
</div>
)};
Card.propTypes = {
  id: propTypes.number,
  type: propTypes.string,
  name: propTypes.string,
}

export default Card;