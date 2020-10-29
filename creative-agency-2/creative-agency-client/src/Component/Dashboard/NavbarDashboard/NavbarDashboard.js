import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const NavbarDashboard = () => {
    const { login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="#" to="/"><img src={logo} alt="" style={{width : '100px'}}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" href="#"  to="/dashboard">{loggedInUser.name}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarDashboard;