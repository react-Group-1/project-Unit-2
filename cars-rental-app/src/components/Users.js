import {useSelector} from "react-redux"
import UsersList from "./UsersList";
import "./Users.css"


function Users() {
  const state = useSelector((state)=>{
    return{
      userData: state.usersReducer.users
    }
  });

  const result = state.userData.filter((element) => {return (element.role === "user")})

    return (
      <>
      {result.map((element)=>{
    return(
      <div className="table-container">
        <table>
          <UsersList key={element.id} id={element.id} name={element.name} email={element.email} password={element.password}/>
          </table>
      </div>
    )
  })}
      </>
    );
  }
  
  export default Users;