'use client';
import React from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingBag } from 'react-feather';

import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <div className={styles.mainHeader}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <nav className={styles.desktopNav}>
          <Link
            className={styles.navLink}
            href="/shop/bestsellers"
            style={{
              color: 'var(--color-secondary)',
            }}
          >
            Shop
          </Link>
          <Link className={styles.navLink} href="/community">
            Community
          </Link>
          <Link className={styles.navLink} href="/contact">
            Contact Us
          </Link>
        </nav>
        <div className={styles.mobileActions}>
          <button className={styles.shoppingBagButton}>
            <ShoppingBag />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </button>
          <button>
            <Search />
            <VisuallyHidden>Search</VisuallyHidden>
          </button>
          <button onClick={() => setShowMobileMenu(true)}>
            <Menu />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </button>
        </div>
        <div className={styles.filler} />
      </div>
    </header>
  );
};

export default Header;
