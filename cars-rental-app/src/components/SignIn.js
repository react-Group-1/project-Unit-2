import {useDispatch, useSelector} from "react-redux"
import { useState } from "react"
import {logIn} from "../reducers/users/actions"
 
function SignIn() {

  const dispatch = useDispatch();
  const state = useSelector((state)=>{
    return{
      userIsLogedIn: state.usersReducer
    }
  });
  const[userMail, setUserMail] = useState("")
  const[password,setpassword] = useState("")

  // it will save the user email in the useState
  const getUserEmail = (e) => {
    setUserMail(e.target.value)
  }

  // it will save the user password in the useState
  const getPassword= (e) => {
      setpassword(e.target.value)
  }

  // after clicking the Login button the dispatch will send the user info (email,password) to the reducer to check it
  const loginClick = () => {
    let userInfo = {email: userMail, pass: password}
    const action = logIn(userInfo)
    dispatch(action)
  } 
    return (
      <>

            <div className="sign-in-div">
              <label htmlFor="email">Enter your email:</label>
              <input onChange={getUserEmail} type="email" id="email" name="email"/>  
              <br/>
              <label htmlFor="password">Enter Password</label>
              <input onChange={getPassword} type="password" id="password" name="password"/>
              <br/>
              <button onClick={loginClick}>Login</button>
            </div>
      </>
    );
  }
  
  export default SignIn;