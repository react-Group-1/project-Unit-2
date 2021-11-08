import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import OrderDetails from './components/OrderDetails';
import Orders from './components/Orders';
import Admin from './components/Admin';
import UserOrderDetails from './components/UserOrderDetails';
import About from './components/About';
import Deals from './components/Deals';
import Users from './components/Users';
import BookingForm from './components/BookingForm'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/OrderDetails" element={<OrderDetails />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/About" element={<About />} />
        <Route path="/Deals" element={<Deals />} />
        <Route path="/UserOrderDetails" element={<UserOrderDetails />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/BookingForm" element={<BookingForm />} />
      </Routes>
    </>
  );
}

export default App;
