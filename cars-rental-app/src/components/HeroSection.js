import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import './HeroSection.css';

function HeroSection() {
    return (
      <>

<Carousel fade>
  <Carousel.Item>

  <Carousel.Caption>
  <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="./images/Lexus IS.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/LC500_HB.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/Land-Rover.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

< div className="card_div">
  <Card className="cards">
    <Card.Img  id="cardImg" variant="top" src="./images/joinj.png" />
    <Card.Body>
      <Card.Title className="title-text">Join Us</Card.Title>
      <Card.Text>
         
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="cards">
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