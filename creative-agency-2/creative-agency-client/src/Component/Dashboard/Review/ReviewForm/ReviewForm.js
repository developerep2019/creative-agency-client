import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';



const OrderForm = () => {
    const { login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const [newReview, setNewReview] = useState({});

    const handleBlur = e => {
        const aboutReview = { ...newReview, img: loggedInUser.img };
        aboutReview[e.target.name] = e.target.value;
        setNewReview(aboutReview)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        alert('thanks for your review');

    }
    return (
        <div className="col-md-6 mt-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="name" className="form-control" name="name" onBlur={handleBlur} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Your Company Name</label>
                    <input type="text" className="form-control" name="company" onBlur={handleBlur} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Your Designation</label>
                    <input type="text" className="form-control" name="position" onBlur={handleBlur} />
                </div>
                <div className="form-group">
                    <textarea id="w3review" name="details" rows="5" cols="50" placeholder="Write Your Review" onBlur={handleBlur} />
                </div>
                <input type="submit" value="Add to Services" className="btn btn-success" />
            </form>
        </div>
    );
};

export default OrderForm;