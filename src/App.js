import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";

// --------------- STYLED COMPONENTS ------------------

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-transform: lowercase;
  background-image: url("https://image.freepik.com/free-vector/space-background-with-abstract-shape-stars_189033-30.jpg");
  color: white;
  text-align: center;
`;

const H1Div = styled.div`
  background-image: url("https://www.impericon.com/media/impericon/header/entertainment/rick_and_morty/20190325_rick_desktop.jpg");
  min-height: 200px;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);

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
    <div>
      <H1Div></H1Div>
      <MainContainer>
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </MainContainer>
    </div>
  );
};

export default App;
