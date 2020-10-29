import React from 'react';
import { Link } from 'react-router-dom';
import './sevice.css';
import gif from '../../../images/spin.gif';


const Service = ({ service }) => {
    return (
        <div className="col-md-4 my-3">
            <div className="service-card text-center">
                <Link to="/addOrder" className="nav-link">
                    {
                        service.length === 0 && <div><img src={gif} alt="" /></div>
                    }
                    {
                        service.image ? <img className="card-img" src={service.img} alt="" />
                            :
                            <img style={{ width: '75px' }} src={service.img} alt="" />
                    }
                    <h5 className="my-3 service-title"> {service.title} </h5>
                    <p className="text-secondary"> {service.description} </p>
                </Link>
            </div>
        </div>
    );
};

export default Service;