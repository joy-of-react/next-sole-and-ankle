import React from 'react';

import { getShoesForCategory } from '@/helpers/data';
import ShoeGrid from '@/components/ShoeGrid';

function CategoryPage({ params }) {
  const [shoes, setShoes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function runEffect() {
      const data = await getShoesForCategory(
        params.categorySlug
      );

      setShoes(data);
      setIsLoading(false);
    }

    runEffect();
  }, []);

  return <ShoeGrid isPlaceholder={isLoading} shoes={shoes} />;
}

export default CategoryPage;
