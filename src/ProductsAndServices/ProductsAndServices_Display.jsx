// ProductsAndServices_Display.jsx
import React, { useContext } from "react";
import ProductsAndServices_Display_Row_1_Carousel from "./ProductsAndServices_Display_Row_1_Carousel";
import ProductsAndServices_Display_Row_2_cardsx4 from "./ProductsAndServices_Display_Row_2_cardsx4";
import "./productsandservices_display.css";
import ProductsAndServices_Display_Row_3_Slider from "./ProductsAndServices_Display_Row_3_Slider";
import ProductsAndServices_Display_Row_4_Slider from "./ProductsAndServices_Display_Row_4_Slider";
import ProductsAndServices_Display_Row_5_cardsx10 from "./ProductsAndServices_Display_Row_5_cardsx10";
import ProductsAndServices_Display_Row_6_Livestream_n_Slider from './ProductsAndServices_Display_Row_6_Livestream_n_Slider';
import {Link} from 'react-router-dom';
import { ProductContext } from './ProductContext.jsx';

export const ProductsAndServices_Display = () => {
  const { row1productIds, row2productIds, row3productIds, row4productIds, row5productIds, row6productIds, row6videoIds } = useContext(ProductContext);

  return (
    <div className="productsandservices_display_container">
      <div className="productsandservices_display_container_carousel">
        <Link to={`ProductsAndServices_Display_Row_1_Carousel_Listing`}> 
          <ProductsAndServices_Display_Row_1_Carousel />
        </Link>
      </div>
      <div className="productsandservices_display_rows">
        <ProductsAndServices_Display_Row_2_cardsx4 />
        <br />
        <ProductsAndServices_Display_Row_3_Slider />
        <br />
        <ProductsAndServices_Display_Row_4_Slider />
        <br />
        <ProductsAndServices_Display_Row_5_cardsx10 />
        <ProductsAndServices_Display_Row_6_Livestream_n_Slider/>
      </div>
    </div>
  );
};

export default ProductsAndServices_Display;