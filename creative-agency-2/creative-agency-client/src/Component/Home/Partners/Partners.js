import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import Partner from '../Partner/Partner';

const partners = [
    {
        img : slack
    },
    {
        img : google
    },
    {
        img : uber
    },
    {
        img : netflix
    },
    {
        img : airbnb
    }
]
const Partners = () => {
    return (
        <section className="container py-5">
            <div className="row d-flex justify-content-center py-5">
                {
                    partners.map(partner => <Partner partner={partner}/>)
                }
            </div>
        </section>
    );
};

export default Partners;