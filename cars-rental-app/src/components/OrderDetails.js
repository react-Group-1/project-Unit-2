import {Button} from "react-bootstrap"
import "./OrderDetails.css"

function OrderDetails() {

  let id = "1"
  let brand = "Hyundai"
  let name = "i10"
  let year = "2022"
  let price = "50"
  let img = "1-Hyundai-i10-2022.png"
  let coupon = "AAA"
  let startDate = "20/11/2021"
  let endDate = "25/11/2021"
  let status = "pending"

    return (
      <div className="body-container">
        <div className="body-top">
          <div className="top-left">
            <img src = {"./CarsImage/"+ img }alt="car" height="250px" width="400px" />
          </div>
          <div className="top-right">
            <h2>{brand + " " + name}</h2>
            <h3>{year}</h3>
          </div>
        </div>
        <div className="body-bottom">
            <div className="from"><h5>Start date:</h5><label>{startDate}</label></div>
            <div className="from"><h5>End date:</h5><label>{endDate}</label></div>
            <div className="from"><h5>Discount coupon:</h5><label>{coupon}</label></div>
            <div className="from"><h5>Total price:</h5><label>{price}</label></div>
            <div className="from"><h5>Status:</h5><label>{status}</label></div>
            <Button variant="success" className="my-btn" onClick={()=>{console.log(id)}}>Submit</Button>{' '}
        </div>
      </div>
    );
  }
  
  export default OrderDetails;