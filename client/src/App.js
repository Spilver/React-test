
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Blogs from './pages/blogs';
import Server from './pages/server';
import Welcome from './pages/welcome';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/server' element={<Server/>} />
        <Route path='/welcome' element={<Welcome/>} />
    </Routes>
    </Router>
);
}
  
export default App;