import React from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";

function App() {
  return (
  <>
  <Switch>
  <Route path="/" exact>
    <HomePage />
  </Route>

  <Route path="/movie" exact>
    <MoviesPage />
  </Route>

  <Route path="/movie/:id">
    <MovieDetailsPage />
  </Route>

</Switch>
</>
)
}

export default App;
