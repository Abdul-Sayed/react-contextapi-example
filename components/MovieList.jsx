import React, { useState, useContext } from "react";
import {MovieContext} from './MovieContext';
import Movie from "./Movie";

const MovieList = () => {

const [movies, setMovies] = useContext(MovieContext); 
  return (
    <React.Fragment>
      <ul>
        {movies.map(movie => (
          <li>
            <Movie name={movie.name} price={movie.price} key={movie.id} />
          </li>
        ))}
      </ul>

    </React.Fragment>
  );
};

export default MovieList;
