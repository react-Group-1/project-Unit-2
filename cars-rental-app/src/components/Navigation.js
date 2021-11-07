import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, FormControl, Button} from 'react-bootstrap';

function Navigation() {

    // this use state is used to set the value that user types in search feild
    const [searcValue, setSearcValue] = useState("");

    return (
        <>
    <Navbar className="my-nav" bg="dark" variant="dark">
        <div className="d-flex justify-content-start logo me-4"><h1>LOGO</h1></div>
    <Container>
    <Nav className="me-auto">
      <Nav.Link onClick={() => {console.log("Home page")}}>Home</Nav.Link>
      <Nav.Link onClick={() => {console.log("Deals page")}}>Deals</Nav.Link>
      <Nav.Link onClick={() => {console.log("About us page")}}>About us</Nav.Link>
      <Nav.Link onClick={() => {console.log("Cart page")}}>cart</Nav.Link>
    </Nav>
    </Container>

    <Container className="d-flex justify-content-end">
    <Nav className="d-flex flex-row-reverse">
      <Nav.Link onClick={() => {console.log("Sign up page")}}>Sign up</Nav.Link>
      <Nav.Link onClick={() => {console.log("Sign in page")}}>Sign in</Nav.Link>
      </Nav>
    </Container>
        <FormControl onChange={(e) => {setSearcValue(e.target.value)}}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={() => {console.log(searcValue)}} variant="outline-light">Search</Button>
  </Navbar>
        </>
    );
  }
  
  export default Navigation;