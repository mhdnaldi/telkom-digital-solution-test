import React from "react";
import "./Card.css";

const card = (props) => {
  return (
    <div className='main-card'>
      <img src={props.image} alt='' />
      <div className='info'>
        <h3>{props.name}</h3>
        <p>{props.bio}</p>
      </div>
    </div>
  );
};

export default card;
