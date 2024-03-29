import {useSelector, useDispatch} from "react-redux"
import { useState } from "react";
import { sortFromHtoL, sortFromLtoH} from "../reducers/cars/actions"
import ReactPaginate from 'react-paginate'
import CarsList from "./CarsList";
import Dropdown from 'react-bootstrap/Dropdown'
import "./Cars.css"

function Cars() {

  const dispatch = useDispatch();

  const state = useSelector((state)=>{
    return{
      carList:state.carsReducer.cars
    }
  });

  // for pagination
  // first thing you need to inastall react-paginate
  // carList is an array of cars
  const cars = state.carList;
  const [pageNumber, setPageNumber] = useState(0);
  // how many cars will represent in the page
  const carsPerPage = 10

  // the number of pages we visited so far
  const pagesVisited = pageNumber * carsPerPage

  // what items we gonna display it per page
  // we gonna use slice to to chose from  wich car to wich car we gonna display
  // it will take 2 variables : slice from (pagesVisited) to (pagesVisited + carsPerPage)
  const displayCars = cars.slice(pagesVisited, pagesVisited + carsPerPage).map((element)=>{
    return(
      <CarsList key={element.id} id={element.id} name={element.name} brand={element.brand} year={element.year} price={element.price} img={element.img} />
    )
  })

  // to calculate the number of pages that we need
  const pageCount = Math.ceil(cars.length / carsPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  };

    return (
      <div className="car-main-div">
<div className="Drop-down-div">
<Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Sort by price
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={() => {dispatch(sortFromLtoH())}}>From lowest to highest</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={() => {dispatch(sortFromHtoL())}}>From highest to lowest </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </div>

      {displayCars}
      <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBtns"}
      previousLinkClassName={"previosBtn"}
      nextLinkClassName={"nextBtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      /> 
      </div>
    );
  }
  
  export default Cars;