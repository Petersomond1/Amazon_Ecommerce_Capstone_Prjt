import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbarup from './Navbarup/Navbarup';
import AppLayout from './AppLayout';
import Navbardown from './Navbardown/Navbardown';
import Footer from './Footer/Footer';
import ProductsAndServices_Display_Row_1_Carousel_Listing from './ProductsAndServices/ProductsAndServices_Display_Row_1_Carousel_Listing';
import ProductsAndServices_Display_Row_2_Listing from './ProductsAndServices/ProductsAndServices_Display_Row_2_Listing';
import ProductsAndServices_Display_Row_3_Slider from './ProductsAndServices/ProductsAndServices_Display_Row_3_Slider';
import ProductsAndServices_Display_Row_4_Slider from './ProductsAndServices/ProductsAndServices_Display_Row_4_Slider';
import ProductsAndServices_Display_Row_5_Cardsx10 from './ProductsAndServices/ProductsAndServices_Display_Row_5_cardsx10';
import ProductsAndServices_Display_Row_6_Livestream_n_Slider from './ProductsAndServices/ProductsAndServices_Display_Row_6_Livestream_n_Slider'
import AdminDashboard from './ProductsAndServices/AdminDashboard';
import ProductPage from './ProductPage';
import PrivateRoute from './PrivateRoute';


function App() {
  const isAdmin = checkIfUserIsAdmin(); // Replace this with your admin check
  return (
   
    <BrowserRouter>
        <Navbarup/>
        <Navbardown /> 
        <Routes>
          <Route element={<AppLayout />}></Route>
          <Route path="/" element={<ProductPage />}></Route>
        <PrivateRoute path="/admindashboard" element={<AdminDashboard />} isAdmin={isAdmin} />
          <Route path="ProductsAndServices_Display_Row_1_Carousel_Listing" element={<ProductsAndServices_Display_Row_1_Carousel_Listing/>}></Route>
          <Route path="/ProductsAndServices_Display_Row_2_Listing/:category" element={<ProductsAndServices_Display_Row_2_Listing />}></Route>
          <Route path="/ProductsAndServices_Display_Row_3_Slider" element={<ProductsAndServices_Display_Row_3_Slider />}></Route>
          <Route path="/ProductsAndServices_Display_Row_4_Slider" element={<ProductsAndServices_Display_Row_4_Slider />}></Route>
          <Route path="/ProductsAndServices_Display_Row_5_Cardsx10" element={<ProductsAndServices_Display_Row_5_Cardsx10/>}></Route>
          <Route path="/ProductsAndServices_Display_Row_6_Livestream_n_Slider" element={<ProductsAndServices_Display_Row_6_Livestream_n_Slider/>}></Route>
          <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;






