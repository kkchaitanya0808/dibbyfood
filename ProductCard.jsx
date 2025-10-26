import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="category-badge">{product.category}</div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-specs">
          <div className="spec-item">
            <span className="product-info-label">Net Weight:</span>
            <span className="product-info-value">{product.netWeight}</span>
          </div>
          <div className="spec-item">
            <span className="product-info-label">Shelf Life:</span>
            <span className="product-info-value">{product.shelfLife}</span>
          </div>
        </div>
        
        <div className="product-footer">
          <span className="price">${product.price}</span>
          <button className="order-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
