import React from "react";
import "./Card.css";

import SubCard from "./SubCard/SubCard";

const card = (props) => {
  console.log(props.repository);
  let subCard = null;
  if (props.repository) {
    subCard = props.repository.map((el, i) => (
      <SubCard key={i} name={el.name} />
    ));
  }
  return (
    <React.Fragment>
      <div className='main-card' onClick={props.click}>
        <img src={props.image} alt='' />
        <div className='info'>
          <h3>{props.name}</h3>
          <p>{props.bio}</p>
        </div>
      </div>
      <div style={{ height: "200px", overflow: "scroll" }}>{subCard}</div>
    </React.Fragment>
  );
};

export default card;
