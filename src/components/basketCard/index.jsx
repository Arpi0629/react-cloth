import React from 'react'
import { Title } from '../'
import { CircleMinus, CirclePlus, CircleX } from 'lucide-react'
import style from "./style.module.css"
import { useBascet } from '../../hooks/basket'

export const BasketCad = ({ img, title, amount = 1, price, id }) => {
  const { removeProduct, updateAmount } = useBascet();
  const [loading, setLoading] = React.useState(false);

  const handleClose = async () => {
    setLoading(true);
    await removeProduct(id);
    setLoading(false);
  };

  const increaseAmount = () => updateAmount(id, amount + 1);
  const decreaseAmount = () => {
    if (amount > 1) updateAmount(id, amount - 1);
  };



  return (
    <>
      <div className={style.container}>
        <img src={img} className={style.img} />
        <Title size="m" text={title} />
        <div className={style.amount}>
          <CircleMinus
            fill="#fff"
            color={amount > 1 ? "#808080" : "#d7d7d7"}
            size={32}
            cursor="pointer"
            onClick={decreaseAmount}
          />
          <span>{amount}</span>
          <CirclePlus
            fill="#fff"
            color="#808080"
            size={32}
            cursor="pointer"
            onClick={increaseAmount}
          />
        </div>
        <Title size="m" text={`${price * amount}$`} />
        <CircleX
          fill="#fff"
          size={32}
          color="#d7d7d7"
          cursor="pointer"
          onClick={handleClose}
        />
      </div>
      <hr className={style.hr} />
    </>
  );
};
