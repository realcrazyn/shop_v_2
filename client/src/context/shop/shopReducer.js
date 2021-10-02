import { ADD_CART_CARD } from '../types'

const handlers = {
  [ADD_CART_CARD]: (state, { payload }) => ({
    ...state,
    cartCards: payload,
  }),
  DEFAULT: (state) => state,
}

export const shopReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
