import Navigation from "./Navigation";
import HeroSection from './HeroSection';
import Cars from './Cars';

function Home() {
    return (
      <>
        <Navigation/>
        <div className="App">
            <HeroSection/>
            <Cars/>
        </div>
      </>
    );
  }
  
  export default Home;