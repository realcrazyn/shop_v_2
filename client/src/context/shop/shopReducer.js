import {
  ADD_CART_CARD,
  REMOVE_CART_CARD_AMOUNT,
  REMOVE_SHOP_CARD_AMOUNT,
} from '../types'

const handlers = {
  [REMOVE_SHOP_CARD_AMOUNT]: (state, { payload }) => ({
    ...state,
    cards: payload,
  }),
  [ADD_CART_CARD]: (state, { payload }) => ({
    ...state,
    cartCards: payload,
  }),
  [REMOVE_CART_CARD_AMOUNT]: (state, { tCartCards, tCards }) => ({
    ...state,
    cartCards: tCartCards,
    cards: tCards,
  }),
  DEFAULT: (state) => state,
}

export const shopReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
