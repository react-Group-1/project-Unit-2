import {useSelector, useDispatch} from "react-redux"
import CarsList from "./CarsList"
import { useState } from "react"
import { addOrder } from "../reducers/orders/actions"
import "./BookingForm.css"
function BookingForm() {

  const dispatch = useDispatch();
  const state = useSelector((state)=>{
    return{
      orders: state.ordersReducer,
      checkLoggedIn:state.usersReducer,
      book: state.bookingReducer
    }
  })

  function applyCoupon(){
      if(document.getElementById("coupon").value === "KSA")
      {
        let calculateCoupon = ((price * diffDays * 0.15) + (price * diffDays)) * 0.10;
        setCoupon(calculateCoupon)
      }
      else{
        setCoupon(0)
        let cc = document.getElementById("coupon");
        cc.value=""
        cc.placeholder="Invalid Coupon"
      }
  }

  function CheckIfLoggedIn(){
    if(state.checkLoggedIn.isLogedIn == false)
    {
      alert("You have to LogIn")
    }
    else{
      let obj = 
      {
        id:state.book.SelectedCar.id,
        name:state.book.SelectedCar.name,
        brand:state.book.SelectedCar.brand,
        year:state.book.SelectedCar.year,
        price:state.book.SelectedCar.price,
        img:state.book.SelectedCar.img,
        startDate:startDate,
        endDate:EndDate,
        coupon:coupon,
        totalPrice:((price * diffDays * 0.15) + (price * diffDays)) - coupon,
      }
      // console.log(obj)
      dispatch(addOrder(obj))
      alert("done, and delete this from cart because has been added in the order")
    }
  }

  const[startDate,setStratDate] = useState(0)
  const[EndDate,setEndDate] = useState(0)
  const[price,setPrice] = useState(0)
  const[coupon,setCoupon] = useState(0)


  const getStartDate= (e) => {
    setStratDate(e.target.value)
  }

  const getEndDate= (e) => {
    setEndDate(e.target.value)
    console.log("&&&")
    console.log(diffDays)
    console.log("&&&")
    setPrice(state.book.SelectedCar.price)
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
            <div className="Coupon">
            <label htmlFor="Coupon">Add Coupon: </label>
                <input id="coupon" type="txt" placeholder="Add KAS for 10% disc." />
                <button onClick={applyCoupon}>Apply</button>
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
            <td>{price * diffDays}</td>
          </tr>
          <tr>
            <td>15% Taxs</td>
            <td>{price * diffDays * 0.15}</td>
          </tr>
          <tr>
            <td>Coupon discount</td>
            <td>{coupon}</td>
          </tr>
          <tr>
            <td>Total Proce</td>
            <td>{((price * diffDays * 0.15) + (price * diffDays)) - coupon}</td>
          </tr>
        </table>
        <hr/>
        <button onClick={CheckIfLoggedIn}>Confirm Order</button>
        </div>

      </div>
      : <h1>The Cart is Empty</h1>}
      </>
    );
  }
  
  export default BookingForm;