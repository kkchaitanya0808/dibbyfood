import React, { useState } from 'react';
import { getOrderMenuItems } from '../data/productsData';
import './OrderPage.css';

function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    items: [],
    total: 0
  });

  const menuItems = getOrderMenuItems();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addItem = (item) => {
    const existingItem = formData.items.find(i => i.id === item.id);
    if (existingItem) {
      setFormData({
        ...formData,
        items: formData.items.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
        total: formData.total + item.price
      });
    } else {
      setFormData({
        ...formData,
        items: [...formData.items, { ...item, quantity: 1 }],
        total: formData.total + item.price
      });
    }
  };

  const removeItem = (itemId) => {
    const item = formData.items.find(i => i.id === itemId);
    if (item.quantity > 1) {
      setFormData({
        ...formData,
        items: formData.items.map(i => 
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        ),
        total: formData.total - item.price
      });
    } else {
      setFormData({
        ...formData,
        items: formData.items.filter(i => i.id !== itemId),
        total: formData.total - item.price
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! We will contact you soon.');
  };

  return (
    <div className="order-page">
      <h2>Bulk Order Form</h2>
      
      <div className="order-container">
        <div className="menu-section">
          <h3>Available Products</h3>
          <div className="menu-grid">
            {menuItems.map(item => (
              <div key={item.id} className="menu-item">
                <h4>{item.name}</h4>
                <p className="category-info">{item.category}</p>
                <p className="weight-info">Net Weight: {item.netWeight}</p>
                <p className="price-info">${item.price}</p>
                <button onClick={() => addItem(item)}>Add to Order</button>
              </div>
            ))}
          </div>
        </div>

        <div className="order-summary">
          <h3>Your Order</h3>
          {formData.items.length === 0 ? (
            <p>No items in your order yet</p>
          ) : (
            <div className="order-items">
              {formData.items.map(item => (
                <div key={item.id} className="order-item">
                  <span>{item.name} x{item.quantity}</span>
                  <div className="item-controls">
                    <button onClick={() => removeItem(item.id)}>-</button>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
              <div className="total">
                <strong>Total: ${formData.total.toFixed(2)}</strong>
              </div>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="order-form">
        <h3>Business Information</h3>
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your company name"
            required
          />
        </div>
        <div className="form-group">
          <label>Business Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your business email"
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div className="form-group">
          <label>Delivery Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter complete delivery address for bulk order"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Bulk Order</button>
      </form>
    </div>
  );
}

export default OrderPage;
