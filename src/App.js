import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';


function App() {
  return (
    <>
    
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
