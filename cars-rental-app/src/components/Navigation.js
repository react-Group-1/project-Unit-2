import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from "react-router-dom";

function Navigation() {

    // this use state is used to set the value that user types in search feild
    const [searcValue, setSearcValue] = useState("");

    return (
        <>
       <nav>
         <div className="logo">
            Logo
         </div>
         <div className="nav-items">
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/Deals">Deals</Link></li>
            <li><Link to= "/About">About</Link></li>
            <li><Link to= "/BookingForm">Cart</Link></li>
            <li><Link to= "/SignIn">Sign in</Link></li>
            <li><Link to= "/SignUp">Sign up</Link></li>
         </div>
         <form action="#">
            <input onChange={(e) => {setSearcValue(e.target.value)}} type="search" className="search-data" placeholder="Search"/>
            <button onClick={() => {console.log(searcValue)}}><i className="bi bi-search"></i></button>
         </form>
      </nav>
        </>
    );
  }
  
  export default Navigation;