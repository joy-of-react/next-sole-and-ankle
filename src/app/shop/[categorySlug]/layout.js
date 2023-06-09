import React from 'react';

import CategorySidebar from '@/components/CategorySidebar';

import styles from './CategoryLayout.module.css';

function CategoryLayout({ params, children }) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.childWrapper}>
        {children}
      </div>
      <div className={styles.sidebarWrapper}>
        <CategorySidebar
          selectedCategory={params.categorySlug}
        />
      </div>
    </main>
  );
}

export default CategoryLayout;
