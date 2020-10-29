import React from 'react';
import NavbarDashboard from '../../NavbarDashboard/NavbarDashboard';
import SideBar from '../../Sidebar/Sidebar';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    const style = {
        backgroundColor: '#F4F7FC',
        height: '88vh'
    }

    return (
        <section className="container-fluid">
            <NavbarDashboard/>
            <div className="row">
                <div className="col-md-2">
                    <SideBar/>
                </div>
                <div className="col-md-10" style={style}>
                <ReviewForm/>
                </div>
            </div>
        </section>
    );
};

export default Review;