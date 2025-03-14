// Service for handling product-related API calls and business logic

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

export const productService = {
  createProduct: async (productData) => {
    try {
      const formData = new FormData();
      
      // Append product data
      Object.keys(productData).forEach(key => {
        if (key === 'images') {
          productData[key].forEach(image => {
            formData.append('images', image);
          });
        } else {
          formData.append(key, productData[key]);
        }
      });

      const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  getProducts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getProductById: async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }
};