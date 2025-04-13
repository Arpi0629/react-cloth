import { PlusIcon } from 'lucide-react'
import React from 'react'
import style from "./style.module.css"
import { Title, Button } from '../'
import { useBascet } from '../../hooks/basket'


export const Card = ({img, price, title, id}) => {
    const {addProduct, isSomeProduct} = useBascet();
    const [loading, setLoading] = React.useState(false);
    
    const addToCart = async () => {
        setLoading(true)
        await addProduct({img, price, title, productId: id})
        setLoading(false);
    }

  return (
    <div className={style.item}>
        <img src={img} className={style.img}/>
        <Title size="m" text={title}/>
        <div className={style.priceContainer}>
            <div className={style.price}>
                <Title 
                    size="m" 
                    text={`from ${price} $`}
                    className={style.titlePrice}
                />
                <Button className={style.buttonn} onClick={addToCart} disabled={loading}>
                    <div className={style.buttonContainer}>
                        {isSomeProduct(id) ? 
                            (<div className={style.buttonOrdered}>
                                <Title
                                    size="s"
                                    text="in cart"
                                />
                            </div>
                            ) :
                            ( <div className={style.buttonAdd}>
                                <PlusIcon/> 
                                <Title
                                    size="s"
                                    text="Add"
                                />
                            </div>  )
                        }
                    </div>
                </Button>
            </div>
        </div>
    </div>
  )
}
