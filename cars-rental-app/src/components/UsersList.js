
import "./Users.css"

function UsersList({id, name, email, password}) {
  const hiddenPassword = ()=>{
    let char ="*"
    let newPass =""
    for( let i = 0 ; i < password.length ; i++)
    {
      newPass = newPass+char
    }
    return newPass;
  }
    return (
      <>
          
          
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{hiddenPassword()}</td>
            </tr>
          </tbody>
          
      </>
    );
  }
  
  export default UsersList;