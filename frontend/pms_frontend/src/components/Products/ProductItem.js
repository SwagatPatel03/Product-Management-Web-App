import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, onDelete }) => {
  //To display stars for rating
  const renderRating = (rating) => {
    const starCount = 5;
    const stars = [];
    
    for (let i = 1; i <= starCount; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? '#ffc107' : '#e4e5e9' }}>
          ★
        </span>
      );
    }
    
    return <div className="product-rating">{stars} ({rating})</div>;
  };

  return (
    <div className="product-item">
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {renderRating(product.rating)}
        
        <div className="product-actions">
          <Link to={`/products/edit/${product._id}`} className="btn">
            Edit
          </Link>
          <button onClick={() => onDelete(product._id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;