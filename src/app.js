import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; 
import Homepage from './pages/Homepage'; 
import Shop from './pages/Shop'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
