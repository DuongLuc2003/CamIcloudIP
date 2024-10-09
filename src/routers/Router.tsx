import React from 'react';
import { Navigate } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import LayoutAdmin from '../components/Layouts/LayoutAdmin/LayoutAdmin.tsx';
import Dashboard from '../pages/admin/dashbroad/index.tsx';
import AdminUser from '../features/auth/index.tsx';
import Layout from '../components/Layouts/LayoutWebsite/Layout.tsx';

export const router = createBrowserRouter([
  {
    path: '/camIcloudIP/', // Sửa thành base URL của bạn
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="home" /> }, // Đường dẫn tương đối
      { path: 'home', element: <Home /> }, // Đường dẫn tương đối
    ],
  },
  {
    path: '/camIcloudIP/admin', // Sửa thành base URL của bạn
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> }, // Đường dẫn tương đối
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'user', element: <AdminUser /> },
    ],
  },
]);
