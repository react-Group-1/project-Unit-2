import {useSelector} from "react-redux"
import CarsList from "./CarsList"
import { useState } from "react"

function BookingForm() {

  const[startDate,setStratDate] = useState(0)
  const[EndDate,setEndDate] = useState(0)

  const getStartDate= (e) => {
    setStratDate(e.target.value)
    

}

const getEndDate= (e) => {
  setEndDate(e.target.value)
console.log(e.target.value)
}

const datee1=new Date(startDate) //calculting date
const datee2=new Date(EndDate)
const diffTime = Math.abs(datee2 - datee1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  //https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript


  const state = useSelector((state)=>{
    return{
      book: state.bookingReducer
    }
  })

    return (
      <>
      {state.book.isSelected && true ? <div> <h3>Your Cart</h3> <CarsList id={state.book.SelectedCar.id} name={state.book.SelectedCar.name} brand={state.book.SelectedCar.brand} year={state.book.SelectedCar.year} price={state.book.SelectedCar.price} img={state.book.SelectedCar.img}   carDelete="true"/>
      <br/>
      <div><label>Pick up date:</label>  {/*https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_date*/}
      <input  onChange={getStartDate} type="date"></input> 
      <label>Return date</label> 
      <input onChange={getEndDate} type="date"></input>
      <input onClick={()=>{console.log(diffDays)}} type="submit"></input>
      <button id="coupon" className="coupon-button">Apply coupon</button>
      <input id="coupon"></input></div>
      <br/>
      <div>
      <label>Renting price/ Day:</label> 
      <input ></input>
      <label>Number of days:</label> 
      <input ></input>
      <label  id="total" className="Total">Total:</label> 
      <input id="total"></input>
      </div>
      
     
      </div>
      : <h1>The Cart is Empty</h1>}
      </>
    );
  }
  
  export default BookingForm;