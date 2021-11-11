export const addOrder = (ObjectOfOrder)=>{
    return{
        type:"ADD_ORDER",
        payload:ObjectOfOrder
    }
}

export const ApproveOrder = (id)=>{
    return{
        type:"APPROVE",
        payload:id
    }
}