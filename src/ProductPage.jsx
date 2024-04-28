// ProductPage.jsx
import React from 'react';
import { ProductProvider } from './ProductsAndServices/ProductContext.jsx';
import ProductsAndServices_Display from './ProductsAndServices/ProductsAndServices_Display';
import AdminDashboard from './ProductsAndServices/AdminDashboard';

const ProductPage = () => {
  return (
    <ProductProvider>
      <ProductsAndServices_Display />
      <AdminDashboard />
    </ProductProvider>
  );
};

export default ProductPage;