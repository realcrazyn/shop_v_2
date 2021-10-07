import { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/Loader'
import { ShopContext } from '../../context/shop/shopContext'
import { useHttp } from '../../hooks/http.hook'
import classes from './Card.module.css'

export const Card = ({ match }) => {
  const { scoreCartCard } = useContext(ShopContext)
  const [card, setCard] = useState()
  const { request } = useHttp()

  useEffect(() => {
    async function getCard() {
      const data = await request(`/api/manage/${match.params.name}`, 'GET')
      setCard(data[0])
    }
    getCard()
  }, [])

  if (!card) {
    return <Loader />
  }

  return (
    <Fragment>
      <Link to="/catalog" className="btn btn-link">
        Back
      </Link>
      <div className="card mb-4">
        <div className={classes.card}>
          <div className={classes.card_sides}>
            <img src={card.img} alt={card.img} className={classes.card_image} />
          </div>
          <div className={classes.card_sides}>
            <h1 className={classes.card_title}>{card.title}</h1>
            <h2 className={classes.card_price}>{card.price} ₽</h2>
            <button
              className={
                'btn btn-link ' + (card.quantity > 0 ? '' : ' disabled')
              }
              onClick={() => {
                scoreCartCard(card, 'add')
              }}
            >
              Add
            </button>
            <p>Quantity {card.quantity}</p>
            <p className={classes.card_description}>{card.description}</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
