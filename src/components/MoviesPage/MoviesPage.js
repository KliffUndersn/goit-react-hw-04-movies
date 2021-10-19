import { useState, useEffect } from 'react';
// import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { fetchMovieCasts } from '../fetch/fetch';


export default function MoviesPage () {

  const [fetchMoviesPage, setFetchMoviesPage] = useState(null);
  const baseSource = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    fetchMovieCasts().then(setFetchMoviesPage)
  }, []);
 

  // console.log(fetchMovieDetails && fetchMovieDetails?)

  return (
    
    <>
    <p>credits</p>
    </>
  );
}