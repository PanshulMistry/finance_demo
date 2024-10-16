import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './HomePage/About';
import Banner from './HomePage/Banner';
import Counter from './HomePage/Counter';
import Features from './HomePage/Features';
import Footer from './HomePage/Footer';
import GetInTouch from './HomePage/GetInTouch';
import Header from './HomePage/Header';
import Navbar from './HomePage/Navbar';
import Projects from './HomePage/Projects';
import Services from './HomePage/Services';
import Teams from './HomePage/Teams';
import Testimonials from './HomePage/Testimonials';
import Signin from './Signin/Signin';
// import SignIn from './SignIn'; // New Sign In page component
// import SignUp from './SignUp'; // New Sign Up page component

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      {/* Define Routes */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<><Banner /><About /><Services /><Features /><Projects /><Counter /><GetInTouch /><Teams /><Testimonials /></>} />
        
        {/* Other pages */}
        <Route path="/about" element={<></>} />
        <Route path="/services" element={<></>} />
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/sign-up" element={<></>} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
