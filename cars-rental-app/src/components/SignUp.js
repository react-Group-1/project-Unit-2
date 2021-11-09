import {useDispatch} from "react-redux"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import {signUP} from "../reducers/users/actions"
import "./SignUp.css"
import { useSelector } from 'react-redux';
function SignUp(){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const state = useSelector((state) =>{
     return{
         usersList:state.usersReducer.users,
     }
})
  
  let errorMsg = document.getElementById("errorMsg");
 // errorMsg.style.display = "none";
  //input.addEventListener('input', (e) => {
    //const value = e.target.value;

  const[password1,setPassword1] = useState("")
  const[password2,setPassword2] = useState("")
  const[email,setEmail] = useState("")
  const[name,setName] = useState("")
  const[passErrorMsg,setErrorMsg] = useState("")
  const[emailErrorMsg,setEmailErrorMsg] = useState("")

  const getPassword1= (e) => {
    setPassword1(e.target.value)
    

}

const getPassword2= (e) => {
  setPassword2(e.target.value)
}

const getEmail= (e) => {
  setEmail(e.target.value)
}

const getName= (e) => {
  setName(e.target.value)
}

function printPassword1(){
console.log(password1)
return password1
}

function printPassword2(){
  console.log(password2)
  return password2
  }


  function checkemail()
  {
 for(let i=0;i<state.usersList.length;i++){
  if(state.usersList[i].email=== email ){
    setEmailErrorMsg(" Email already exists")
    document.getElementById("Email").value=""
    console.log("87654")
    break
  }
  
  if(i===state.usersList.length-1){
    let userInfo = {id:i+2 ,name:name,email: email, pass: password2}
    const action = signUP(userInfo)
    dispatch(action)
    setEmailErrorMsg("")
    setErrorMsg("")
    navigate("/")
  }
}
console.log(state.usersList)

  }
  

  function CheckPassword(){
     
    if(password1 === password2)
    {
     // flag="false"
     checkemail()
     }else{
      setErrorMsg("Password doesn't match")
      // document.getElementById("password").value=""
      // document.getElementById("confirm-password").value=""
     }

 }


return(

  <div className="Sign-Up">
              <h1 id="titleid">Sign Up Form</h1>
              <label htmlFor="UserName" id="UserNameid">Enter User Name</label>
              <input onChange={getName} type="UserName" id="UserName" name="UserName"/>  
              <br/>
              <label htmlFor="Email"> Enter Email</label>
              <input onChange={getEmail} type="email" id="Email" name="Email" placeholder={emailErrorMsg}/>  
              <br/>
              <label htmlFor="password">Enter Password</label>
              <input  onChange={getPassword1} type="password" id="password1" name="password" placeholder={passErrorMsg}/>
              <br/>
              <label htmlFor="confirm-password">Confirm Password</label>
              <input  onChange={getPassword2} type="password" id="confirm-password" name=" confirm-password" placeholder={passErrorMsg}/>
              <br/><br/>
              <button onClick={CheckPassword} type="button" className="btn btn-success" >Sign Up</button>
              

  </div>
)


}

export default SignUp 
  