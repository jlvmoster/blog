import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Home = ({ location }) => (
  <Layout pathname={location.pathname}>
    <section className='max-w-3xl mx-auto py-16 sm:max-w-5xl sm:py-24 lg:max-w-7xl'>
      <div className='mx-auto w-48 h-48 relative overflow-hidden rounded-full sm:w-64 sm:h-64'>
        <StaticImage
          src='../images/me.png'
          alt='Picture of the author'
          formats={['auto', 'webp']}
          layout='constrained'
        />
      </div>
      <div className='mt-6 text-center'>
        <h1 className='text-3xl text-white font-bold tracking-wide sm:text-5xl'>Hi, I&apos;m Jalo &#x1f44b;</h1>
        <p className='mt-3 text-lg text-gray-300 tracking-wider sm:text-2xl'>
          I&apos;m just one <span className='text-yellow-400 font-semibold'>helluva</span> Software Engineer.
        </p>
      </div>
    </section>
  </Layout>
);

export const Head = ({ location }) => <SEO title='Home' pathname={location.pathname} />;

export default Home;
