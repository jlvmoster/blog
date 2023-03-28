import React from 'react';

import Header from './header';
import Footer from './footer';

const Layout = ({ pathname, children }) => (
  <div className='bg-gray-800 min-h-screen flex flex-col'>
    <Header pathname={pathname} />
    <div className='flex-grow'>{children}</div>
    <Footer />
  </div>
);

export default Layout;
