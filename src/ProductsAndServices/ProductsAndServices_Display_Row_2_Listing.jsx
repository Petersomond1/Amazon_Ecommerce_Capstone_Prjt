import React, {useContext, useEffect, useState } from 'react';
import { ProductContext,
    // ProductProvider
   } from './ProductContext.jsx';
import './productsandservices_display_row_1_carousel.css';
import './productsandservices_display_row_2_cardsx4.css'
import {Link} from 'react-router-dom';
// import row2productIds from './AdminDashboard';
// import products from './UseFetchProducts';
import { useParams } from 'react-router-dom';

// Make this to be a slider listing carousel products and output of clicking this gives single product display

const ProductsAndServices_Display_Row_2_Listing = () => {
    const {row2productIds } = useContext(ProductContext);
    const [selectedProducts, setSelectedProducts] = useState([]); // Provide initial state
    const { category } = useParams();
    const products = UseFetchProducts();

    useEffect(() => {
        const filteredProducts = products.filter(product => product.category === category); // Filter the products based on the products category
        setSelectedProducts(filteredProducts);
    }, []);
  
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
//  </ProductProvider>  
  )
}

export default ProductsAndServices_Display_Row_2_Listing