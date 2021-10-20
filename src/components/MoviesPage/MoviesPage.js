import { useState, useEffect } from 'react';
import {
  NavLink,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { fetchSearchMoviesPage } from '../fetch/fetch';

export default function MoviesPage() {
  const [fetchMoviesPage, setFetchMoviesPage] = useState(null);
  const baseSource = 'https://image.tmdb.org/t/p/w500';
  const [searchValue, setSearchValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();
  const location = useLocation();
  const searchCheck = new URLSearchParams(location.search).get('search');
  useEffect(() => {
    console.log(searchCheck);
    if (searchCheck) {
      setSearchQuery(searchCheck);
    }
    if (searchQuery) {
      fetchSearchMoviesPage(searchQuery).then(setFetchMoviesPage);
    }
  }, [searchQuery]);

  // useEffect(()=>{
  // },[])

  const handleSubmit = e => {
    e.preventDefault();
    history.push({
      pathname: location.pathname,
      search: `search=${searchValue}`,
    });
    console.log(history);
    setSearchQuery(searchValue);
    // setSearchValue("")
    // console.log(history)
  };

  const handleChange = e => {
    return setSearchValue(e.target.value);
  };

  return (
    <>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search film"
          onChange={handleChange}
          value={searchValue}
        />
      </form>

      <ul className="cardList">
        {fetchMoviesPage?.data.results.map(e => {
          return (
            <li className="card" key={e.id}>
              <NavLink
                to={{
                  pathname: `movie/${e.id}`,
                  state: location.pathname,
                  search: `search=${searchValue || searchCheck}`,
                }}
              >
                {e.original_title || e.name}
              </NavLink>
              {/* <img src={baseSource+e.backdrop_path}/> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}
