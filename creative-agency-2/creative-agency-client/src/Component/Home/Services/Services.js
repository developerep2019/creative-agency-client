import React from 'react';
import articleImg from '../../../images/icons/article.png';
import webDesignImg from '../../../images/icons/web.png';
import webDevImg from '../../../images/icons/webdev.png';
import Service from '../Service/Service';

const serviceData = [
    {
        title: 'Article Writing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus id mollitia maiores ipsa tempora nemo deleniti atque iste error.',
        img: articleImg

    },
    {
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus id mollitia maiores ipsa tempora nemo deleniti atque iste error.',
        img: webDesignImg

    },
    {
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus id mollitia maiores ipsa tempora nemo deleniti atque iste error.',
        img: webDevImg

    }
]
const Services = () => {
    return (
        <section className="container mx-auto text-center py-5">
            <h2 className="h2-header mb-5">
                Provide Awesome
                <span className="brand-color"> services</span>
                <div className="row">
                    {
                        serviceData.map(service => <Service service={service} />)
                    }
                </div>
            </h2>
        </section>
    );
};

export default Services;