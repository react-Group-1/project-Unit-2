import {useSelector} from "react-redux"

function Orders() {

  const state = useSelector((state)=>{
    return{
      ordersList: state.ordersReducer,
    }
  })
    return (
      <>
      {console.log(state.ordersList.orders)}
      </>
    );
  }
  
  export default Orders;