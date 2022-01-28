import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import './index.css';

import Register from './register'

// import Home from './home'
//import Healthcare from './healthcare'
// import Developers from './developers'
const Home = React.lazy(() => import ('./home'));
const Navbar = React.lazy(() => import ('./navbar'));
const Healthcare = React.lazy(() => import ('./healthcare'));

const Developers = React.lazy(() => import ('./developers'));
const Dashboard = React.lazy(() => import ('./dashboard'));
const Login = React.lazy(() => import ('./login'));

const Footer = React.lazy(() => import ('./footer'));


// import Dashboard from './dashboard'
// import Form from './Form'

function App() {
  return (
    <Router>
    <div className="App">
    <Suspense fallback={
      <div className='container'>Loading...</div>
      }>

      <Navbar />
      <Route exact path ="/">
        <Home />
      </Route>
    
      <Switch>
        <Route exact path ="/healthcare">
          <Healthcare />
        </Route>
        
        <Route exact path ="/developers">
          <Developers />
        </Route>

        <Route exact path ="/register">
          <Register />
        </Route>

        <Route exact path ="/login">
          <Login />
        </Route>

      <Route exact path ="/dashboard">
          <Dashboard />
        </Route>

      </Switch>
      <Footer />
    </Suspense>
      

        

        
    </div>
    </Router>
  );
}

export default App;

