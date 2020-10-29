import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Component/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Component/Login/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Order from './Component/Dashboard/Order/Order';
import ServiceList from './Component/Dashboard/ServiceList/ServiceList/ServiceList';
import Review from './Component/Dashboard/Review/Review/Review';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoogedInUser] = useState({});
  const [services, setServices] = useState([]);
  const [islogin, setIsLogin] = useState(false);
  return (
    <UserContext.Provider value={{ login: [loggedInUser, setLoogedInUser], service: [services, setServices], logged: [islogin, setIsLogin] }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addOrder">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/checkProduct">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/reviewAService">
            <Review/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
