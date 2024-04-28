import React, {useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './productsandservices_display_row_2_cardsx4.css'
import { ProductContext,
    // ProductProvider
   } from './ProductContext.jsx';
import UseFetchProducts from './UseFetchProducts';



const ProductsAndServices_Display_Row_2_cardsx4 = () => {
    const { row2productIds} = useContext(ProductContext);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const products = UseFetchProducts();
  
  useEffect(() => {
      const filteredProducts = products.filter(product => row2productIds.includes(product.id)); // Filter the products based on the ids
      setSelectedProducts(filteredProducts);
      console.log('filteredProducts-Row2:',row2productIds, filteredProducts);
  }, [products, row2productIds]);
  
  return (
    // <ProductProvider>
    <>
        <div className='productsandservices_row2_container'>
            <div className='productsandservices_display_row_2_card'>
                {selectedProducts.map(product => (
                    <div key={product.id} className="page__row">
                        <Link to={`/ProductsAndServices_Display_Row_2_Listing"/${product.category}` } key={product.category} >   
                        <div className='container_row_2_cardsx4'>
                            <div key={product.id}>
                                <div className="box_single">
                                    <div className="content">
                                        <h3>{product.category}</h3>
                                    </div>
                                    <img src={product.image} alt={product.name} />
                                    <div><h3>{product.name}</h3></div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
    // </ProductProvider>
)
}
export default ProductsAndServices_Display_Row_2_cardsx4;