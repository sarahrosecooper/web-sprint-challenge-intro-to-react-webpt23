// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = ({ character }) => {
  console.log(character);
  return (
    <div>
      name: {character.name}
      <br></br>
      status: {character.status}
      <br></br>
      <img src={character.image} alt="image of rick and morty character" />
      <br></br>
      gender: {character.gender}
      <br></br>
      species: {character.species}
      <br></br>
    </div>
  );
};

export default Character;
