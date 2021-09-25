import classes from './CartDrawer.module.css'
import { Link } from 'react-router-dom'

export const CartDrawer = (props) => {
  const sum = props.cards.reduce(
    (sum, card) => sum + card.cost * card.amount,
    0
  )

  return (
    <div className={classes.CartDrawer}>
      {props.cards.map((card, i) => {
        return (
          <div
            className={card.amount > 0 ? classes.Card : classes.None}
            key={i}
          >
            <Link to={'/card/' + card.id}>
              <h1 className={classes.Card_Title}>{card.name}</h1>
            </Link>
            <Link to={'/card/' + card.id}>
              <img className={classes.Card_Img} alt={card.img} src={card.img} />
            </Link>
            <p className={classes.Card_Cost}>
              Price: <span className={classes.Card_Price}>{card.cost}</span> $
            </p>
            <button onClick={() => props.removeItem(card)}>-</button>
            <p className={classes.Card_Amount}>
              Amount:
              <span className={classes.Card_Amount_Now}>{card.amount}</span>
            </p>
            <button onClick={() => props.addItem(card)}>+</button>
          </div>
        )
      })}
      <h1>Total: {sum} $</h1>
    </div>
  )
}
