import './App.css';
import './Nav.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import MyForm from './login'; 

function MyButton() {
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <div className='divlog'>
    <button className = 'b1' onClick={() => navigate('/login')}>
      Login
    </button>
    </div>
  );
}

function Mynav() {
  return (
    <nav className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#news">Blog</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
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
                <MyButton />
              </div>
              
            } />
            
            {/* Login Page Route */}
            <Route path="/login" element={<MyForm />} />
            
            {/* Redirect to Home if the route is not found */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
