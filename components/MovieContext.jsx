// import useState, and createContext in context files
import React, {useState, createContext} from 'react';

// Create a Context for movie feature's state
export const MovieContext = createContext();

// declare state object as useState
export const MovieProvider = (props) => {

  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2566124
    },
    {
      name: "Inception",
      price: "$10",
      id: 23524
    }
  ]); 

  return (
    // pass state as value to all children components of MovieProvider
    <React.Fragment>
        <MovieContext.Provider value={[movies, setMovies]}>
          {props.children}
        </MovieContext.Provider>
    </React.Fragment>
  );
} 