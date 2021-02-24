import React from "react";
import "./input.css";
const input = (props) => (
  <input type='text' onChange={props.value} placeholder='Search' />
);

export default input;
