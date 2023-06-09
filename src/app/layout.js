import React from 'react';
import { Raleway } from 'next/font/google';
// import { QUERIES } from '../../constants';

import Header from '@/components/Header';
// import ShoeIndex from '../ShoeIndex';

import './styles.css';

const primaryFont = Raleway({
  weights: [500, 600, 800],
  subsets: ['latin'],
});

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      style={{
        '--font-family-primary':
          primaryFont.style.fontFamily,
      }}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
