import { useContext, useEffect, useState } from 'react'
import { CardDrawer } from '../../components/CardDrawer/CardDrawer'
import { ShopContext } from '../../context/shop/shopContext'
import classes from './Catalog.module.css'

export const Catalog = () => {
  const { cards } = useContext(ShopContext)
  const [value, setValue] = useState('')
  const [search, setSearch] = useState('name')
  const [sortedCards, setSortedCards] = useState(cards)
  useEffect(
    () =>
      setSortedCards(
        cards.filter((card) => {
          if (search === 'name') {
            return card.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          } else {
            return card.cost
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          }
        })
      ),
    [value]
  )

  useEffect(() => setValue(''), [search])

  return (
    <div className={classes.Catalog}>
      <form className={classes.Catalog_Form}>
        <div className="form-group">
          <label>Search: </label>
          <select onChange={(e) => setSearch(e.target.value)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <input
          onInput={(event) => setValue(event.target.value)}
          value={value}
        />
      </form>

      <CardDrawer cards={sortedCards} />
    </div>
  )
}
