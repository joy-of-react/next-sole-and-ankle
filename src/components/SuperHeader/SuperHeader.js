'use client';
import React from 'react';
import { ShoppingBag } from 'react-feather';
// import SearchInput from '../SearchInput';

import styles from './SuperHeader.module.css';

const SuperHeader = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.marketingMsg}>
        Free shipping on domestic orders over $75!
      </span>
      {/* <SearchInput /> */}
      <a
        href="/help"
        className={styles.helpLink}
        onClick={(event) => {
          event.preventDefault();
          alert(
            'Sorry, this functionality is not included'
          );
        }}
      >
        Help
      </a>
      <button
        className={styles.shoppingBagButton}
      >
        <ShoppingBag />
      </button>
    </div>
  );
};

export default SuperHeader;
