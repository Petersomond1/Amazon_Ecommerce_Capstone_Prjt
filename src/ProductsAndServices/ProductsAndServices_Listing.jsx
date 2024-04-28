import React, {useContext, useEffect, useState } from 'react';
import { ProductContext,
    // ProductProvider
   } from './ProductContext.jsx';
import './productsandservices_display_row_1_carousel.css';
import './productsandservices_display_row_2_cardsx4.css'
import {Link} from 'react-router-dom';
import products from './UseFetchProducts';

 
// This is a general listing for all row 3-6 products and services and output of clicking this gives single product display.
// This should have the capability to accept different productIds row3productIds, row4productIds, row5productIds, row6productIds and displaying them.


const ProductsAndServices_Listing = () => {
    const { row1productIds, row2productIds, row3productIds, row4productIds, row5productIds, row6productIds, row6videoIds } = useContext(ProductContext);

    const { products } = useContext(ProductContext);
    const [selectedProducts, setSelectedProducts] = useState([]); // Provide initial state
   
    useEffect(() => {
        const filteredProducts = products.filter(product => selectedProducts.includes(product.id)); // Filter the products based on the ids
        setSelectedProducts(filteredProducts);
    }, [products]);
  
      return (
        // <ProductProvider>
    <>
        <div className='container'>
{selectedProducts.map((product) => {
    return (
      
      <div key={product.id}>
        <Link to={`/ProductsAndServices_SingleDisplay/${product.id}`} key={product.id}>
      <div className="box_1">
          <div className="content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
          </div>
           <img src={product.image} alt={product.title} />
      </div>
      </Link>
   </div>
    )
})}
 </div>
 </>
    // </ProductProvider>
  )
}
export default ProductsAndServices_Listing