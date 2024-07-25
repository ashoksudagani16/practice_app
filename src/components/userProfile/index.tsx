import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HeaderComponent from './header';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Container>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
