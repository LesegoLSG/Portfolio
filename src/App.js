import './App.css';
import MainPage from './Pages/MainPage';
import './Stylesheet/Style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
