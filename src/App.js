import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import NavbarTP from './Components/NavbarTP';
import NavbarSP from './Components/NavbarSP';
import NavbarLanding from './Components/NavbarLanding';
import SidebarTP from './Components/SidebarTP';
import SidebarSP from './Components/SidebarSP'
import SidebarLanding from './Components/SidebarLanding';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const isLandingPage = location.pathname === '/';

  const isSpBranch = location.pathname.includes('/sp');
  const isTpBranch = location.pathname.includes('/tp');

  return (
    <div className="App">
      {isLandingPage ? (
        <SidebarLanding isOpen={isOpen} toggle={toggle} />
      ) : isSpBranch ? ( 
        <SidebarSP isOpen={isOpen} toggle={toggle} />
      ) : isTpBranch ? (
        <SidebarTP isOpen={isOpen} toggle={toggle} />
      ) : null}
      
      {isLandingPage ? (
        <NavbarLanding toggle={toggle} />
      ) : isSpBranch ? (
        <NavbarSP toggle={toggle} />
      ) : isTpBranch ? (
        <NavbarTP toggle={toggle} />
      ) : null}
      
      <Main />
    </div>
  );
}

export default App;
