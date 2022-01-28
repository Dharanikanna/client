import {Link} from 'react-router-dom';
import React from 'react';

class Navbar extends React.Component {
    render() {
        return(
        <div>
        <header>
            <h2>
                Hello...    
            </h2> 
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/healthcare">Healthcare</Link></li>
                <li><Link to="/developers">Developers</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        </header>
 
       </div>

);
}
}
            
export default Navbar;