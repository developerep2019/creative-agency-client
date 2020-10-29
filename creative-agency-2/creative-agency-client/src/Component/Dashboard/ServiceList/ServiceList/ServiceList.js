import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import NavbarDashboard from '../../NavbarDashboard/NavbarDashboard';
import SideBar from '../../Sidebar/Sidebar';
import SingleService from '../SingleService/SingleService';
import './servicesList.css';

const ServiceList = () => {
    const { login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/singleOrder?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err))
    })
    return (
        <section className="container-fluid">
            <NavbarDashboard />
            <div className="row">
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div className="col-md-10" className="main">
                    <div className="row">
                    {
                     orders.map(order => <SingleService order={order} />)
                    }    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;