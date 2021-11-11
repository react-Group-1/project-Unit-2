const initialState = {
    orders: []
}
const ordersReducer = (state = initialState , {type, payload}) =>{

        function findAndApprove (id){
            // console.log(id)
            state.orders.map((ele,index)=>{
                if(id == ele.id)
                {
                    ele.status = "Approved"
                    return ele;
                }
            })
        }
        function findAndREJECT (id){
            state.orders.map((ele,index)=>{
                if(id == ele.id)
                {
                    ele.status = "Reject"
                    return ele;
                }
            })
        }


    switch (type) {
        case "ADD_ORDER":
            let newArray = state.orders.slice();
            newArray.push(payload)
        return{
            orders:newArray
        }
        case "APPROVE":
            findAndApprove(payload)
            // let newArray = state.orders.slice();
            // newArray.push(payload)
        return{
            orders:state.orders,
        }
        case "REJECT":
            findAndREJECT(payload)
            // let newArray = state.orders.slice();
            // newArray.push(payload)
        return{
            orders:state.orders,
        }
        default:
            return state ;
    }
}
export default ordersReducer;