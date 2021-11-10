const initialState = {
    orders: []
}
const ordersReducer = (state = initialState , {type, payload}) =>{
    switch (type) {
        case "ADD_ORDER":
            let newArray = state.orders.slice();
            newArray.push(payload)
        return{
            orders:newArray
        }
        default:
            return state ;
    }
}
export default ordersReducer;