import React from 'react'
import { Title, Button } from '../'
import style from "./style.module.css"
import { Link } from 'react-router-dom'

export const EmptyPage = () => {
  return (
    <div className={style.container}>
        <Title
            size="l"
            text="The basket is empty"
        />
        <Title
            size="s"
            text="Most likely, you have not ordered the product yet. To order the product, go to the main page."
        />
        <img src="/empty.png" className={style.img}/>
        <Link to="/">
            <Button className={style.button}>Go back</Button>
        </Link>
    </div>
  )
}
