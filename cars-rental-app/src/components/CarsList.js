import "./CarsList.css"
import { Button } from 'react-bootstrap';

function CarsList({id, name, brand,year, price, img}) {
    return (
      <div className="carDetails">
        <div className="leftSide">
          <div >
            <img className="carImage" src={"./CarsImage/"+img} height="150px" width="250px" />
          </div>
          <div className="details">
            <h3>{brand} {name}</h3>
            <h5>{year}</h5>
            <h6>ID:{id}</h6>
          </div>
        </div>
        <div className="rightSide">
          
            <h3>{price} SAR /<small style={{ fontSize:"15px"}}>per day</small></h3>
          
            <Button variant="warning">BOOK NOW</Button>{' '}
        </div>
      </div>
    );
  }
  
  export default CarsList;