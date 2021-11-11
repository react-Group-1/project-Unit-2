import Carousel from 'react-bootstrap/Carousel'
import "./HeroSection.css"

function HeroSection() {
    return (
      <>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/Lexus IS.jpg"
      alt="First slide"
    />
    <Carousel.Caption bsPrefix="hero-txt">
      <h3>Beyond your expectations</h3>
      <p>Good Car for Good Moments</p>
    </Carousel.Caption>
  </Carousel.Item>
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
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  

      </>
    );
  }
  
  export default HeroSection;