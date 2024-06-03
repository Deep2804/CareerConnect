import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  const location = useLocation();
  
  // Define an array of paths where the Header should not be shown
  const noHeaderPaths = ['/dashboard'];

  // Determine if the current path is in the noHeaderPaths array
  const showHeader = !noHeaderPaths.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
