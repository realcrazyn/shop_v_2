import classes from './CartDrawer.module.css'
import { Link } from 'react-router-dom'

export const CartDrawer = (props) => {
  const sum = props.cards.reduce(
    (sum, card) => sum + card.price * card.amount,
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
            <Link to={'/card/' + card.code}>
              <img className={classes.Card_Img} alt={card.img} src={card.img} />
            </Link>
            <Link to={'/card/' + card.code}>
              <h1 className={classes.Card_Title}>{card.title}</h1>
            </Link>

            <p className={classes.Card_Cost}>
              Price: <span className={classes.Card_Price}>{card.price}</span> ₽
            </p>
            <button
              onClick={() => props.scoreCartCard(card, 'reduce')}
              className="waves-effect waves-light btn"
            >
              remove
            </button>
            <p className={classes.Card_Amount}>
              Amount:
              <span className={classes.Card_Amount_Now}>{card.amount}</span>
            </p>
            <button
              onClick={() => props.scoreCartCard(card, 'add')}
              className="waves-effect waves-light btn"
            >
              add
            </button>
          </div>
        )
      })}
      <h1 className={classes.Total}>Total: {sum} ₽</h1>
    </div>
  )
}
