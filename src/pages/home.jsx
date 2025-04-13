import React from 'react'
import { Catalog, FilterPanel } from '../components'


export const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [filter, setFilter] = React.useState('all');
  const [sort, setSort] = React.useState('alph'); 

  React.useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const getFilteredSortedProducts = () => {
    let result = [...products];

    if (filter !== 'all') {
      result = result.filter(product =>
        product.category?.toLowerCase().includes(filter) 
      );
    }

    if (sort === 'alph') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'price') {
      result.sort((a, b) => a.price - b.price);
    }

    return result;
  };

  const filteredSortedProducts = getFilteredSortedProducts();

  return (
    <div style={{ padding: '20px' }}>
      <FilterPanel
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <Catalog products={filteredSortedProducts} />
    </div>
  );
};

