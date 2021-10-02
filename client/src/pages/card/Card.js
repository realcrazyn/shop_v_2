import { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/Loader'
import { ShopContext } from '../../context/shop/shopContext'
import { useHttp } from '../../hooks/http.hook'
import classes from './Card.module.css'

export const Card = ({ match }) => {
  const { scoreCartCard, cartCards } = useContext(ShopContext)
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
        <div className={classes.Card}>
          <div className={classes.Card_Sides}>
            <img src={card.img} alt={card.img} className={classes.Card_Image} />
          </div>
          <div className={classes.Card_Sides}>
            <h1 className={classes.Card_Title}>{card.title}</h1>
            <h2 className={classes.Card_Price}>{card.price} ₽</h2>
            <button
              className="btn btn-link"
              onClick={() => {
                scoreCartCard(card, 'add')
              }}
            >
              Add
            </button>
            <p className={classes.Card_Description}>{card.description}</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
