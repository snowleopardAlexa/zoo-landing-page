import './App.css';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
    <GlobalStyle />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/membership" element={<Membership />} />
     <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
