import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';

import useHeaderLinks from '../hooks/use-header-links';

const Links = ({ pathname }) => {
  const { headerLinks } = useHeaderLinks();
  return headerLinks.map(link => (
    <Link
      key={link.path}
      className={clsx(
        'px-3 py-2 rounded-md text-sm font-medium',
        link.path === pathname ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 text-gray-300 hover:text-white'
      )}
      to={link.path}
    >
      {link.name}
    </Link>
  ));
};

const Header = ({ pathname }) => (
  <header className='bg-gray-800'>
    <div className='mx-auto max-w-7xl px-8'>
      <div className='py-6 flex justify-start items-center border-b border-gray-600 sm:border-none'>
        <Link className='group flex-grow text-2xl text-white tracking-wide font-medium sm:flex-none' to='/'>
          Moster
          <span className='text-green-400 transition ease-in-out duration-150 group-hover:text-sky-500'>
            &lt;dev/&gt;
          </span>
        </Link>
        <nav className='ml-4 flex-grow space-x-4 hidden sm:block'>
          <Links pathname={pathname} />
        </nav>
        {/*<ThemeSelector />*/}
      </div>
      <nav className='py-4 flex flex-wrap justify-center space-x-4 sm:hidden'>
        <Links pathname={pathname} />
      </nav>
    </div>
  </header>
);

export default Header;
