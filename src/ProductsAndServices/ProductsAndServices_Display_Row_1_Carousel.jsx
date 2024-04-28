import React, {useContext, useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './productsandservices_display_row_1_carousel.css';
import { ProductContext,
    // ProductProvider
   } from './ProductContext.jsx';
import UseFetchProducts from './UseFetchProducts';
// import { Link } from 'react-router-dom';
 


export const ProductsAndServices_Display_Row_1_Carousel = () => {
    const { row1productIds} = useContext(ProductContext);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const products = UseFetchProducts();

    console.log(row1productIds);

    useEffect(() => {
        const filteredProducts = products.filter(product => row1productIds.includes(product.id));
        setSelectedProducts(filteredProducts);
        console.log('filteredProducts-Row1:', row1productIds, filteredProducts);
    }, [products, row1productIds]);

    const divStyle = {
        justifyContent:'center',
        marginTop: '0px, auto',
        marginLeft: '30px',
        display: 'flex',
        alignItems: 'center',
        height: '60vh',
        backgroundSize: '110%',
         /* scale the image to fill the container */
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '60% 0%', //shifts the image to the right
        // backgroundPosition: 'center',
        width: '95%',
        backgroundBlendMode: 'multiply',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1))',
        color: '#f2f2f2',
        fontSize: '30px',
        textTransform: 'uppercase',
        letterSpacing: '8px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '28px',
        textAlign: 'center',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        opacity: '0.8',
        zIndex:'998',
    }

 
    const spanStyle = {
        padding: '30px',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '4px',
    }

    return (
        // <ProductProvider>
        <div>
            <Slide>
                {selectedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="divStyle"
                        style={{ ...divStyle, backgroundImage: `url(${product.image})` }}
                    >
                         {/* <Link to="/ProductsAndServices_Display_Row_1_Carousel_Listing"> */}
                        <span className="spanStyle" style={spanStyle}>
                            {product.name}
                        </span>
                        {/* </Link> */}
                    </div>
                ))}
            </Slide>
        </div>
        // </ProductProvider>
    );
}

export default ProductsAndServices_Display_Row_1_Carousel;