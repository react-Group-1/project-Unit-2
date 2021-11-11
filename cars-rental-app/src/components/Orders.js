import {useSelector} from "react-redux"
import OrdersList from "./OrdersList"
import { Table } from 'react-bootstrap';
import "./Orders.css"

function Orders() {

  const state = useSelector((state)=>{
    return{
      ordersList: state.ordersReducer,
    }
  })

  const showOrders = ()=>{
    return state.ordersList.orders.map((ele , index) =>{
      return <OrdersList img={ele.img} name={ele.name} brand={ele.brand} startDate={ele.startDate} endDate={ele.endDate} totalPrice={ele.totalPrice} status={ele.status} />
    })
  }
    return (
      <>
      
      <div className="tableInfo">
      <h1>{state.ordersList.orders.length} Orders :</h1>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Brand/Name</th>
                <th>From</th>
                <th>To</th>
                <th>Total Price</th>
                <th>Status</th>
              </tr>
            </thead>
              {showOrders()}
        </Table>
      </div>
      </>
    );
  }
  
  export default Orders;