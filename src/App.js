import './App.css';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
      <GlobalStyle />
       <Route path="/" element={<Home />} />
       <Route path="/" element={<Membership />} />
       <Route path="/" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
