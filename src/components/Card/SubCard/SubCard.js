import React from "react";
import "./SubCard.css";
const subCard = (props) => (
  <div className='sub-card'>
    <h4>{props.name}</h4>
    <p>{props.date}</p>
  </div>
);

export default subCard;
