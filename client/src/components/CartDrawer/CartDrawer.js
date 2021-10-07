import classes from './CartDrawer.module.css'
import { Link, NavLink } from 'react-router-dom'
import cart from '../../img/emptyCart.png'

export const CartDrawer = (props) => {
  const changeHandler = (event) => {
    props.setForm({ ...props.form, [event.target.name]: event.target.value })
  }
  const sum = props.cards.reduce(
    (sum, card) => sum + card.price * card.amount,
    0
  )
  if (props.cards.length === 0) {
    return (
      <div className={classes.wrapper}>
        <img src={cart} alt="cart" className={classes.emptycart} />
      </div>
    )
  }

  return (
    <div className={classes.cart_drawer}>
      {props.cards.map((card, i) => {
        return (
          <div
            className={card.amount > 0 ? classes.card : classes.none}
            key={i}
          >
            <Link to={'/card/' + card.code}>
              <img className={classes.card_img} alt={card.img} src={card.img} />
            </Link>
            <Link to={'/card/' + card.code}>
              <h1 className={classes.card_title}>{card.title}</h1>
            </Link>

            <p className={classes.card_cost}>
              Price: <span className={classes.card_price}>{card.price}</span> ₽
            </p>
            <button
              onClick={() => props.scoreCartCard(card, 'reduce')}
              className="waves-effect waves-light btn"
            >
              remove
            </button>
            <p className={classes.card_amount}>
              Amount:
              <span className={classes.card_amount_now}>{card.amount}</span>
            </p>
            <button
              onClick={() => props.scoreCartCard(card, 'add')}
              className={
                'waves-effect waves-light btn ' +
                (card.quantity > 0 ? '' : ' disabled')
              }
            >
              add
            </button>
          </div>
        )
      })}

      <div className="row">
        <div className="input-field row s6" style={{ marginTop: '40px' }}>
          <input
            id="name"
            type="text"
            className="validate"
            name="name"
            value={props.form.name}
            onChange={changeHandler}
          />
          <label htmlFor="name">Your name</label>
        </div>
        <div className="input-field row s6" style={{ marginTop: '40px' }}>
          <input
            id="email"
            type="email"
            className="validate"
            name="email"
            value={props.form.email}
            onChange={changeHandler}
          />
          <label htmlFor="email">Your email</label>
        </div>
      </div>
      <h1 className={classes.total}>Total: {sum} ₽</h1>
      <NavLink
        to="/catalog"
        onClick={() => props.submitOrder()}
        className="waves-effect waves-light btn"
        style={{ marginBottom: '40px' }}
      >
        Submit
      </NavLink>
    </div>
  )
}
