import {useSelector} from "react-redux"
import CarsList from "./CarsList"
import { useState } from "react"
import "./BookingForm.css"
function BookingForm() {

  const state = useSelector((state)=>{
    return{
      book: state.bookingReducer
    }
  })


  const[startDate,setStratDate] = useState(0)
  const[EndDate,setEndDate] = useState(0)
  const[price,setPrice] = useState(0)


  const getStartDate= (e) => {
    setStratDate(e.target.value)
  }

  const getEndDate= (e) => {
    setEndDate(e.target.value)
    console.log("&&&")
    console.log(diffDays)
    console.log("&&&")
    setPrice(diffDays*state.book.SelectedCar.price)
  }

  const datee1=new Date(startDate) //calculting date
  const datee2=new Date(EndDate)
  const diffTime = Math.abs(datee2 - datee1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  //https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript


    return (
      <>
      {state.book.isSelected && true ? 
      <div className="main"> 
        <div className="carListCompnent">
          <CarsList id={state.book.SelectedCar.id} name={state.book.SelectedCar.name} brand={state.book.SelectedCar.brand} year={state.book.SelectedCar.year} price={state.book.SelectedCar.price} img={state.book.SelectedCar.img}   carDelete="true"/>
        <hr/>
          <div className="bookingForm">
            <div className="Date">
              <div className="left">
                <label htmlFor="fromDate">From: </label>
                <input onChange={getStartDate} id="fromDate" type="date"/>
              </div>
              <div className="right">
                <label htmlFor="toDate">To: </label>
                <input onChange={getEndDate} id="toDate" type="date"/>
              </div>
            </div>
            <div className="Cobone">
            <label htmlFor="Cobone">Add Cobone: </label>
                <input id="Cobone" type="txt" placeholder="Add KAS for 10% disc." />
                <button>Apply</button>
            </div>
          </div>
        <hr/>
        <table>
          <tr>
            <td>Total Days</td>
            <td>{diffDays}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{price}</td>
          </tr>
          <tr>
            <td>15% Taxs</td>
            <td>Not Yet</td>
          </tr>
          <tr>
            <td>Cobone discount</td>
            <td>Not Yet</td>
          </tr>
          <tr>
            <td>Total Proce</td>
            <td>Not Yet</td>
          </tr>
        </table>
        <hr/>
        <button>Confirm Order</button>
        </div>

      </div>
      : <h1>The Cart is Empty</h1>}
      </>
    );
  }
  
  export default BookingForm;