/**
 * This shows a sketch of a potential implementation using
 * SWR. It makes a request to the /api/shoes endpoint.
 *
 * This is a perfectly valid option, though it doesn't perform
 * quite as nicely as the modern alternative using Suspense.
 */
'use client';
import React from 'react';
import useSWR from 'swr';

import ShoeGrid from '@/components/ShoeGrid';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  return json.shoes;
}

function CategoryPage({ params }) {
  const { data, isLoading } = useSWR(
    `/api/shoes?categorySlug=${params.categorySlug}`,
    fetcher
  );

  return <ShoeGrid isPlaceholder={isLoading} shoes={data} />;
}

export default CategoryPage;
