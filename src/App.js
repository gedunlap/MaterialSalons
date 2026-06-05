import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css';
import NavbarTP from './Components/NavbarTP';
import Main from './Components/Main';
import NavbarLanding from './Components/NavbarLanding'
import Sidebar from './Components/Sidebar' 
import SidebarLanding from './Components/SidebarLanding'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const isLandingPage = location.pathname === '/';

  return (
    <div className="App">
      {isLandingPage ? (
        <SidebarLanding isOpen={isOpen} toggle={toggle} />
      ) : ( 
        <Sidebar isOpen={isOpen} toggle={toggle} />
      )}
      
      {isLandingPage ? (
        <NavbarLanding toggle={toggle} />
      ) : (
        <NavbarTP toggle={toggle} />
      )}
      <Main />
    </div>
  );
}

export default App;
