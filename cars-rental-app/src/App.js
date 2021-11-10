import {Routes, Route} from "react-router-dom"
import { createContext, useState } from "react";
import Home from './components/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import OrderDetails from './components/OrderDetails';
import Orders from './components/Orders';
import Admin from './components/Admin';
import UserOrderDetails from './components/UserOrderDetails';
import About from './components/About';
import Users from './components/Users';
import BookingForm from './components/BookingForm'
import Navigation from "./components/Navigation";
import './App.css';

export const MyContext = createContext();

function App() {
  const[userName,setUserName] = useState("")
  const[toggle,setToggle] = useState(false)
  const[adminToggle,setAdminToggle] = useState(false)
  return (
    <>
      <MyContext.Provider value={{userName: userName, setUserName: setUserName, toggle: toggle, setToggle: setToggle, adminToggle: adminToggle, setAdminToggle: setAdminToggle}}>
        <Navigation/>
      </MyContext.Provider>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/OrderDetails" element={<OrderDetails />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/About" element={<About />} />
        <Route path="/UserOrderDetails" element={<UserOrderDetails />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/BookingForm" element={<BookingForm />} />
      </Routes>
    </>
  );
}

export default App;
