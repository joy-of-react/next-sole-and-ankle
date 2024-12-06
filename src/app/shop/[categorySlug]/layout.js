import React from 'react';

import { CATEGORIES } from '@/constants';
import CategorySidebar from '@/components/CategorySidebar';

import styles from './CategoryLayout.module.css';

async function CategoryLayout({ params, children }) {
  const { categorySlug } = await params;

  const matchedCategory = CATEGORIES.find(
    (category) => category.slug === categorySlug
  );

  return (
    <main className={styles.wrapper}>
      <div className={styles.sidebarWrapper}>
        <CategorySidebar selectedCategory={categorySlug} />
      </div>
      <div className={styles.childWrapper}>
        <h2>{matchedCategory.label}</h2>
        {children}
      </div>
    </main>
  );
}

export default CategoryLayout;
