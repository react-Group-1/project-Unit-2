import {useSelector} from "react-redux"
import CarsList from "./CarsList"


function BookingForm() {

  const state = useSelector((state)=>{
    return{
      book: state.bookingReducer
    }
  })

    return (
      <>
      {state.book.isSelected && true ? <div> <h3>Your Cart</h3> <CarsList id={state.book.SelectedCar.id} name={state.book.SelectedCar.name} brand={state.book.SelectedCar.brand} year={state.book.SelectedCar.year} price={state.book.SelectedCar.price} img={state.book.SelectedCar.img}  carDelete="true"/>
      </div>
      : <h1>The Cart is Empty</h1>}
      </>
    );
  }
  
  export default BookingForm;