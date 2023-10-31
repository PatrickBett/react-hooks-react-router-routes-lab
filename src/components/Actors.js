import React from "react";
import { actors } from "../data"; // Import movie data from Data.js

function Actors(){
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        
        <div key={index}>
          
          <h2>{actor.name}</h2>
          
          <p>Movies: {actor.movies.map((movie,index)=>(<li key={index}>{movie}</li>))}</p>
        </div>
      ))}
    </div>
  );
};

export default Actors;
