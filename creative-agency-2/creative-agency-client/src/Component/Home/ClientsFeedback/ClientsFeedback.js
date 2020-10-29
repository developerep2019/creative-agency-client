import React, { useEffect, useState } from 'react';
import './clientsfeedback.css';
import WhatClientSay from '../WhatClientSay/WhatClientSay';



const ClientsFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(fd => setFeedbacks(fd))
    },[])

    console.log(feedbacks);

    return (
        <section className="container mx-auto clients-section">
            <h2 className="clients-header text-center">
                Clients
               <span className="brand-color"> Feedback</span></h2>
            <div className="row">
                {
                    feedbacks.map(feedback => <WhatClientSay feedback={feedback} />)
                }
            </div>
        </section>
    );
};

export default ClientsFeedback;