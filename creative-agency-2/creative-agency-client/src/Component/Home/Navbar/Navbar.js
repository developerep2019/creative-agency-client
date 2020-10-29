import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import mainLogo from '../../../images/logos/logo.png';
import './navbar.css';
import firebase from "firebase/app";

const Navbar = () => {
    const { logged, login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const [isLogin, setIsLogin] = logged;

    const handleLogOut = () => {
        setLoggedInUser({});
        setIsLogin(false);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src={mainLogo} alt="" className="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link ml-4 py-3">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-4 py-3">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-4 py-3">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link ml-4 py-3">Dashboard</Link>
                        </li>
                        <div>
                            {
                                isLogin
                                    ? <li className="nav-item dropdown">
                                        <p className="nav-link ml-4 pt-3 dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {loggedInUser.name}
                                        </p>
                                        <div className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                                            <button className="dropdown-item" onClick={() => handleLogOut()}> Log out </button>
                                        </div>
                                    </li>
                                    : <Link to="/login">
                                        <button className=" btn btn-dark">Login</button>
                                    </Link>

                            }
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;