import './App.css';
import './Nav.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, Link } from 'react-router-dom';
import MyForm from './login'; 
import SpaceInput from './input'; 
import About from './About'; // Import the About component

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
      <Link className="active" to="/">Home</Link> {/* Link for Home */}
      <Link to="/space-input">Space input</Link> {/* Link for Space input */}
      <a href="#news">Blog</a> {/* Keeping Blog as anchor if not implemented */}
      <Link to="/about">About</Link>
      <a href="/Profile">Profile</a> {/* Link for About */}
      <a href="#contact">Contact</a> {/* Keeping Contact as anchor if not implemented */}
    </nav>
  );
}

export default function MyApp() {
  return (
    <Router>
      <div>
        <Mynav /> {/* Always display the navigation bar */}
        
        <div className="content"> {/* Content wrapper for better spacing */}
          <Routes>
            {/* Main Page Route */}
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
            
            {/* Login Page Route */}
            <Route path="/login" element={<MyForm />} />
            
            {/* Space Input Page Route */}
            <Route path="/space-input" element={<SpaceInput />} />
            
            {/* About Page Route */}
            <Route path="/about" element={<About />} />
            
            {/* Redirect to Home if the route is not found */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
