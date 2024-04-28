import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productsandservices_display_row_2_cardsx4.css";
import UseFetchProducts from './UseFetchProducts';

const ProductsAndServices_SingleDisplay = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const products = UseFetchProducts();
  console.log(product, id)

  useEffect(() => {
    const selectedProduct = products.find(product => product.id === Number(id));
    setProduct(selectedProduct);
    
  }, [products, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container_row_2_cardsx4">
      <div key={product.id}>
        <div className="box_single">
          <div className="content">
            <h3>{product.category}</h3>
          </div>
          <img src={product.image} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices_SingleDisplay;
