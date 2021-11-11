import {useSelector} from "react-redux"
import UsersList from "./UsersList";
import "./Users.css"
import { Table } from 'react-bootstrap';


function Users() {
  const state = useSelector((state)=>{
    return{
      userData: state.usersReducer.users
    }
  });

  const result = state.userData.filter((element) => {return (element.role === "user")})

    return (
      <>
      <div className="tableInfo">
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>password</th>
              </tr>
            </thead>

      {result.map((element)=>{
        return(
          <UsersList key={element.id} id={element.id} name={element.name} email={element.email} password={element.password}/>
              )})
      }
          </Table>
          </div>
      </>
    );
  }
  
  export default Users;