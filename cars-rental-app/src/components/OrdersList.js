
function OrdersList({img, name, brand, startDate, endDate, totalPrice}) {
    return (
      <>
        <tbody>
            <tr>
              <td><img src={"./CarsImage/"+img} width="50px" height="50px"></img></td>
              <td>{brand} / {name}</td>
              <td>{startDate}</td>
              <td>{endDate}</td>
              <td>{totalPrice} $</td>
            </tr>
          </tbody>
      </>
    );
  }
  
  export default OrdersList;