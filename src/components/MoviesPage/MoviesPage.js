import { useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { fetchSearchMoviesPage } from '../../fetch/fetch';
import routes from '../../routes';

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

  const handleSubmit = e => {
    e.preventDefault();
    history.push({
      pathname: location.pathname,
      search: `search=${searchValue}`,
    });
    console.log(history);
    setSearchQuery(searchValue);
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

      <ul className="ImageGallery">
        {fetchMoviesPage?.data.results.map(e => {
          return (
            <li className="ImageGalleryItem" key={e.id}>
              <NavLink
                to={{
                  pathname: `${routes.moviesPage}/${e.id}`,
                  state: location.pathname,
                  search: `search=${searchValue || searchCheck}`,
                }}
              >
                <h1 className="Searchbar ">{e.original_title || e.name}</h1>

                <img src={baseSource + e.backdrop_path} alt="" />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
