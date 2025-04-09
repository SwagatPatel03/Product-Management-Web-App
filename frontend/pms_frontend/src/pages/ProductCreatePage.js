import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/Products/ProductForm';
import { createProduct } from '../utils/api';

const ProductCreatePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (productData) => {
    await createProduct(productData);
    navigate('/products', { state: { refresh: true } });
  };

  return (
    <div className="form-container">
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ProductCreatePage;