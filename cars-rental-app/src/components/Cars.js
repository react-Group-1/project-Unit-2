import {useSelector} from "react-redux"
import CarsList from "./CarsList";
import "./Cars.css"

function Cars() {

  const state = useSelector((state)=>{
    return{
      carList:state.carsReducer.cars
    }
  });

  const viewCars = ()=> {
      return state.carList.map((ele , index)=>{
        return <CarsList id={ele.id} name={ele.name} brand={ele.brand} year={ele.year} price={ele.price} img={ele.img} />
    }) } 

    return (
      <div className="car-main-div">
      {viewCars()}
      </div>
    );
  }
  
  export default Cars;