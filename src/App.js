import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Join from './components/join/Join';
import Plans from './components/plan/Plans';
import Program from './components/programs/Program';
import Reasons from './components/reason/Reasons';
import Test from './components/test/Test';


function App() {
  return (
    <div className="App">

          <Hero />
          <Program />
          <Reasons />
          <Plans />
          <Test />
          <Join />
          <Footer />
          
    </div>
  );
}

export default App;
