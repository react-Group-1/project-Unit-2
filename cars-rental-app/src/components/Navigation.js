import { useState } from 'react';
import { useContext } from "react";
import { MyContext } from "../App";
import {useDispatch, useSelector} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from "react-router-dom";
import { logOut } from '../reducers/users/actions';
import "./Navigation.css"

function Navigation() {

  const dispatch = useDispatch();
  const userContext = useContext(MyContext)

  // this useSelector will take the state of user reducer 
  const state = useSelector((state)=>{
    return{
      userIsLogedIn: state.usersReducer
    }
  });
  // this line checks if user is logged in or not
  // if it is true we will remove signIn, SignUp from Navbar and replace it with the name of user
  if(state.userIsLogedIn.isLogedIn){
    userContext.setUserName(state.userIsLogedIn.extendUser[0].name)
    userContext.setToggle(true)
  }

  const logOutEvent = () =>{
    const action = logOut()
    dispatch(action)
    userContext.setToggle(false)
  }

    // this use state is used to set the value that user types in search feild
    const [searcValue, setSearcValue] = useState("");

    return (
        <>
       <nav>
         <div className="logo">
            Logo
         </div>
         <div className="nav-items">
            {userContext.toggle && <li className="user-name">{"Welcome " + userContext.userName}</li>}
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/Deals">Deals</Link></li>
            <li><Link to= "/About">About</Link></li>
            <li><Link to= "/BookingForm">Cart</Link></li>
            {!userContext.toggle && <li><Link to= "/SignIn">Sign in</Link></li>}
            {!userContext.toggle && <li><Link to= "/SignUp">Sign up</Link></li>}
            {userContext.toggle && <li><Link to= "/OrderDetails">My Orders</Link></li>}
            {userContext.toggle && <li onClick={logOutEvent}><Link to= "/">Logout</Link></li>}
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