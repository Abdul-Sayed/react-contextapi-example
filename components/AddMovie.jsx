import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext)
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = event => {
    setName(event.target.value);
  };
  const updatePrice = event => {
    setPrice(event.target.value);
  };
  const addMovie = event => {
    event.preventDefault();
    setMovies(prevMovies => [...prevMovies, {name: name, price: price}]);
  }

  return (
    <React.Fragment>
      <form onSubmit={addMovie}>
        <input type="text" name="name" onChange={updateName} />
        <input type="text" name="price" onChange={updatePrice} />
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
};

export default AddMovie;
