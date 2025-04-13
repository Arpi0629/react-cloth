import React from 'react'
import style from "./style.module.css"
import { Card } from '../'


export const Catalog = ({products}) => {
  
  return (
    <main className={style.main}>
        <div className={style.container}>
          {products.length === 0 && <p>No matching products.</p>}
          {
            products
            .map((item) => (
              <Card 
                {...item}
              />
            ))
            }
        </div>
    </main>
  )
}