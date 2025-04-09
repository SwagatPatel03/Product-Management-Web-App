import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '../components/Products/ProductForm';
import { getProductById, updateProduct } from '../utils/api';

const ProductEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError('Failed to fetch product details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (productData) => {
    await updateProduct(id, productData);
    navigate('/products');
  };

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="form-container">
      <ProductForm product={product} onSubmit={handleSubmit} isEdit={true} />
    </div>
  );
};

export default ProductEditPage;