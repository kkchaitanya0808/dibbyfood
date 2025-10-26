import React from 'react';
import './LegalPage.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>1. Information We Collect</h2>
          <p>DibbyFood collects information you provide directly to us, such as when you:</p>
          <ul>
            <li>Place bulk orders for our canned food products</li>
            <li>Create an account or contact us</li>
            <li>Subscribe to our newsletter</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p>This may include your name, email address, phone number, company information, and delivery address.</p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your bulk orders</li>
            <li>Communicate with you about your orders</li>
            <li>Send you product updates and promotional materials</li>
            <li>Improve our products and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
          <ul>
            <li>With your consent</li>
            <li>To fulfill your orders (shipping partners)</li>
            <li>To comply with legal requirements</li>
            <li>To protect our rights and safety</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> privacy@dibbyfood.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> DibbyFood Inc., 123 Food Street, Processing City, PC 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
