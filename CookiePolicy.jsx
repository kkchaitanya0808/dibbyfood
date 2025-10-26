import React from 'react';
import './LegalPage.css';

function CookiePolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Cookie Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>1. What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and understand how you use our site.</p>
        </section>

        <section>
          <h2>2. How We Use Cookies</h2>
          <p>DibbyFood uses cookies for the following purposes:</p>
          
          <h3>2.1 Essential Cookies</h3>
          <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
          
          <h3>2.2 Analytics Cookies</h3>
          <p>We use analytics cookies to understand how visitors interact with our website. This helps us improve our site and services.</p>
          
          <h3>2.3 Functional Cookies</h3>
          <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences and login information.</p>
          
          <h3>2.4 Marketing Cookies</h3>
          <p>We may use marketing cookies to deliver relevant advertisements and track the effectiveness of our marketing campaigns.</p>
        </section>

        <section>
          <h2>3. Types of Cookies We Use</h2>
          <div className="cookie-types">
            <div className="cookie-type">
              <h4>Session Cookies</h4>
              <p>Temporary cookies that expire when you close your browser. Used for basic website functionality.</p>
            </div>
            <div className="cookie-type">
              <h4>Persistent Cookies</h4>
              <p>Cookies that remain on your device for a set period. Used to remember your preferences and improve your experience.</p>
            </div>
            <div className="cookie-type">
              <h4>Third-Party Cookies</h4>
              <p>Cookies set by third-party services we use, such as analytics providers and payment processors.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>4. Managing Cookies</h2>
          <p>You can control and manage cookies in several ways:</p>
          <ul>
            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
            <li><strong>Cookie Preferences:</strong> Use our cookie preference center to manage your preferences</li>
            <li><strong>Opt-Out:</strong> You can opt-out of non-essential cookies while keeping essential ones</li>
          </ul>
        </section>

        <section>
          <h2>5. Impact of Disabling Cookies</h2>
          <p>If you disable cookies, some features of our website may not function properly, including:</p>
          <ul>
            <li>Shopping cart functionality</li>
            <li>User account features</li>
            <li>Personalized content</li>
            <li>Order tracking</li>
          </ul>
        </section>

        <section>
          <h2>6. Updates to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>If you have questions about our use of cookies, please contact us at:</p>
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

export default CookiePolicy;
