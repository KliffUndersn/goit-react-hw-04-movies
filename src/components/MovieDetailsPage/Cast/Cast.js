import { fetchMovieCasts } from "../../fetch/fetch";
import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useLocation,useParams,Switch } from 'react-router-dom';

const Cast = () => {
    const [fetchCasts, setFetchCasts] = useState(null);
    const params = useParams()
    const baseSource = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetchMovieCasts(params.id).then(setFetchCasts)
      }, []);
    
    console.log(fetchCasts?.data.cast)
          
    return (
        <>
        {fetchCasts && fetchCasts.data.cast.map(i=>{
            return (<li key={i.id}>
                         <h5>{i.name}</h5>
                        <p>{i.known_for_department}</p>
                       <img src={baseSource+i.profile_path}/>
                   </li>)
        })}
        </>
    )
}

export default Cast