import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"
import "./Admin.css"

function Admin() {

  const state = useSelector((state)=>{
    return{
      users: state.usersReducer.users,
      orders: state.ordersReducer.orders
    }
  })
  const navigate = useNavigate();
    return (
      <>
      <div className="admin-container">
        <div className="header">
          <h1>Admin</h1>
        </div>
        <div className="body">
          <div className="body-left">
            <h2>Users</h2>
            <img onClick={()=>{navigate("/Users")}} src="./adminImages/users.png" height="200px" width="250px"></img>
            <h3>{state.users.length}</h3>
          </div>
          <div className="body-right">
            <h2>Orders</h2>
            <img onClick={()=>{navigate("/Orders")}} src="./adminImages/orders.png" height="200px" width="250px"></img>
            <h3>{state.orders.length}</h3>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Admin;