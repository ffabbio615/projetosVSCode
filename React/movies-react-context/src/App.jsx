import './App.scss'
import Header from './view/Header';
import { MovieProvider } from './MovieContext';
import MovieList from './component/MovieList';
import React from 'react';

const App = ()  => {

  return (
    <>
      <MovieProvider>
        <Header />
        <MovieList />
      </MovieProvider>
    </>
  );
};

export default App
