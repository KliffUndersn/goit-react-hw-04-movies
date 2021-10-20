import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { fetchGetHomeTrending } from '../fetch/fetch';


export default function HomePage () {

  const [fetchGetHome, setFetchGetHome] = useState(null);

  // const baseSource = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    fetchGetHomeTrending().then(setFetchGetHome)
  }, []);
  
  return (
    
    <>
    <ul className="cardList" >
      {fetchGetHome?.data.results.map(
          (e)=>{
              return <li className="card"  key={e.id}> 
              <NavLink to={`movie/${e.id}`}>{e.original_title || e.name}</NavLink>
              {/* <img src={baseSource+e.backdrop_path}/> */}
              </li>})}  
    </ul>
    </>
  );
}