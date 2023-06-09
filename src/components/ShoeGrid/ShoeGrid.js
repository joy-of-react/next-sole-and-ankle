import React from 'react';

import ShoeCard from '../ShoeCard';
import styles from './ShoeGrid.module.css';

function ShoeGrid({ shoes }) {
  return (
    <div className={styles.wrapper}>
      {shoes.map((shoe) => (
        <ShoeCard key={shoe.slug} shoe={shoe} />
      ))}
    </div>
  );
}

export default ShoeGrid;
