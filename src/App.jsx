import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
//context
import {AuthProvider} from "./context/AuthContext.jsx"
//pages
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
//
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
