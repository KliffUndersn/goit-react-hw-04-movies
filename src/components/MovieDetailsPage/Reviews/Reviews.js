import { fetchMovieReviws } from "../../fetch/fetch";
import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useLocation,useParams,Switch } from 'react-router-dom'

const Reviews = () => {
    const [fetchReviws, setFetchReviws] = useState(null);
    const params = useParams()
    const baseSource = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetchMovieReviws(params.id).then(setFetchReviws)
      }, []);
    
    console.log(fetchReviws?.data.results.map(i=>i.content))
          
    return (
        <>
        {fetchReviws && fetchReviws.data.results.map(i=>{
            return (<div><h6>Expert review : </h6> <p>{i.content}</p></div>)
        })}
        </>
    )  
}

export default Reviews