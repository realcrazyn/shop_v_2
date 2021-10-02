import { useReducer } from 'react'
import { ADD_CART_CARD } from '../types'
import { ShopContext } from './shopContext'
import { shopReducer } from './shopReducer'

export const ShopState = ({ children }) => {
  const initialState = {
    cartCards: JSON.parse(window.localStorage.getItem('cartCards')) || [],
  }
  const [state, dispatch] = useReducer(shopReducer, initialState)

  const scoreCartCard = (card, flag) => {
    if (cartCards.filter((el) => el.code === card.code).length > 0) {
      cartCards.map((e) => {
        if (e.code === card.code && (e.quantity > 0 || flag === 'reduce')) {
          flag === 'add' ? (e.amount += 1) : (e.amount -= 1)
          flag === 'add' ? (e.quantity -= 1) : (e.quantity += 1)
        }
        return e
      })
      cartCards.filter((el) => el.amount > 0)
      localStorage.setItem('cartCards', JSON.stringify(cartCards))
      dispatch({
        type: ADD_CART_CARD,
        payload: cartCards,
      })
    } else {
      card = { ...card, amount: 1, quantity: card.quantity - 1 }
      const cards = [...cartCards, card]
      console.log(cards)
      localStorage.setItem('cartCards', JSON.stringify(cards))
      dispatch({
        type: ADD_CART_CARD,
        payload: cards,
      })
    }
  }

  const { cartCards } = state

  return (
    <ShopContext.Provider
      value={{
        cartCards,
        scoreCartCard,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
