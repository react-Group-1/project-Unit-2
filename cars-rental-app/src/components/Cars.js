import {useSelector} from "react-redux"
import CarsList from "./CarsList";
import Dropdown from 'react-bootstrap/Dropdown'
import "./Cars.css"

function Cars() {

  const state = useSelector((state)=>{
    return{
      carList:state.carsReducer.cars
    }
  });

  const viewCars = ()=> {
      return state.carList.map((ele , index)=>{
        return <CarsList key={index} id={ele.id} name={ele.name} brand={ele.brand} year={ele.year} price={ele.price} img={ele.img} />
    }) } 

    return (


      <div className="car-main-div">
<div className="Drop-down-div">
<Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Price Sort
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={() => {console.log("From lowest to highest")}}>From lowest to highest</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={() => {console.log("From highest to lowest")}}>From highest to lowest </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
      {viewCars()}
      </div>
    );
  }
  
  export default Cars;