import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import "./CarsList.css"
import { Button } from 'react-bootstrap';
import { SetCar, deleteCar } from "../reducers/booking/actions"


function CarsList({id, name, brand,year, price, img, carDelete}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goTocart = ()=>{
    dispatch(SetCar({id, name, brand, year, price, img}));
    navigate("/BookingForm")
  }
  const deletefromCart = ()=>{
    dispatch(deleteCar());
    navigate("/BookingForm")
  }

    return (
      <div className="carDetails">
        <div className="leftSide">
          <div >
            <img className="carImage" src={"./CarsImage/"+img} alt="car" height="150px" width="250px" />
          </div>
          <div className="details">
            <h3>{brand} {name}</h3>
            <h5>{year}</h5>
            <h6>ID:{id}</h6>
          </div>
        </div>
        <div className="rightSide">
          
            <h3>{price} SAR /<small style={{ fontSize:"15px"}}>per day</small></h3>
            {carDelete && true ? <Button  onClick={deletefromCart} variant="danger" >Delete</Button> : <Button onClick={goTocart} variant="warning">BOOK NOW</Button>}
            
        </div>
      </div>
    );
  }
  
  export default CarsList;