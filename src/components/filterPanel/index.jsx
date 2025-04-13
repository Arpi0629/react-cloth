import React from 'react';
import { Button } from '../';
import style from "./style.module.css"

export const FilterPanel = ({ filter, setFilter, sort, setSort }) => {
  const filters = ['all', 'men', 'woomen', 'kids'];
  const [active, setActive] = React.useState("all");

  return (
    <div className={style.container}>
      <div className={style.leftPart}>
        {filters.map(f => (
          <Button
            key={f}
            onClick={() => {
                setFilter(f); 
                setActive(f);
            }}
            className={`${style.button} ${active === f ? style.active : ''}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      <div className={style.rightPart}>
        <label>
          Sort by:{' '}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="alph">Alphabetical</option>
            <option value="price">Price</option>
          </select>
        </label>
      </div>
    </div>
  );
};
