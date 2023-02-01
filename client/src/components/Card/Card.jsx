import React from 'react'
import { Link } from 'react-router-dom'
export default function Card({ item }) {
  const { id, img, img2, isNew, oldPrice, price, title } = item
  console.log(title)
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card w-[280px] flex flex-col gap-3">
        <div className="image w-full h-[400px] overflow-hidden relative group">
          {isNew && (
            <span className="absolute top-1 left-1 bg-white text-teal-500 px-1 py-1 z-40 font-medium text-xs">
              New Season
            </span>
          )}
          <img
            src={item.img}
            alt=""
            className="absolute z-10 object-cover w-full h-full mainImg"
          />
          <img
            src={item.img2}
            alt=""
            className="absolute object-cover w-full h-full secondImg group-hover:z-20"
          />
        </div>
        <h2 className="text-base font-normal">{title}</h2>
        <div className="prices flex gap-5">
          <h3 className="text-lg font-medium line-through text-gray-500">
            ${oldPrice || price + 20}
          </h3>
          <h3 className="text-lg font-medium">${price}</h3>
        </div>
      </div>
    </Link>
  )
}
