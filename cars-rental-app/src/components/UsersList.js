
import "./Users.css"

function UsersList({id, name, email, password}) {
    return (
      <>
          
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
              </tr>
          
      </>
    );
  }
  
  export default UsersList;