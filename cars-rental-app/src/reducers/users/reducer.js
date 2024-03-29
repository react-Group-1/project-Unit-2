const initialState = {
    users: [ {id:1, name:"Admin",email:"a@a.com",password:"123", role:"admin"},
    {id:2, name:"Fahad",email:"f@f.com",password:"1234567890",role:"user"},
    {id:3, name:"Faisal",email:"faisal@faisal.com",password:"12345",role:"user"},
    {id:4, name:"Saad",email:"s@s.com",password:"1234567890",role:"user"}],
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
                let makeItArray = [payload]
            return{
                    users:arrayOfUsers,
                    extendUser:makeItArray,
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