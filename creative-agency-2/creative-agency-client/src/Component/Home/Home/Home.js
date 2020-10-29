import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Partners from '../Partners/Partners';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Partners />
            <Services />
            <Portfolio/>
            <ClientsFeedback/>
            <Footer/>
        </div>
    );
};

export default Home;