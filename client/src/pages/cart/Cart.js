import { useContext } from 'react'

import { CartDrawer } from '../../components/CartDrawer/CartDrawer'
import { ShopContext } from '../../context/shop/shopContext'
import classes from './Cart.module.css'

export const Cart = () => {
  const { cartCards, addItem, removeItem } = useContext(ShopContext)

  return (
    <div className={classes.Cart}>
      <CartDrawer addItem={addItem} removeItem={removeItem} cards={cartCards} />
    </div>
  )
}
