import React from 'react'
import { Link } from 'react-router-dom'
import { VITE_UPLOAD_URL } from '../../config'
export default function Card({ item }) {
  const { id, attributes } = item
  const { img, img2, isNew, oldPrice, price, title } = attributes
  console.log(img)
  return (
    <Link to={`/product/${id}`}>
      <div className="card w-[280px] flex flex-col gap-3 mb-[50px]">
        <div className="image w-full h-[400px] overflow-hidden relative group">
          {isNew && (
            <span className="absolute top-1 left-1 bg-white text-teal-500 px-1 py-1 z-40 font-medium text-xs">
              New Season
            </span>
          )}
          <img
            src={`${VITE_UPLOAD_URL}${img?.data?.attributes?.url}`}
            alt=""
            className="absolute z-10 object-cover w-full h-full mainImg"
          />
          <img
            src={`${VITE_UPLOAD_URL}${img2?.data?.attributes?.url}`}
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
