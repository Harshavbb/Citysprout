import './App.css'
import './Nav.css'

function MyButton() {
  return (
    <button>
      Login
    </button>
  );
}

function Mynav(){
  return(
    <nav class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">Blog</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</nav>
  )
}

export default function MyApp() {
  return (
    <div>
      
      <h2 class = 'main'>Join us in <br></br>Transforming<br></br> Urban Spaces</h2>
      <p>Be the first to know about our urban <br></br>agriculture projects and latest updates!
      <br></br> Sign up now to stay connected and be
       <br></br>part of the CitySprout community.</p>
      <MyButton />
      <Mynav></Mynav>
    </div>

    
  );
}
