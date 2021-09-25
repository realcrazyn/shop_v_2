import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../../context/shop/shopContext'
import classes from './Navbar.module.css'

export const Navbar = () => {
  const { cartCards } = useContext(ShopContext)
  const sum = cartCards.reduce((sum, card) => sum + card.amount, 0)
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg d-flex justify-content-between">
      <NavLink exact to="/" className="nav-link">
        <div className="navbar-brand px-4">My Extra Shop</div>
      </NavLink>
      <ul className="navbar-nav px-4">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/catalog" className="nav-link">
            Catalog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link position-relative">
            Shopping Cart
            <span className={sum > 0 ? classes.active : classes.deactive}>
              {sum}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
