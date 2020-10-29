import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './headerMain.css';

const HeaderMain = () => {
    return (
        <section className="header-main row align-items-center">
            <div className="col-md-5">
                <h1 className="creative-header">
                Let’s Grow Your <br />
                Brand To The <br />
                Next Level
            </h1>
                <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button className="btn px-5 btn-dark">Hire Us</button>
            </div>
            <div className="col-md-7">
                <img className="frame img-fluid" src={frame} alt="" />
            </div>
        </section>
    );
};

export default HeaderMain;