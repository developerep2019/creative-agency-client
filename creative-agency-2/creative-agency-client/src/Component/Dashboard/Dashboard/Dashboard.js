import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';
import SideBar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const { login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;

    const customStyle = {
        backgroundColor: '#F4F7FC',
        height: '825px'
    }
    return (
        <section className="container-fluid">
            <NavbarDashboard />
            <div className="row">
                <div className="col-12 col-md-2">
                    <SideBar />
                </div>
                <div style={customStyle} className="col-12 col-md-10">
                    <div className="service-list mt-4">
                        <h2>Welcome to dashboard {loggedInUser.name}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;