import {useSelector} from "react-redux"
import { useState } from "react";
import ReactPaginate from 'react-paginate'
import CarsList from "./CarsList";
import Dropdown from 'react-bootstrap/Dropdown'
import "./Cars.css"

function Cars() {


  const state = useSelector((state)=>{
    return{
      carList:state.carsReducer.cars
    }
  });

  // for pagination
  // first thing you need to inastall react-paginate
  // carList is an array of cars
  const [cars, setCars] = useState(state.carList);
  const ccc = state.carList;
  const [pageNumber, setPageNumber] = useState(0);
  // how many cars will represent in the page
  const carsPerPage = 10

  // the number of pages we visited so far
  const pagesVisited = pageNumber * carsPerPage

  // what items we gonna display it per page
  // we gonna use slice to to chose from  wich car to wich car we gonna display
  // it will take 2 variables : slice from (pagesVisited) to (pagesVisited + carsPerPage)
  const displayCars = ccc.slice(pagesVisited, pagesVisited + carsPerPage).map((element)=>{
    return(
      <CarsList key={element.id} id={element.id} name={element.name} brand={element.brand} year={element.year} price={element.price} img={element.img} />
    )
  })

  // to calculate the number of pages that we need
  const pageCount = Math.ceil(ccc.length / carsPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  };

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

      {displayCars}
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
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