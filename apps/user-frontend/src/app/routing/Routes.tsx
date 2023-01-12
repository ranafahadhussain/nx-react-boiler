import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
const NxWelcome = React.lazy(() => import('./../nx-welcome'));
const Login = React.lazy(() => import('./../views/Auth/Login/'));
const Home = React.lazy(() => import('./../views/Home'));

const routes = createBrowserRouter([
  
  {
    path: '/',
    element: <NxWelcome />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path : "/dashboard",
    element : (
        <ProtectedRoute>
            <Home />
        </ProtectedRoute>
    )
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
export default routes;
