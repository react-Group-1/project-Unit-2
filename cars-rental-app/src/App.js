import Navigation from './components/Navigation';
 import HeroSection from './components/HeroSection';
import Cars from './components/Cars';
import './App.css';
// don't forget to remove this Sign in
// import SignIn from './components/SignIn';

function App() {
  return (
    <>
    <Navigation/>
    {/* <HeroSection/> */}
    <div className="App">
      <HeroSection/>
        <Cars/>
        {/* <SignIn/> */}
    </div>
    </>
  );
}

export default App;
