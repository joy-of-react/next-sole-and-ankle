import React from 'react';

import { CATEGORIES } from '@/constants';
import { getShoesForCategory } from '@/helpers/data';
import ShoeGrid from '@/components/ShoeGrid';

import styles from './CategoryPage.module.css';

async function CategoryPage({ params }) {
  const matchedCategory = CATEGORIES.find(
    ({ slug }) => slug === params.categorySlug
  );

  const shoes = await getShoesForCategory(
    params.categorySlug
  );

  console.log('ReNDER', params.categorySlug);

  return (
    <>
      <header className={styles.header}>
        <h2>{matchedCategory.label}</h2>
      </header>
      <ShoeGrid shoes={shoes} />
    </>
  );
}

export default CategoryPage;
