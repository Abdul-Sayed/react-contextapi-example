import React, { useContext } from "react";
import {MovieContext} from './MovieContext'

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

const value = useContext(MovieContext); 
  return (
    <React.Fragment>
      <nav>
        <h3>My Favorite</h3>
        <p>List of Movies: {movies.length}</p>
      </nav>

    </React.Fragment>
  );
};

export default Nav;
