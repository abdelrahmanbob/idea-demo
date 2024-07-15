import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/Navbar';
import Home from './component/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function Invest() {
  return <h2>Invest Page</h2>;
}

function Fundraise() {
  return <h2>Fundraise Page</h2>;
}

function Stories(){
  return <h2>Stories page</h2>
}

function AboutUs() {
  return <h2>About Us Page</h2>;
}

function ContactUs() {
  return <h2>Contact Us Page</h2>;
}





function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/fundraise" element={<Fundraise />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
