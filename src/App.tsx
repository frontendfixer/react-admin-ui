/* eslint-disable import/no-extraneous-dependencies */
import './styles/global.scss';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Product from './pages/products/Products';
import Users from './pages/users/Users';

function Layout() {
  return (
    <main className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/product',
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
