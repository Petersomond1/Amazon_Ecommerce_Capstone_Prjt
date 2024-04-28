import React, {useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productsandservices_display_row_3_slider.css';
import { ProductContext,
  // ProductProvider
 } from './ProductContext.jsx';
import UseFetchProducts from './UseFetchProducts';

const ProductsAndServices_Display_Row_3_Slider = () => {
  const { row3productIds } = useContext(ProductContext);
  const products = UseFetchProducts();
  const [selectedProducts, setSelectedProducts] = useState([]); 
  

  useEffect(() => {
      const filteredProducts = products.filter(product => row3productIds.includes(product.id)); // Filter the products based on the ids
      setSelectedProducts(filteredProducts);
      console.log('filteredProducts-Row3:', row3productIds, filteredProducts);
  }, [products, row3productIds]);

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

export default ProductsAndServices_Display_Row_3_Slider;