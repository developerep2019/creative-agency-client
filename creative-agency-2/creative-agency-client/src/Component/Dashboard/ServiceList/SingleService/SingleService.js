import React from 'react';
import './singleService.css';

const SingleService = ({ order }) => {
    return (
        <div>
            { order.email &&
                <div className="col-md-5 mt-4">
                    <div className="card mb-4 detail-card">
                        <div className="d-flex justify-content-between">
                            <h6 className="card-title"> {order.type} </h6>
                            <p>Pending</p>
                        </div>
                        <p className="card-text text-secondary"><small> {order.details} </small></p>
                    </div>
                </div>
            }
            {order.email === '' && <h1>You Dont Placed any Order</h1>}
        </div>
    );
};

export default SingleService;