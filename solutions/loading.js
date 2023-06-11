import React from 'react';

import ShoeGrid from '@/components/ShoeGrid';

async function LoadingCategoryPage() {
  return <ShoeGrid isPlaceholder={true} shoes={FAKE_SHOES} />;
}

const FAKE_SHOES = [
  {
    slug: '001',
    name: 'Nike FakeShoe 1',
    price: 14500,
    numOfColors: 2,
  },
  {
    slug: '002',
    name: 'AirWhatever Illegible',
    price: 16500,
    numOfColors: 2,
  },
  {
    slug: '003',
    name: 'Nike Undefined',
    price: 16000,
    numOfColors: 1,
  },
  {
    slug: '004',
    name: 'Another fake shoe!',
    price: 12345,
    numOfColors: 1,
  },
  {
    slug: '005',
    name: 'Yep shoe',
    price: 12345,
    numOfColors: 1,
  },
  {
    slug: '006',
    name: 'An amazingly fake shoe 1',
    price: 16500,
    numOfColors: 5,
  },
];

export default LoadingCategoryPage;
