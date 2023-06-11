import { NextResponse } from 'next/server';

import { getShoesForCategory } from '@/helpers/data';

export async function GET(request) {
  const category =
    request.nextUrl.searchParams.get('categorySlug');
  const shoes = await getShoesForCategory(category);

  return NextResponse.json({ shoes });
}
