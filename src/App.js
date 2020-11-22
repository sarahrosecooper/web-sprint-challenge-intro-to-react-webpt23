import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";

const TestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-transform: lowercase;
  background-image: url("https://image.freepik.com/free-vector/space-background-with-abstract-shape-stars_189033-30.jpg");
  color: white;
  text-align: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        return setCharacters(response.data.results);
      })
      .catch((error) => console.log("Uh-oh, we have an error!", error));
  }, []);

  console.log(characters);

  return (
    <TestContainer>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </TestContainer>
  );
};

export default App;
