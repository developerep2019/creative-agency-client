import React from 'react';
import CopyRightText from '../CopyRightText/CopyRightText';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container pt-5 mx-auto row">
                <div className="col-md-6">
                    <h2 className="h2-header">Let us handle your <br /> project, professionally.</h2>
                    <p className="mt-4">With well written codes, we build amazing apps for all <br /> platforms, mobile & web apps in general.</p>
                </div>
                <div className="col-md-6">
                    <input className="form-control p-4 mb-3" type="text" placeholder="Your Email Address*" required />
                    <input className="form-control p-4 mb-3" type="text" placeholder="Your Name / Company*" required />
                    <textarea className="form-control p-4" rows="5" placeholder="Your Message" />
                    <button className="btn submit px-5 mt-4 btn-dark">Send</button>
                </div>
            </div>
            <div className="mt-5">
                <CopyRightText />
            </div>
        </footer>
    );
};

export default Footer;