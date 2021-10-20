import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useLocation,useParams,Switch,useHistory } from 'react-router-dom';
import { fetchMovieDetailsPage } from '../fetch/fetch';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';


export default function MovieDetailsPage () {

  const [fetchMovieDetails, setFetchMovieDetails] = useState(null);
  const baseSource = "https://image.tmdb.org/t/p/w500"
  const history = useHistory()
  const location = useLocation()
  const params = useParams()
  const {path, url} = useRouteMatch()
  // console.log(path)
  useEffect(() => {
    fetchMovieDetailsPage(params.id).then(setFetchMovieDetails)
    // if(searchCheck){}
  }, []);
  

  const searchCheck = new URLSearchParams(location.search).get('search');
  const userPath = history?.location?.state;

  console.log(searchCheck)

  const goBack = () => {
    // if(!searchCheck){history.push({pathname:"/"})}
    if(searchCheck){history.push({pathname:userPath,search:`search=${searchCheck}`})}
  }
  

  return (
    //rout cast rout reviews
    <>
    <button type="button" onClick={goBack} >Go back</button>
    {fetchMovieDetails?.data && 
    <div key={1}>
      <img src={baseSource+fetchMovieDetails.data.backdrop_path}/>
      <h1>{fetchMovieDetails.data.original_title || fetchMovieDetails.data.name} ({fetchMovieDetails.data.release_date})</h1>
      <p>User vote : {fetchMovieDetails.data.vote_average}</p>
      <h2>Overview:</h2> <p>{fetchMovieDetails.data.overview}</p>
      <h3>Genres</h3>
      <p>{fetchMovieDetails.data.genres.map((e)=>{return <span key={e.id}> {e.name} </span>})}</p>
    </div>
    }
    {<div key={2}>
      <p>Additional information</p>
      <ul>
         <NavLink to={{pathname:`${url}/Cast`, search:`search=${searchCheck}`}}><li>Cast</li></NavLink>
         <NavLink to={`${url}/Reviews`}><li>Reviews</li></NavLink>
      </ul>
    </div>}
    <Switch>
      <Route path={`${path}/Cast`}>
        <Cast/>
      </Route>
      <Route path={`${path}/Reviews`}>
        <Reviews/>
      </Route>
    </Switch>
        </>
  );
}