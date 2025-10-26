import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import OrderPage from './pages/OrderPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import { products } from './data/productsData';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="brand-logo">
            <span className="brand-dibby">Dibby</span>
            <span className="brand-food">Food</span>
          </h1>
          <nav>
            <a href="/">Home</a>
            <a href="/order">Order Now</a>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        
        <footer>
          <div className="footer-content">
            <div className="footer-brand">
              <h3>🥫 DibbyFood</h3>
              <p>Premium canned food products for every kitchen</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Company</h4>
                <a href="/">Home</a>
                <a href="/order">Order Now</a>
                <a href="/about">About Us</a>
              </div>
              <div className="footer-section">
                <h4>Legal</h4>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/cookie-policy">Cookie Policy</a>
                <a href="/disclaimer">Disclaimer</a>
              </div>
              <div className="footer-section">
                <h4>Contact</h4>
                <p>📧 info@dibbyfood.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 123 Food Street, Processing City</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 DibbyFood Inc. All rights reserved. Made with ❤️</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {

  return (
    <div className="home-page">
      <section className="hero">
        <h2>Premium Canned Food Products</h2>
        <p>Quality preserved foods for every kitchen. Fresh taste, long shelf life, convenient packaging.</p>
      </section>
      
      <section className="products">
        <h3>Our Product Range</h3>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
