import { useNavigate } from 'react-router-dom';
import "./Admin.css"

function Admin() {

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
          </div>
          <div className="body-right">
            <h2>Orders</h2>
            <img onClick={()=>{navigate("/Orders")}} src="./adminImages/orders.png" height="200px" width="250px"></img>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Admin;