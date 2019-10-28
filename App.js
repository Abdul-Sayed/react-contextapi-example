import React from 'react';
import {MovieProvider} from './components/MovieContext';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';


const App = () => {
  // wrap all components of the movie feature in MovieProvider
  return (
    <React.Fragment>
      <MovieProvider>
        <Nav/>
        <MovieList/> 
        <AddMovie/>
      </MovieProvider>
    </React.Fragment>
  );
}

export default App;
