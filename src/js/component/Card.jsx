import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Card = () =>{
<div class="card mb-3" style={{"max-width": "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className="btn btn-warning">Learn more...</button>
      </div>
    </div>
  </div>
</div>
};
export default Card;