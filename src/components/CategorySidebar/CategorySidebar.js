import React from 'react';
import Link from 'next/link';

import { CATEGORIES } from '@/constants';
import styles from './CategorySidebar.module.css';

function CategorySidebar({ selectedCategory }) {
  return (
    <aside className={styles.wrapper}>
      <nav>
        <h2>Categories</h2>
        <ul>
          {CATEGORIES.map(({ slug, label }) => {
            return (
              <Link
                href={`/shop/${slug}`}
                key={slug}
                style={{
                  color:
                    slug === selectedCategory
                      ? 'var(--color-primary)'
                      : 'inherit',
                }}
              >
                {label}
              </Link>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default CategorySidebar;
