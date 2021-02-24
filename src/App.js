import React, { useState } from "react";

import "./App.css";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import Card from "./components/Card/Card";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState(null);
  const [repo, setRepo] = useState(null);

  const searchHandler = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${value}`)
      .then((res) => setUser(res.data));
  };

  const fetchUserRepoHandler = () => {
    axios
      .get(`https://api.github.com/users/${value}/repos`)
      .then((res) => setRepo(res.data));
  };

  return (
    <div className='container'>
      <h2>Github Repository</h2>
      <form onSubmit={(event) => searchHandler(event)}>
        <Input value={(event) => setValue(event.target.value)} />
        <Button>Submit</Button>
      </form>
      {user && (
        <Card
          image={user.avatar_url}
          name={user.name}
          bio={user.bio}
          click={() => fetchUserRepoHandler()}
          repository={repo}
        />
      )}
    </div>
  );
};

export default App;
