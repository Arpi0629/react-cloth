import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
        <img className={styles.img} src="/logo.png"  width={47} height={38}/>
        <b className={styles.b}>REACT Cloth</b>
        <span className={styles.span}>the best clothes in the world</span>
    </Link>
  )
}
