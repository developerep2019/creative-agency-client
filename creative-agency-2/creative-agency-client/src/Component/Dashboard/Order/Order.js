import React from 'react';
import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';
import SideBar from '../Sidebar/Sidebar';
import OrderForm from './OrderForm/OrderForm';

const Order = () => {

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
                <div style={style} className="col-md-10">
                    <OrderForm/>
                </div>
            </div>
        </section>
    );
};

export default Order;