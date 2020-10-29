import React from 'react';
import './portfolio.css'
import Carousel from '../Carousel/Carousel';

const Portfolio = () => {
    return (
        <section className="portfolio text-center">
            <div className="container">
                <h2 className="text-white mb-5">Here are some of<span className="brand-color"> our work</span></h2>
                <Carousel/>
            </div>
        </section>
    );
};

export default Portfolio;