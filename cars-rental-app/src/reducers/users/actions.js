export const logIn = (user)=> {
    return {
        type:"LOG_IN",
        payload:user
    };
};

export const signUP = (user)=>{
    return{
        type:"SIGN_UP",
        payload:user
    }
}

export const logOut = ()=>{
    return{
        type:"LOG_OUT",
    }
}