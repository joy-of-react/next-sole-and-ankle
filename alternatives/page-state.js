/**
 * This shows a sketch of a potential implementation using
 * React state. We use a client component that performs a
 * `fetch` operation inside a useEffect hook.
 *
 * Note that I would not suggest doing it this way. I'd suggest
 * either using the modern Suspense approach discussed in the
 * lesson, or the SWR approach shown in the next file
 * (`page-swr.js`)
 */
'use client';
import React from 'react';

import { getShoesForCategory } from '@/helpers/data';
import ShoeGrid from '@/components/ShoeGrid';

function CategoryPage({ params }) {
  const [shoes, setShoes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function runEffect() {
      const response = await fetch(
        `/api/shoes?categorySlug=${params.categorySlug}`
      );
      const data = await response.json();

      setShoes(data.shoes);
      setIsLoading(false);
    }

    runEffect();
  }, []);

  return <ShoeGrid isPlaceholder={isLoading} shoes={shoes} />;
}

export default CategoryPage;
