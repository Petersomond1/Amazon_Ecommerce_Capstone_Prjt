import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAdmin, ...props }) => {
  return isAdmin ? <Route {...props} /> : <Navigate to="/" />;
};

export default PrivateRoute;