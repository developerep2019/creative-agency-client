import React from 'react';

const Partner = ({ partner }) => {
    return (
        <div className="col-md-2 text-center mb-2">
            <img src={partner.img} alt="brands" style={{ height: '40px' }} />
        </div>
    );
};

export default Partner;