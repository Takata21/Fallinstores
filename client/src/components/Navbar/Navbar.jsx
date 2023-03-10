import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MdKeyboardArrowDown,
  MdSearch,
  MdOutlinePersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
} from 'react-icons/md'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'
export default function Navbar() {
  const products = useSelector((state) => state.cart.products)
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <section className="flex h-20 relative">
      <div className="flex items-center justify-between w-full px-8 py-3 wrapper">
        <div className="flex gap-3 left">
          <div className="flex items-center">
            <img src="/img/en.png" alt="" />
            <MdKeyboardArrowDown />
          </div>
          <div className="flex items-center">
            <span>USD</span>
            <MdKeyboardArrowDown />
          </div>
          <Link to="/products/1">Women</Link>
          <Link to="/products/2">Men</Link>
          <Link to="/products/3">Children</Link>
        </div>
        <div className="center">
          <Link to="/">FALLINSTORE</Link>
        </div>
        <div className="flex items-center gap-3 right">
          <Link to="/">Homepage</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/store">Store</Link>
          <div className="flex gap-4 text-[#777] icons">
            <MdSearch color="#777" />
            <MdOutlinePersonOutline color="#777" />
            <MdOutlineFavoriteBorder color="#777" />
            <button className="relative flex" onClick={handleClick}>
              <MdOutlineShoppingCart />
              <span className="flex justify-center items-center text-[12px] w-5 h-5 rounded-full bg-[#2879fe] text-white absolute right-[-10px] top-[-10px]">
                {products.length}
              </span>
            </button>
          </div>
        </div>
      </div>
      {open ? <Cart /> : null}
    </section>
  )
}
