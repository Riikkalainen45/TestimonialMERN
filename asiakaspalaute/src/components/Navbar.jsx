import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
<nav className="navbar bg-dark container">
    <h4><Link className="link" to="/">Etusivu</Link></h4>
     <h4><Link className="link" to="/lomake">Lomake</Link></h4>
      <h4><Link className="link" to="/palaute">Palaute</Link></h4>
    
</nav>
    );

}

export default Navbar;