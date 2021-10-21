import { useState, useEffect } from 'react';
import {
  NavLink,
  Route,
  useRouteMatch,
  useLocation,
  useParams,
  Switch,
  useHistory,
} from 'react-router-dom';
import { fetchMovieDetailsPage } from '../../fetch/fetch';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import routes from '../../routes';

export default function MovieDetailsPage() {
  const [fetchMovieDetails, setFetchMovieDetails] = useState(null);
  const baseSource = 'https://image.tmdb.org/t/p/w500';
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    fetchMovieDetailsPage(params.id).then(setFetchMovieDetails);
  }, []);

  const searchCheck = new URLSearchParams(location.search).get('search');
  const userPath = history?.location?.state;

  const goBack = () => {
    if (location.state === 'fromHome') {
      history.push('/');
    }
    if (searchCheck) {
      if (!userPath) {
        history.push({ pathname: '/movie', search: `search=${searchCheck}` });
      }
      history.push({ pathname: userPath, search: `search=${searchCheck}` });
    } else {
      history.push('/');
    }
  };

  return (
    <>
      <button type="button" onClick={goBack} className="Button">
        Go back
      </button>
      {fetchMovieDetails?.data && (
        <div key={1}>
          <img alt="" src={baseSource + fetchMovieDetails.data.backdrop_path} />
          <h1>
            {fetchMovieDetails.data.original_title ||
              fetchMovieDetails.data.name}{' '}
            ({fetchMovieDetails.data.release_date})
          </h1>
          <p>User vote : {fetchMovieDetails.data.vote_average}</p>
          <h2>Overview:</h2> <p>{fetchMovieDetails.data.overview}</p>
          <h3>Genres</h3>
          <p>
            {fetchMovieDetails.data.genres.map(e => {
              return <span key={e.id}> {e.name} </span>;
            })}
          </p>
        </div>
      )}
      {
        <div key={2}>
          <p>Additional information</p>
          <ul>
            <NavLink
              to={{
                pathname: `${url}${routes.cast}`,
                search: searchCheck && `search=${searchCheck}`,
              }}
            >
              <li>Cast</li>
            </NavLink>
            <NavLink
              to={{
                pathname: `${url}${routes.reviews}`,
                search: searchCheck && `search=${searchCheck}`,
              }}
            >
              <li>Reviews</li>
            </NavLink>
          </ul>
        </div>
      }
      <Switch>
        <Route path={`${path}${routes.cast}`}>
          <Cast />
        </Route>
        <Route path={`${path}${routes.reviews}`}>
          <Reviews />
        </Route>
      </Switch>
    </>
  );
}
