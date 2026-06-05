import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css';
import NavbarTP from './Components/NavbarTP';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar' 
import Navbar2 from './Components/NavbarLanding'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const isLandingPage = location.pathname === '/';

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {isLandingPage ? (
        <Navbar2 toggle={toggle} />
      ) : (
        <NavbarTP toggle={toggle} />
      )}
      <Main />
    </div>
  );
}

export default App;
