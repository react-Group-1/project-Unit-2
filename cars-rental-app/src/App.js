import Navigation from './components/Navigation';
// import HeroSection from './components/HeroSection';
import Cars from './components/Cars';
import './App.css';

function App() {
  return (
    <>
    <Navigation/>
    {/* <HeroSection/> */}
    <div className="App">
        <Cars/>
    </div>
    </>
  );
}

export default App;
