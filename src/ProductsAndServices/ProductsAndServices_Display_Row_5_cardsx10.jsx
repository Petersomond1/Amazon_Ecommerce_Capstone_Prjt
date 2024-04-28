import React, {useContext, useEffect, useState } from 'react';
import { ProductContext,
    // ProductProvider
   } from './ProductContext.jsx';
import './productsandservices_display_row_5_cardsx10.css';
// import row5productIds from './AdminDashboard';
// import products from './UseFetchProducts';
import UseFetchProducts from './UseFetchProducts';

const ProductsAndServices_Display_Row_5_cardsx10 = () => {
    const { row5productIds } = useContext(ProductContext);
    const products = UseFetchProducts();
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const filteredProducts = products.filter(product => row5productIds.includes(product.id));
        setSelectedProducts(filteredProducts);
        console.log(row5productIds);

    }, [products, row5productIds]);

 return (
    // <ProductProvider>
        <div className='container'>
            {selectedProducts.map((product, index) => (
                <div key={index} className="box_single">
                    <img src={product.image} alt={`Product ${index + 1}`} style={getStyle(index)} />
                </div>
            ))}
        </div>
    // </ProductProvider>
    )
}

const getStyle = (index) => {
    switch(index) {
        case 1:
            return { height: '80%', width: '100%' };
        case 2:
        case 3:
        case 4:
            return { height: '100%', width: '30%' };
        case 6:
        case 7:
        case 8:
        case 9:
            return { height: '80%', width: '50%' };
        default:
            return {};
    }
}

export default ProductsAndServices_Display_Row_5_cardsx10;



//     const image1 = selectedProducts.map((product, index) => {product.image[index]});
//     const image2 = selectedProducts.map((product, index) => {product.image[index]});
//     const image3 = selectedProducts.map((product, index) => {product.image[index]});
//     const image4 = selectedProducts.map((product, index) => {product.image[index]});
//     const image5 = selectedProducts.map((product, index) => {product.image[index]});
//     const image6 = selectedProducts.map((product, index) => {product.image[index]});
//     const image7 = selectedProducts.map((product, index) => {product.image[index]});
//     const image8 = selectedProducts.map((product, index) => {product.image[index]});
//     const image9 = selectedProducts.map((product, index) => {product.image[index]});
//     const image10 = selectedProducts.map((product, index) => {product.image[index]});

//   return (
//     <div className='container'>
//       <div className="box_single">
//         <img src={image1} alt="Product 1" />
//       </div>

//     <div className="box_single">
//      <span> <img src={image2} alt="Product 2" style={{ height: '80%', width: '100%' }}/></span>
//         <span className='image3_row'>
//             <img src={image3} alt="Product 3" style={{ height: '100%', width: '30%' }}/>
//             <img src={image4} alt="Product 4" style={{ height: '100%', width: '30%' }}/>
//             <img src={image5} alt="Product 5" style={{ height: '100%', width: '30%' }}/>
//         </span>
//     </div>

//       <div className="box_single">
//         <img src={image6} alt="Product 6" />
//       </div>

//       <div className="box_single">
//         <div className='img2by2'>
//           <img src={image7} alt="Product 7" style={{height:'80%', width:'50%'}}/>
//           <img src={image8} alt="Product 8" style={{height:'80%', width:'50%'}}/>
//         </div>
//         <div className='img2by2'>
//           <img src={image9} alt="Product 9" style={{height:'80%', width:'50%'}}/>
//           <img src={image10} alt="Product 10" style={{height:'80%', width:'50%'}}/>
//         </div>
//       </div>
//     </div>
//   )
// }