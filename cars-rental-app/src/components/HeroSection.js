import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();
    return (
      <>

<Carousel fade>

  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/LC500_HB.jpg"
      alt="Second slide"
    />

    <Carousel.Caption bsPrefix="hero-txt">
      <h3>We keep your life Running</h3>
      <p>Always there for you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/Land-Rover.jpg"
      alt="Third slide"
    />

    <Carousel.Caption bsPrefix="hero-txt">
      <h3>Beyond your expectations</h3>
      <p>Good Car for Good Moments</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



< div className="card_div">
  <Card className="cards" onClick ={() => {navigate("/SignUp")}}>
    <Card.Img  id="cardImg" variant="top" src="./images/joinj.png" />
    <Card.Body>
      <Card.Title className="title-text">Join Us</Card.Title>
      <Card.Text>
         
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="cards" onClick ={() => {alert("Use 'KSA' Coupon to get 10% Discount")}}>
    <Card.Img  id="cardImg" variant="top"  src="./images/deals.png"/>
    <Card.Body>
      <Card.Title className="title-text">Find Deals</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="cards">
    <Card.Img id="cardImg" variant="top" src="./images/email.png" />
    <Card.Body>
      <Card.Title className="title-text">Contact Us</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    
  </Card>
</div>

  

      </>
    );
  }
  
  export default HeroSection;