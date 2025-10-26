import React from 'react';
import './LegalPage.css';

function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using DibbyFood's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section>
          <h2>2. Products and Services</h2>
          <p>DibbyFood specializes in premium canned food products including:</p>
          <ul>
            <li>Canned vegetables and fruits</li>
            <li>Canned legumes and beans</li>
            <li>Canned seafood products</li>
            <li>Bulk order processing and delivery</li>
          </ul>
        </section>

        <section>
          <h2>3. Orders and Payment</h2>
          <h3>3.1 Order Processing</h3>
          <p>All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order.</p>
          
          <h3>3.2 Pricing</h3>
          <p>Prices are subject to change without notice. All prices are in USD and exclude applicable taxes and shipping fees.</p>
          
          <h3>3.3 Payment Terms</h3>
          <p>Payment is due upon order confirmation. We accept major credit cards and business accounts for bulk orders.</p>
        </section>

        <section>
          <h2>4. Delivery and Shipping</h2>
          <p>Delivery times are estimates and may vary based on location and order size. DibbyFood is not responsible for delays caused by shipping carriers or circumstances beyond our control.</p>
        </section>

        <section>
          <h2>5. Product Quality and Safety</h2>
          <p>All DibbyFood products are manufactured in compliance with FDA regulations and food safety standards. Products are sealed and have extended shelf lives as indicated on packaging.</p>
        </section>

        <section>
          <h2>6. Returns and Refunds</h2>
          <p>Returns are accepted within 30 days of delivery for unopened products in original packaging. Refunds will be processed within 5-7 business days after return approval.</p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>DibbyFood's liability is limited to the purchase price of the products. We are not liable for any indirect, incidental, or consequential damages.</p>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of DibbyFood and protected by copyright laws.</p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>These terms are governed by the laws of the State of Processing City, without regard to conflict of law principles.</p>
        </section>

        <section>
          <h2>10. Contact Information</h2>
          <p>For questions about these Terms of Service, contact us at:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> legal@dibbyfood.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> DibbyFood Inc., 123 Food Street, Processing City, PC 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TermsOfService;
