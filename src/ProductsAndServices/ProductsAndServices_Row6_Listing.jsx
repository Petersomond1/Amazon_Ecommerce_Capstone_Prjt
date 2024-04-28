    import React, {useContext, useEffect, useState } from 'react';
    import './productsandservices_display_row_6_livestream_n_slider.css';
    import { ProductContext,
        // ProductProvider
       } from './ProductContext.jsx';
    import UseFetchProducts from './UseFetchProducts';
    // import { row6productIds, row6videoIds } from './AdminDashboard'
    // import { row6productIds, row6videoIds } from './ProductContext';
    // import products from './UseFetchProducts';
    
    const ProductsAndServices_Row6_Listing = () => {
        const { row6productIds, row6videoIds  } = useContext(ProductContext);
        const [selectedProducts, setSelectedProducts] = useState([]);
        const products = UseFetchProducts();
       
        useEffect(() => {
            const filteredProducts = products.filter(product => row6productIds.includes(product.id)); // Filter the products based on the ids
            setSelectedProducts(filteredProducts);
        }, [products, row6productIds, row6videoIds]);

   return (
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
)
}

export default ProductsAndServices_Row6_Listing