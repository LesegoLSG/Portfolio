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
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
