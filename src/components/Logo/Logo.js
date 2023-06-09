import React from 'react';
import Link from 'next/link';

import styles from './Logo.module.css';

const Logo = (props) => {
  return (
    <h1 {...props} className={styles.wrapper}>
      <Link href="/">Sole&amp;Ankle</Link>
    </h1>
  );
};

export default Logo;
