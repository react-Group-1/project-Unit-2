import {useSelector} from "react-redux"
import {Button} from "react-bootstrap"
import "./OrderDetails.css"

function OrderDetails() {

  
  const state = useSelector((state)=>{
    return{
      orders: state.ordersReducer,
    }
  })
  let status = "pending"

  const showOrders = ()=>{
    return state.orders.orders.map((ele,index)=>{
      return <>
        <div className="body-top">
          <div className="top-left">
            <img src = {"./CarsImage/"+ ele.img }alt="car" height="250px" width="400px" />
          </div>
          <div className="top-right">
            <h2>{ele.brand + " " + ele.name}</h2>
            <h3>{ele.year}</h3>
          </div>
        </div>
        <div className="body-bottom">
            <div className="from"><h5>Start date:</h5><label>{ele.startDate}</label></div>
            <div className="from"><h5>End date:</h5><label>{ele.endDate}</label></div>
            <div className="from"><h5>Discount coupon:</h5><label>{ele.coupon}</label></div>
            <div className="from"><h5>Total price:</h5><label>{ele.totalPrice}</label></div>
            <div className="from"><h5>Status:</h5><label>{status}</label></div>
            <hr/>            
        </div>
            </>
    })
  }
    return (
      <div className="body-container">
          {showOrders()}
      </div>
    );
  }
  
  export default OrderDetails;