import React from 'react';

import { getShoesForCategory } from '@/helpers/data';
import ShoeGrid from '@/components/ShoeGrid';

async function CategoryPage({ params }) {
  const { categorySlug } = await params;
  const shoes = await getShoesForCategory(categorySlug);

  return <ShoeGrid shoes={shoes} />;
}

export default CategoryPage;
