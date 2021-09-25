import { useReducer } from 'react'
import {
  ADD_CART_CARD,
  REMOVE_CART_CARD_AMOUNT,
  REMOVE_SHOP_CARD_AMOUNT,
} from '../types'
import { ShopContext } from './shopContext'
import { shopReducer } from './shopReducer'

export const ShopState = ({ children }) => {
  const initialState = {
    cards: [
      {
        hash: 0,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Purple',
        cost: 1220,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-27-cto-hero-202008?wid=627&hei=522&fmt=jpeg&qlt=95&.v=1594932848000',
        amount: 10,
        id: 125151212,
      },
      {
        hash: 1,
        name: 'Моноблок Apple iMac 22 M1/16/512GB SSD Gold',
        cost: 1680,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-silver-cto-hero-202104?wid=1254&hei=1132&fmt=jpeg&qlt=80&.v=1617479510000',
        amount: 10,
        id: 12515112212,
      },
      {
        hash: 2,
        name: 'Моноблок Apple iMac 24 M1/16/512GB SSD White',
        cost: 1440,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/IMac_Pro.svg/1200px-IMac_Pro.svg.png',
        amount: 20,
        id: 125112312,
      },
      {
        hash: 3,
        name: 'Моноблок Apple iMac 24 M1/8/128GB SSD Silver',
        cost: 1050,
        img: 'https://img.mvideo.ru/Pdb/30029197b.jpg',
        amount: 20,
        id: 17861212,
      },
      {
        hash: 4,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Red',
        cost: 1420,
        img: 'https://www.iqmac.ru/upload/resize_cache/iblock/a5a/800_600_140cd750bba9870f18aada2478b24840a/iMac_21_5_2019.png',
        amount: 12,
        id: 125151789,
      },
      {
        hash: 5,
        name: 'Моноблок Apple iMac 24 M1/8/256GB SSD Blue',
        cost: 1200,
        img: 'https://onlyphones.ru/wp-content/uploads/2020/08/imac-27-2020.png',
        amount: 11,
        id: 6785151212,
      },
      {
        hash: 6,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Purple',
        cost: 1220,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-27-cto-hero-202008?wid=627&hei=522&fmt=jpeg&qlt=95&.v=1594932848000',
        amount: 10,
        id: 178906212,
      },
      {
        hash: 7,
        name: 'Моноблок Apple iMac 22 M1/16/512GB SSD Gold',
        cost: 1680,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-silver-cto-hero-202104?wid=1254&hei=1132&fmt=jpeg&qlt=80&.v=1617479510000',
        amount: 10,
        id: 12578012,
      },
      {
        hash: 8,
        name: 'Моноблок Apple iMac 24 M1/16/512GB SSD White',
        cost: 1440,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/IMac_Pro.svg/1200px-IMac_Pro.svg.png',
        amount: 20,
        id: 12346212,
      },
      {
        hash: 9,
        name: 'Моноблок Apple iMac 24 M1/8/128GB SSD Silver',
        cost: 1050,
        img: 'https://img.mvideo.ru/Pdb/30029197b.jpg',
        amount: 20,
        id: 165851212,
      },
      {
        hash: 10,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Red',
        cost: 1420,
        img: 'https://www.iqmac.ru/upload/resize_cache/iblock/a5a/800_600_140cd750bba9870f18aada2478b24840a/iMac_21_5_2019.png',
        amount: 12,
        id: 12345345212,
      },
      {
        hash: 11,
        name: 'Моноблок Apple iMac 24 M1/8/256GB SSD Blue',
        cost: 1200,
        img: 'https://onlyphones.ru/wp-content/uploads/2020/08/imac-27-2020.png',
        amount: 11,
        id: 12123890212,
      },
      {
        hash: 12,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Purple',
        cost: 1220,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-27-cto-hero-202008?wid=627&hei=522&fmt=jpeg&qlt=95&.v=1594932848000',
        amount: 10,
        id: 12354151212,
      },
      {
        hash: 13,
        name: 'Моноблок Apple iMac 22 M1/16/512GB SSD Gold',
        cost: 1680,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-silver-cto-hero-202104?wid=1254&hei=1132&fmt=jpeg&qlt=80&.v=1617479510000',
        amount: 10,
        id: 78951212,
      },
      {
        hash: 14,
        name: 'Моноблок Apple iMac 24 M1/16/512GB SSD White',
        cost: 1440,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/IMac_Pro.svg/1200px-IMac_Pro.svg.png',
        amount: 20,
        id: 6786151212,
      },
      {
        hash: 15,
        name: 'Моноблок Apple iMac 24 M1/8/128GB SSD Silver',
        cost: 1050,
        img: 'https://img.mvideo.ru/Pdb/30029197b.jpg',
        amount: 20,
        id: 6791212,
      },
      {
        hash: 16,
        name: 'Моноблок Apple iMac 24 M1/8/512GB SSD Red',
        cost: 1420,
        img: 'https://www.iqmac.ru/upload/resize_cache/iblock/a5a/800_600_140cd750bba9870f18aada2478b24840a/iMac_21_5_2019.png',
        amount: 12,
        id: 1791212,
      },
      {
        hash: 17,
        name: 'Моноблок Apple iMac 24 M1/8/256GB SSD Blue',
        cost: 1200,
        img: 'https://onlyphones.ru/wp-content/uploads/2020/08/imac-27-2020.png',
        amount: 11,
        id: 17891212,
      },
    ],
    cartCards: [],
  }
  const [state, dispatch] = useReducer(shopReducer, initialState)

  const removeCardAmount = (card, cards) => {
    cards[card.hash].amount = cards[card.hash].amount - 1

    dispatch({
      type: REMOVE_SHOP_CARD_AMOUNT,
      payload: cards,
    })
  }

  const cardAdd = (card) => {
    const tempCard = { ...card }
    if (cartCards.filter((tCard) => tCard.id === tempCard.id).length === 0) {
      tempCard.amount = 1
      tempCard.hash = cartCards.length
      cartCards.push(tempCard)
    } else {
      cartCards.map((tCard) =>
        tCard.id === tempCard.id ? (tCard.amount = tCard.amount + 1) : null
      )
    }
    dispatch({ type: ADD_CART_CARD, payload: cartCards })
  }
  const addItem = (card) => {
    removeCardAmount(card, cards)
    cardAdd(card)
  }

  const removeItem = (card) => {
    let tCartCards = [...cartCards]
    if (tCartCards[card.hash].amount > 0) {
      tCartCards[card.hash].amount = tCartCards[card.hash].amount - 1
    }
    const tCards = [...cards]
    tCards.map((e) => (e.id === card.id ? (e.amount = e.amount + 1) : null))

    dispatch({
      type: REMOVE_CART_CARD_AMOUNT,
      tCartCards: tCartCards,
      tCards: tCards,
    })
  }

  const { cards, cartCards } = state

  return (
    <ShopContext.Provider
      value={{
        cards,
        cartCards,
        removeCardAmount,
        cardAdd,
        addItem,
        removeItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
