import './App.css';
import './Nav.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, Link } from 'react-router-dom';
import MyForm from './login'; 
import SpaceInput from './input'; 
import About from './About'; 
import Dashboard from './Dashboard';
import FarmingMethods from './blog'; // Import FarmingMethods component

function MyButton() {
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <div className='divlog'>
      <button className='b1' onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  );
}

function Mynav() {
  return (
    <nav className="topnav">
      <Link className="active" to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/space-input">Space Input</Link>
      <Link to="/farming-methods">Blog</Link> {/* Update to link to farming methods */}
      <Link to="/about">About</Link>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default function MyApp() {
  return (
    <Router>
      <div>
        <Mynav /> {/* Always display the navigation bar */}
        
        <div className="content">
          <Routes>
            <Route path="/" element={
              <div>
                <h2 className='mainh2'>Join us in <br /> Transforming<br /> Urban Spaces</h2>
                <p className='mainp'>Be the first to know about our urban <br /> agriculture projects and latest updates!
                  <br /> Sign up now to stay connected and be
                  <br /> part of the CitySprout community.</p>
                <img src="/images/newlogo.png" alt="Urban Agriculture" className='right-image' />
                <MyButton />
              </div>
            } />
            <Route path="/login" element={<MyForm />} />
            <Route path="/space-input" element={<SpaceInput />} />
            <Route path="/about" element={<About />} />
            <Route path="/farming-methods" element={<FarmingMethods />} /> {/* Route for farming methods */}
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
