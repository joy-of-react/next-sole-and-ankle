import React from 'react';
import { Raleway, Redacted_Script } from 'next/font/google';

import Header from '@/components/Header';

import './styles.css';

const primaryFont = Raleway({
  weight: ['500', '600', '800'],
  subsets: ['latin'],
});
const loadingFont = Redacted_Script({
  weight: ['400'],
  subsets: ['latin'],
});

function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        '--font-family-primary': primaryFont.style.fontFamily,
        '--font-family-loading': loadingFont.style.fontFamily,
      }}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
