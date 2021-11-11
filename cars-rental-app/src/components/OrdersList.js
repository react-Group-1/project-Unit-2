import { Button } from 'react-bootstrap';
import "./OrdersList.css"

function OrdersList({img, name, brand, startDate, endDate, totalPrice ,status}) {
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
              {status === "pending" ? <td><Button className="successBTN" variant="success">Approve</Button> <Button variant="danger">Reject</Button></td> : ""}
            </tr>
          </tbody>
      </>
    );
  }
  
  export default OrdersList;
