import './App.css';
import GlobalStyle from './globalStyles';
import { Routes, Router } from 'react-router-dom';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>

      <GlobalStyle>
        
      </GlobalStyle>
      <Home />
      <Membership />
      <Contact />
      </Routes>
    </div>
  );
}

export default App;
