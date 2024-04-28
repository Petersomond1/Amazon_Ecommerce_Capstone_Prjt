// ProductContext.js
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [row1productIds, setRow1productIds] = useState([]);
  const [row2productIds, setRow2productIds] = useState([]);
  const [row3productIds, setRow3productIds] = useState([]);
  const [row4productIds, setRow4productIds] = useState([]);
  const [row5productIds, setRow5productIds] = useState([]);
  const [row6productIds, setRow6productIds] = useState([]);
  const [row6videoIds, setRow6videoIds] = useState([]);

  // Set the product and video ids here

  return (
    <ProductContext.Provider value={{ row1productIds, row2productIds, row3productIds, row4productIds, row5productIds, row6productIds, row6videoIds, setRow1productIds, setRow2productIds, setRow3productIds, setRow4productIds, setRow5productIds, setRow6productIds, setRow6videoIds }}>
      {children}
    </ProductContext.Provider>
  );
};