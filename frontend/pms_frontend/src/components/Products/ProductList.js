import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../../utils/api';
import ProductItem from './ProductItem';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    search: '',
    page: 1,
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  useEffect(() => {
    if (location.state?.refresh) {
      fetchProducts();
      // Clear the state after refreshing
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts(filters);
      setProducts(data.products);
      setPagination({
        currentPage: data.page,
        totalPages: data.pages,
        totalItems: data.total,
      });
    } catch (error) {
      setError('Failed to fetch products');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        console.log("Deleting product with ID:", id); // Log the ID to verify it's correct
        await deleteProduct(id);
        fetchProducts();
      } catch (error) {
        console.error("Delete error details:", error.response?.data || error.message);
        setError(error.response?.data?.message || 'Failed to delete product');
      }
    }
  };

  return (
    <div className="product-list">
      <div className="list-header">
        <h2>Products</h2>
        <Link to="/products/create" className="btn-add">
          Add New Product
        </Link>
      </div>

      <div className="filters">
        <div className="filter-item">
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-item">
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <div className="filter-item">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-item">
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-item">
          <select
            name="minRating"
            value={filters.minRating}
            onChange={handleFilterChange}
          >
            <option value="">All Ratings</option>
            <option value="1">1+ Stars</option>
            <option value="2">2+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="4">4+ Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              onDelete={() => handleDelete(product._id)}
            />
          ))}
        </div>
      )}

      {pagination.totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          <button
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;