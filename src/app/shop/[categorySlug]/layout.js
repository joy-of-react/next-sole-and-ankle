import React from 'react';

import { CATEGORIES } from '@/constants';
import CategorySidebar from '@/components/CategorySidebar';

import styles from './CategoryLayout.module.css';

function CategoryLayout({ params, children }) {
  const matchedCategory = CATEGORIES.find(
    (category) =>
      category.slug === params.categorySlug
  );

  return (
    <main className={styles.wrapper}>
      <div className={styles.sidebarWrapper}>
        <CategorySidebar
          selectedCategory={params.categorySlug}
        />
      </div>
      <div className={styles.childWrapper}>
        <h2>{matchedCategory.label}</h2>
        {children}
      </div>
    </main>
  );
}

export default CategoryLayout;
