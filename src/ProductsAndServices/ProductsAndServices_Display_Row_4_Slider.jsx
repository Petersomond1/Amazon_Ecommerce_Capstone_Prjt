import React, {useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productsandservices_display_row_3_slider.css';
import { ProductContext,
  // ProductProvider
 } from './ProductContext.jsx';
import UseFetchProducts from './UseFetchProducts';

const ProductsAndServices_Display_Row_4_Slider = () => {
  const { row4productIds} = useContext(ProductContext);
    const [selectedProducts, setSelectedProducts] = useState([]); 
    const products = UseFetchProducts();
    
    useEffect(() => {
        const filteredProducts = products.filter(product => row4productIds.includes(product.id)); // Filter the products based on the ids
        setSelectedProducts(filteredProducts);

        console.log(row4productIds);
    }, [products, row4productIds]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    // <ProductProvider>
    <div className='carousel-container_row3'>
      <Slider {...sliderSettings}>
        {selectedProducts.map((product, id) => (
          <div key={id}>
            <span>text1</span>
            <img src={product.image} alt={product.name}  />
            <p>text2</p>
          </div>
        ))}
      </Slider>
    </div>
    // </ProductProvider>
  );
};

export default ProductsAndServices_Display_Row_4_Slider



        // In these settings:
// 
        // dots: true enables navigation dots under the slider.
        // infinite: true makes the slider infinite.
        // speed: 500 sets the speed of the slide transition in milliseconds.
        // slidesToShow: 4 makes the slider show four images at a time.
        // slidesToScroll: 8 makes the slider scroll eight images at a time.
        // Use the Slider component in your render method and pass the settings as a prop:       


