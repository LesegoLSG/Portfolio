import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import NavProvider from './Context/NavContexts';



function App() {
  return (
    <div className="App">
      <NavProvider>
        <Navbar />
        <Home />
        <Contact />
        <About />


      </NavProvider>


    </div>
  );
}

export default App;
