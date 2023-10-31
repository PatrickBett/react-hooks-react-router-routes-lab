import React from "react";
import { directors } from "../data"; // Import movie data from Data.js

function Directors(){
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        
        <div key={index}>
          
          <h2>{director.name}</h2>
          
          <p>Movies: {director.movies.map((movie,index)=>(<li key={index}>{movie}</li>))}</p>
        </div>
      ))}
    </div>
  );
};

export default Directors;
