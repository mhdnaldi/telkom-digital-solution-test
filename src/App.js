import React, { useState, useEffect } from "react";

import "./App.css";
import Input from "./components/Input/input";
import Button from "./components/Button/button";

const App = () => {
  const [value, setValue] = useState("");

  useEffect(() => {}, []);

  const searchHandler = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div className='container'>
      <h2>Github Repository</h2>
      <form onSubmit={(event) => searchHandler(event)}>
        <Input value={(event) => setValue(event.target.value)} />
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default App;
