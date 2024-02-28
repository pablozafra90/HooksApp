import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">

            <Link className="navbar-brand" to="/">useContext</Link>

            <div className="collapse navbar-collapse show" id="navbarNav">
                <ul className="navbar-nav">

                    <NavLink className={ ({ isActive }) =>  `navlink ${ isActive ? 'active' : '' }`} to="/">
                        Home
                    </NavLink>

                    <NavLink className={ ({ isActive }) =>  `navlink ${ isActive ? 'active' : '' }`} to="/login">
                        Login
                    </NavLink>

                    <NavLink className={ ({ isActive }) =>  `navlink ${ isActive ? 'active' : '' }`} to="/about">
                        About
                    </NavLink>

                </ul>
            </div>
        </div>
        </nav>
  )
}
