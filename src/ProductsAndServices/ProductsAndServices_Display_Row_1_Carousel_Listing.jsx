import React, {useContext, useEffect, useState } from 'react';
import './productsandservices_display_row_1_carousel.css';
import './productsandservices_display_row_2_cardsx4.css'
import {Link} from 'react-router-dom';
import { ProductContext,
  // ProductProvider
 } from './ProductContext.jsx';
import UseFetchProducts from './UseFetchProducts';


// Make this be a slider listing carousel products

const ProductsAndServices_Display_Row_1_Carousel_Listing = () => {

    const { row1productIds} = useContext(ProductContext);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const products = UseFetchProducts();

    useEffect(() => {
        const filteredProducts = products.filter(product => row1productIds.includes(product.id));
        setSelectedProducts(filteredProducts);
        console.log('filteredProducts-Row1-listing:', filteredProducts);
    }, [products, row1productIds]);
  
      return (

    <>
 {/* <ProductProvider> */}
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
    {/* </ProductProvider>    */}
 </>
    
  )
}

export default ProductsAndServices_Display_Row_1_Carousel_Listing