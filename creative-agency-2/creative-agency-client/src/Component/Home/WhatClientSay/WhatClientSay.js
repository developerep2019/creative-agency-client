import React from 'react';
import './whatClientSay.css';

const Client = ({ feedback }) => {
    return (
        <div className="col-md-4 py-4">
            <div className="card p-4">
                <div className="mb-3 row">
                    <img className="feedback-img mr-2" src={feedback.img} alt="" />
                    <div>
                        <h6> {feedback.name} </h6>
                        <p> {feedback.position} </p>
                        <p className="companyName">{feedback.company}</p>
                    </div>
                </div>
                <p> {feedback.details} </p>
            </div>
        </div>
    );
};

export default Client;