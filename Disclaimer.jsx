import React from 'react';
import './LegalPage.css';

function Disclaimer() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Disclaimer</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>1. General Information</h2>
          <p>The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, DibbyFood excludes all representations, warranties, conditions and terms relating to our website and the use of this website.</p>
        </section>

        <section>
          <h2>2. Product Information</h2>
          <p>While we strive to provide accurate product information, including nutritional facts, ingredients, and shelf life, we cannot guarantee that all information is completely accurate or up-to-date. Always check product labels for the most current information.</p>
        </section>

        <section>
          <h2>3. Food Safety</h2>
          <p>All DibbyFood products are manufactured in compliance with FDA regulations and food safety standards. However, consumers should:</p>
          <ul>
            <li>Check expiration dates before consumption</li>
            <li>Store products according to package instructions</li>
            <li>Discard any products that appear damaged or compromised</li>
            <li>Consult healthcare providers for specific dietary needs</li>
          </ul>
        </section>

        <section>
          <h2>4. Allergen Information</h2>
          <p>Our products may contain allergens including but not limited to:</p>
          <ul>
            <li>Nuts and tree nuts</li>
            <li>Dairy products</li>
            <li>Soy and soy products</li>
            <li>Wheat and gluten</li>
            <li>Fish and shellfish</li>
          </ul>
          <p>Always read product labels carefully and consult with healthcare providers if you have food allergies.</p>
        </section>

        <section>
          <h2>5. Nutritional Information</h2>
          <p>Nutritional information provided is approximate and may vary based on natural variations in ingredients. For precise nutritional information, always refer to the product label.</p>
        </section>

        <section>
          <h2>6. External Links</h2>
          <p>Our website may contain links to external websites. We are not responsible for the content, privacy policies, or practices of these external sites.</p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>DibbyFood shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from:</p>
          <ul>
            <li>Use or inability to use our products</li>
            <li>Unauthorized access to or alteration of your data</li>
            <li>Any other matter relating to our products or services</li>
          </ul>
        </section>

        <section>
          <h2>8. Professional Advice</h2>
          <p>The information on this website is not intended as medical, nutritional, or professional advice. Always consult with qualified healthcare professionals for advice regarding your specific health and dietary needs.</p>
        </section>

        <section>
          <h2>9. Changes to Disclaimer</h2>
          <p>We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on this website.</p>
        </section>

        <section>
          <h2>10. Contact Information</h2>
          <p>If you have questions about this disclaimer, please contact us at:</p>
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

export default Disclaimer;
