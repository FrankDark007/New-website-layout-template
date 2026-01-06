import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { ServicesHub } from './pages/ServicesHub';
import { WaterDamageService } from './pages/WaterDamageService';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { GuidesHub } from './pages/GuidesHub';
import { BlogPost } from './pages/BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/services/water-damage-restoration" element={<WaterDamageService />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guides" element={<GuidesHub />} />
        <Route path="/guides/:id" element={<BlogPost />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
