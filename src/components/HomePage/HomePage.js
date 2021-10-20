import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchGetHomeTrending } from '../fetch/fetch';

export default function HomePage() {
  const [fetchGetHome, setFetchGetHome] = useState(null);

  const baseSource = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetchGetHomeTrending().then(setFetchGetHome);
  }, []);

  return (
    <>
      <ul className="ImageGallery">
        {fetchGetHome?.data.results.map(e => {
          return (
            <li className="ImageGalleryItem" key={e.id}>
              <NavLink to={{ pathname: `movie/${e.id}`, state: 'fromHome' }}>
                <h1 className="Searchbar ">{e.original_title || e.name}</h1>
                <img
                  src={baseSource + e.backdrop_path}
                  alt=""
                  className="ImageGalleryItem-image"
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// state: location.pathname,
