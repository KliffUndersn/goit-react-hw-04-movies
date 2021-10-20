import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useLocation, useParams, Switch } from 'react-router-dom';
import { fetchMovieDetailsPage } from '../fetch/fetch';


const NavBar = () => {


    return (<>
        <NavLink to={`/`}>HomePage </NavLink >
        <NavLink to={`/movie`}> Search</NavLink >

    </>)
}

export default NavBar
