import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';



const OrderForm = () => {
    const { login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const [newServices, setNewServices] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const aboutServices = { ...newServices };
        aboutServices[e.target.name] = e.target.value;
        setNewServices(aboutServices);
        console.log(newServices);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()

        if (newServices.name === undefined) {
            newServices.name = loggedInUser.name;
        }
        if (newServices.email === undefined) {
            newServices.email = loggedInUser.email;
        }
        formData.append('file', file);
        formData.append('name', newServices.name);
        formData.append('email', newServices.email);
        formData.append('type', newServices.type);
        formData.append('details', newServices.details)

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Thanks for your order. We will Contact You Very Soon');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="col-md-6 mt-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="name" className="form-control" name="name" onBlur={handleBlur} defaultValue={loggedInUser.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="email" className="form-control" name="email" onBlur={handleBlur} defaultValue={loggedInUser.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Project Type</label>
                    <input type="text" className="form-control" name="type" onBlur={handleBlur} />
                </div>
                <div className="form-group">
                    <textarea id="w3review" name="details" rows="5" cols="50" placeholder="Type your Project Details" onBlur={handleBlur} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input type="file" className="form-control" onChange={handleFileChange} />
                </div>
                <input type="submit" value="Add to Services" className="btn btn-success" />
            </form>
        </div>
    );
};

export default OrderForm;