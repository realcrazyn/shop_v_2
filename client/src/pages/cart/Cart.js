import { useContext } from 'react'

import { CartDrawer } from '../../components/CartDrawer/CartDrawer'
import { ShopContext } from '../../context/shop/shopContext'
import classes from './Cart.module.css'

export const Cart = () => {
  const { cartCards, scoreCartCard } = useContext(ShopContext)

  return (
    <div className={classes.Cart}>
      <CartDrawer cards={cartCards} scoreCartCard={scoreCartCard} />
    </div>
  )
}
