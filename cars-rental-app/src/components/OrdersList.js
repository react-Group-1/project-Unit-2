import { Button } from 'react-bootstrap';
import "./OrdersList.css"
import { ApproveOrder } from "../reducers/orders/actions"
import {useDispatch} from "react-redux"


function OrdersList({id, img, name, brand, startDate, endDate, totalPrice ,status}) {

  const dispatch = useDispatch();

  const Approve = ()=>{
    dispatch(ApproveOrder(id))
    // console.log("GG")
  }

    return (
      <>
        <tbody>
            <tr>
              <td><img src={"./CarsImage/"+img} width="50px" height="50px"></img></td>
              <td>{brand} / {name}</td>
              <td>{startDate}</td>
              <td>{endDate}</td>
              <td>{totalPrice} $</td>
              <td>{status}</td>
              {status === "pending" ? <td><Button onClick={Approve} className="successBTN" variant="success">Approve</Button> <Button variant="danger">Reject</Button></td> : ""}
            </tr>
          </tbody>
      </>
    );
  }
  
  export default OrdersList;
