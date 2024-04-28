import React, {useContext, useEffect, useState } from 'react';
import YouTube from "react-youtube";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productsandservices_display_row_6_livestream_n_slider.css';
import { ProductContext,
  // ProductProvider
 } from './ProductContext.jsx';
import UseFetchProducts from './UseFetchProducts';
// import { row6productIds, row6videoIds } from './AdminDashboard'
// import { row6productIds, row6videoIds } from './ProductContext';
// import products from './UseFetchProducts';

function ProductsAndServices_Display_Row_6_Livestream_n_Slider() {
    const { row6productIds, row6videoIds  } = useContext(ProductContext);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const products = UseFetchProducts();
   
    useEffect(() => {
        const filteredProducts = products.filter(product => row6productIds.includes(product.id)); // Filter the products based on the ids
        setSelectedProducts(filteredProducts);

        console.log(row6productIds, row6videoIds)
    }, [products, row6productIds, row6videoIds]);

  const onPlayerReady = (event) => {
    const player = event.target;
    player.pauseVideo();
  };

  const onPlayerStateChange = (event) => {
    const player = event.target;
    if (player.getPlayerState() === 2) {
      player.pauseVideo();
    }
  };

  const options = {
    height: "400",
    width: "400",
    playerVars: {
      autoplay: 1,
      pauseVideo: true,
    },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
    <>
      <div className='video_row_container'>
        <div className='livestream_n_text'>
        <span>Amazon Live Stream</span>
        <p>Watch live streams of your favorite products and services</p>
        <div className='livestream_card'>
        {row6videoIds && row6videoIds.length > 0 && <YouTube videoId={row6videoIds[0]} opts={options} onReady={onPlayerReady} onStateChange={onPlayerStateChange} />}
        </div>
      </div>
      <div className='carousel-container_row6'>
        <Slider {...sliderSettings}>
        {selectedProducts.map((product) => (
    <div key={product.id}>
        <p>Text1</p>
        <img src={product.image} alt={product.name}  />
        <p>Text2</p>
    </div>
))}
        </Slider>
      </div>
      </div>
    </>
    // </ProductProvider>
  );
};

export default ProductsAndServices_Display_Row_6_Livestream_n_Slider;
         
// In these settings:
  // 
          // dots: true enables navigation dots under the slider.
          // infinite: true makes the slider infinite.
          // speed: 500 sets the speed of the slide transition in milliseconds.
          // slidesToShow: 4 makes the slider show four images at a time.
          // slidesToScroll: 8 makes the slider scroll eight images at a time.
          // Use the Slider component in your render method and pass the settings as a prop:       
