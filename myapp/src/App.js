import './App.css';
import './Nav.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, Link } from 'react-router-dom';
import MyForm from './login';
import SpaceInput from './input';
import About from './About';
import Dashboard from './Dashboard';
import Blog from './Blog'; // Import Blog component instead of FarmingMethods

function MyButton() {
  const navigate = useNavigate(); 

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
      <Link to="/blog">Blog</Link> {/* Update link to point to the Blog component */}
      <Link to="/about">About</Link>
    </nav>
  );
}

export default function MyApp() {
  return (
    <Router>
      <div>
        <Mynav /> {/* Navigation bar */}

        <div className="content">
          <Routes>
            <Route path="/" element={
              <div>
                <h2 className='mainh2'>Join us in <br /> Transforming<br /> Urban Spaces</h2>
                <p className='mainp'>
                  Be the first to know about our urban <br /> agriculture projects and latest updates!
                  <br /> Sign up now to stay connected and be
                  <br /> part of the CitySprout community.
                </p>
                <img src="/images/newlogo.png" alt="Urban Agriculture" className='right-image' />
                <MyButton /> {/* Login Button */}
              </div>
            } />
            <Route path="/login" element={<MyForm />} />
            <Route path="/space-input" element={<SpaceInput />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} /> {/* Route to Blog */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any undefined routes to home */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
