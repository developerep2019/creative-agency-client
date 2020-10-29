import React from 'react';
import './header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
       <section className="header">
           <div className="container">
               <Navbar/>
               <HeaderMain/>
           </div>
       </section>
    );
};

export default Header;