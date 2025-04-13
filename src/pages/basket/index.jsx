import React from 'react'
import style from "./style.module.css"
import { ShoppingCart, Trash2 } from 'lucide-react'
import { BasketCad, EmptyPage, Button, Title } from '../../components'
import { useBascet } from '../../hooks/basket'
import { Link } from 'react-router-dom'
import { useOrders } from '../../hooks/orders'

export const Basket = () => {
    const { data: basketItems, totalPrice, clearBascet } = useBascet();
    const { addOrders} = useOrders();
    const [loading, setLoading] = React.useState(false);
  
    const clearBasket = async () => {
      setLoading(true);
      await clearBascet();
      setLoading(false);
    };

    const placeOrder = async () => {
      setLoading(true);
      await addOrders(basketItems);
      clearBascet();
      setLoading(false)
    }
  
    return (
      <div className={style.container}>
        {basketItems.length === 0 ? (
          <EmptyPage />
        ) : (
          <div className={style.container}>
            <div className={style.upperContaier}>
              <div className={style.leftPart}>
                <ShoppingCart />
                <Title size="l" text="Basket" />
              </div>
              <button className={style.rightPart} onClick={clearBasket}>
                <Trash2 />
                <Title size="s" text="Clear Cart" />
              </button>
            </div>
            <hr className={style.hrr} />
            <ul>
              {basketItems.map((item) => (
                <li key={item.id}>
                  <BasketCad {...item} />
                </li>
              ))}
            </ul>
            <div className={style.priceContainer}>
            <Title
                size="m"
                text={`Total items: ${basketItems.length} pcs.`}
            />
            <Title
                size="m"
                text={`Order total: ${basketItems.reduce((acc, item) => acc + item.price * (item.amount || 1), 0)} $`}
            />
        </div>
        <div className={style.buttonsContainer}>
            <Link to="/"><Button className={style.leftButton}>Go back</Button></Link>
            <Button className={style.rightButton} onClick={placeOrder}>Pay now</Button>
        </div>
          </div>
          
        )}
      </div>
    )
}
  