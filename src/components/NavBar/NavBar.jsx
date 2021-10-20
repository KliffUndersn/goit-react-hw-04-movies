import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <h3 className="Navbar">
        <NavLink className="Navbar" to={`/`}>
          HomePage{' '}
        </NavLink>
        <NavLink className="Navbar" to={`/movie`}>
          {' '}
          Search
        </NavLink>
      </h3>
    </>
  );
};

export default NavBar;
