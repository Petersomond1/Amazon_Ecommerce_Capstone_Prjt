import React, {useState } from "react";
import { ProductContext } from './ProductContext.jsx';
import './admindashboard-css.css';


function AdminDashboard() {
  const [row1productIds, setRow1productIds] = useState([1, 2, 3, 4, 5]);
  const [row2productIds, setRow2productIds] = useState([8, 9, 10, 11, 12, 13, 14, 15]);
  const [row3productIds, setRow3productIds] = useState([16, 17, 18, 19, 20]);
  const [row4productIds, setRow4productIds] = useState([21, 22, 23, 24, 25]);
  const [row5productIds, setRow5productIds] = useState([29, 30, 31, 32, 33, 34, 35]);
  const [row6productIds, setRow6productIds] = useState([21, 22, 23, 24, 25]);
  const [row6videoIds, setRow6videoIds] = useState([1]);

  // ... other state variables ...
  const setProducts = (products) => {
    setRow1productIds(products.slice(0, 5).map(product => product.id).join(', '));
    setRow2productIds(products.slice(5, 13).map(product => product.id).join(', '));
    setRow3productIds(products.slice(13, 18).map(product => product.id).join(', '));
    setRow4productIds(products.slice(18, 23).map(product => product.id).join(', '));
    setRow5productIds(products.slice(23, 33).map(product => product.id).join(', '));
    setRow6productIds(products.slice(33, 38).map(product => product.id).join(', '));
    setRow6videoIds(products.slice(38, 43).map(product => product.id).join(', '));
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const rowIdMapping = {
      'Row_1_Carousel_productids': setRow1productIds,
      'Row_2_Cardproductids': setRow2productIds,
      'Row_3_Sliderproductids': setRow3productIds,
      'Row_4_Carousel_productids': setRow4productIds,
      'Row_5_Carousel_productids': setRow5productIds,
      'Row_6_Livestream_n_Sliderproductids': setRow6productIds,
      'Row_6_Livestream_n_SlidervideoIds': setRow6videoIds,
    };
  
    Object.keys(rowIdMapping).forEach(rowId => {
      const productIds = event.target.elements[rowId].value.split(/,\s*/).map(Number);
      rowIdMapping[rowId](productIds);

    });




  };

  return (
    <ProductContext.Provider value={{ row1productIds, row2productIds, row3productIds, row4productIds, row5productIds, row6productIds, row6videoIds, setProducts /* ... other state variables ... */ }}>
      <div className="admindashboard-container">
      <h3>Row1ProductIds: {row1productIds}</h3>
      <h3>Row2ProductIds: {row2productIds}</h3>
      <h3>Row3ProductIds: {row3productIds}</h3>
      <h3>Row4ProductIds: {row4productIds}</h3>
      <h3>Row5ProductIds: {row5productIds}</h3>
      <h3>Row6ProductIds: {row6productIds}</h3>
      <h3>Row6VideoIds: {row6videoIds}</h3>
    <form onSubmit={handleFormSubmit}>
         <input type="text" name="Row_1_Carousel_productids" placeholder="Row-1-Carousel" />
        <input type="text" name="Row_2_Cardproductids" placeholder="Row-2" />
        <input type="text" name="Row_3_Sliderproductids" placeholder="Row-3"/>
        <input type="text" name="Row_4_Sliderproductids" placeholder="Row-4"/>
        <input type="text" name="Row_5_Cardsproductids" placeholder="Row-5"/>
        <input type="text" name="Row_6_Livestream_n_Sliderproductids" placeholder="Row-6" />
        <input type="text" name="Row_6_Livestream_n_SlidervideoIds" placeholder="Row-6-videoIds" />
      {/* ... other inputs ... */}
      <button type="submit">Submit</button>
    </form>
    </div>
    </ProductContext.Provider>
  );
}

export default AdminDashboard;

// import React, {useState } from "react";
// import ProductContext from './ProductContext';
// import './admindashboard-css.css';

// function AdminDashboard() {
//   const [row1productIds, setRow1productIds] = useState([1, 2, 3, 4, 5]);
//   const [row2productIds, setRow2productIds] = useState([8, 9, 10, 11, 12, 13, 14, 15]);
//   const [row3productIds, setRow3productIds] = useState([16, 17, 18, 19, 20]);
//   const [row4productIds, setRow4productIds] = useState([21, 22, 23, 24, 25]);
//   const [row5productIds, setRow5productIds] = useState([29, 30, 31, 32, 33, 34, 35]);
//   const [row6productIds, setRow6productIds] = useState([21, 22, 23, 24, 25]);
//   const [row6videoIds, setRow6videoIds] = useState([1]);

//   // ... other state variables ...
//   const setProducts = (products) => {
//     setRow1productIds(products.slice(0, 5).map(product => product.id).join(', '));
//     setRow2productIds(products.slice(5, 13).map(product => product.id).join(', '));
//     setRow3productIds(products.slice(13, 18).map(product => product.id).join(', '));
//     setRow4productIds(products.slice(18, 23).map(product => product.id).join(', '));
//     setRow5productIds(products.slice(23, 33).map(product => product.id).join(', '));
//     setRow6productIds(products.slice(33, 38).map(product => product.id).join(', '));
//     setRow6videoIds(products.slice(38, 43).map(product => product.id).join(', '));
//   };
  
//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // setRow1productIds(event.target.elements.Row_1_Carousel_productids.value.split(",").map(Number));
//     // setRow2productIds(event.target.elements.Row_2_Cardproductids.value.split(",").map(Number));
//     // setRow3productIds(event.target.elements.Row_3_Sliderproductids.value.split(",").map(Number));
//     // setRow4productIds(event.target.elements.Row_4_Carousel_productids.value.split(",").map(Number));
//     // setRow5productIds(event.target.elements.Row_5_Carousel_productids.value.split(",").map(Number));
//     // setRow6productIds(event.target.elements.Row_6_Livestream_n_Sliderproductids.value.split(",").map(Number));
//     // // ... other setRowXproductIds calls ...
//     // setRow6videoIds(event.target.elements.Row_6_Livestream_n_SlidervideoIds.value.split(",").map(Number));

//     setRow1productIds(event.target.elements.Row_1_Carousel_productids.value.split(/,\s*/).map(Number));
//     setRow2productIds(event.target.elements.Row_2_Cardproductids.value.split(/,\s*/).map(Number));
//     setRow3productIds(event.target.elements.Row_3_Sliderproductids.value.split(/,\s*/).map(Number));
//     setRow4productIds(event.target.elements.Row_4_Carousel_productids.value.split(/,\s*/).map(Number));
//     setRow5productIds(event.target.elements.Row_5_Carousel_productids.value.split(/,\s*/).map(Number));
//     setRow6productIds(event.target.elements.Row_6_Livestream_n_Sliderproductids.value.split(/,\s*/).map(Number));
//     // ... other setRowXproductIds calls ...
//     setRow6videoIds(event.target.elements.Row_6_Livestream_n_SlidervideoIds.value.split(/,\s*/).map(Number));
  
// console.log('Row1productIds@Admin:', row1productIds);
// console.log('Row2productIds@Admin:', row2productIds);
// console.log('Row3productIds@Admin:', row3productIds);
// console.log('Row4productIds@Admin:', row4productIds);
// console.log('Row5productIds@Admin:', row5productIds);
// console.log('Row6productIds@Admin:', row6productIds);
// console.log('Row6videoIds@Admin:', row6videoIds);


//     // Clear the form
//     event.target.reset();
//   };

//   return (
//     <ProductContext.Provider value={{ row1productIds, row2productIds, row3productIds, row4productIds, row5productIds, row6productIds, row6videoIds, setProducts /* ... other state variables ... */ }}>
//       <div className="admindashboard-container">
//       <h3>Row1ProductIds: {row1productIds}</h3>
//       <h3>Row2ProductIds: {row2productIds}</h3>
//       <h3>Row3ProductIds: {row3productIds}</h3>
//       <h3>Row4ProductIds: {row4productIds}</h3>
//       <h3>Row5ProductIds: {row5productIds}</h3>
//       <h3>Row6ProductIds: {row6productIds}</h3>
//       <h3>Row6VideoIds: {row6videoIds}</h3>
//     <form onSubmit={handleFormSubmit}>
//          <input type="text" name="Row_1_Carousel_productids" placeholder="Row-1-Carousel" />
//         <input type="text" name="Row_2_Cardproductids" placeholder="Row-2" />
//         <input type="text" name="Row_3_Sliderproductids" placeholder="Row-3"/>
//         <input type="text" name="Row_4_Sliderproductids" placeholder="Row-4"/>
//         <input type="text" name="Row_5_Cardsproductids" placeholder="Row-5"/>
//         <input type="text" name="Row_6_Livestream_n_Sliderproductids" placeholder="Row-6" />
//         <input type="text" name="Row_6_Livestream_n_SlidervideoIds" placeholder="Row-6-videoIds" />
//       {/* ... other inputs ... */}
//       <button type="submit">Submit</button>
//     </form>
//     </div>
//     </ProductContext.Provider>
//   );
// }

// export default AdminDashboard;

