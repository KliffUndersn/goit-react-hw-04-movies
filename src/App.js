import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import NavBar from './components/NavBar/NavBar';
import routes from './routes';

function App() {
  const { homePage, moviesPage, movieDetailsPage } = routes;
  return (
    <>
      <NavBar />

      <Switch>
        <Route path={homePage} exact>
          <HomePage />
        </Route>

        <Route path={moviesPage} exact>
          <MoviesPage />
        </Route>

        <Route path={movieDetailsPage}>
          <MovieDetailsPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
