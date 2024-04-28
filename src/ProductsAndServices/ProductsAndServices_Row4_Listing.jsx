import React, {useContext, useEffect, useState } from 'react';
    import './productsandservices_display_row_3_slider.css';
    import { ProductContext,
        // ProductProvider
       } from './ProductContext.jsx';
    import UseFetchProducts from './UseFetchProducts';
    
    const ProductsAndServices_Row4_Listing = () => {
      const { row4productIds} = useContext(ProductContext);
        const [selectedProducts, setSelectedProducts] = useState([]); 
        const products = UseFetchProducts();
        
        useEffect(() => {
            const filteredProducts = products.filter(product => row4productIds.includes(product.id)); // Filter the products based on the ids
            setSelectedProducts(filteredProducts);
        }, [products, row4productIds]);

   return (

//  <ProductProvider>
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
    
// </ProductProvider>
 
)
}

export default ProductsAndServices_Row4_Listing