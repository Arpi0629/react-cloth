import React from 'react'
import style from "./style.module.css"
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react';
import { useBascet } from '../../hooks/basket';
import { Logo } from '../';


export const Header = () => {
    const pathName = useLocation().pathname;
   const isInCart = pathName === "/basket";
  const {totalPrice, totalAmount} = useBascet();


  return ( 
    <> 
    <header className={style.header}>
        <div className={style.container}>
            <Logo/>
            {!isInCart &&
                <button className={style.button}>
                    <Link to="/basket" className={style.link}>
                        <span className={style.leftPart}>{totalPrice} ₽</span> |
                        <div className={style.rightPart}><ShoppingCartIcon size={16}/> {totalAmount}</div>
                    </Link>
                </button>
            }       
        </div>
    </header>
    <hr className={style.hr}/>
    </>
  )
}
