const initialState = {
    users: [ {id:1, name:"saad",email:"s@s.com",password:"1234567890"},{id:2, name:"fahad",email:"f@f.com",password:"1234567890"}],
    extendUser:{},
    isLogedIn:false,
}

function checkLogIn(email,  pass)
{
    return initialState.users.filter((ele , index)=>{
        if(email === ele.email && pass === ele.password)
        {
            return ele ;
        }
})
}

const usersReducer = (state = initialState , {type, payload}) =>{
    switch (type) {
        case "LOG_IN":
            let ObjOfcheckLogIn = checkLogIn(payload.email ,payload.pass );
            if(ObjOfcheckLogIn.length == 0)
            {
                return{
                    users:state.users,
                    extendUser:state.extendUser,
                    isLogedIn:state.isLogedIn,
                }
            }
            else{
                return{
                    users:state.users,
                    extendUser:ObjOfcheckLogIn,
                    isLogedIn:true
                }
            }
            case "SIGN_UP":
                let arrayOfUsers = state.users.slice();
                arrayOfUsers.push(payload)
            return{
                    users:arrayOfUsers,
                    extendUser:payload,
                    isLogedIn:true
            }
            case "LOG_OUT":
            return{
                    users:state.users,
                    extendUser:{},
                    isLogedIn:false
            }
        default:
            return state ;
            
    }
}
export default usersReducer;