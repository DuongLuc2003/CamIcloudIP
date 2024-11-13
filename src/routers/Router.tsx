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
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> }, // Đường dẫn tương đối
    ],
  },
  {
    path: '/admin', // Sửa thành base URL của bạn
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> }, // Đường dẫn tương đối
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'user', element: <AdminUser /> },
    ],
  },
]);
