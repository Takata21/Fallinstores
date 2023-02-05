import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { VITE_UPLOAD_URL } from '../../config'
import {
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdAccountBalanceWallet,
} from 'react-icons/md'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'
export default function Product() {
  const dispatch = useDispatch()
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState('img')
  const [quantity, setQuantity] = useState(1)
  const { data, loading } = useFetch(`/products/${id}?populate=*`)
  return (
    <main className="flex gap-12 px-12 py-5 -product">
      {loading ? (
        'Loading...'
      ) : (
        <>
          <section className="flex flex-1 gap-5 -left">
            <div className="flex-1 -images">
              <img
                src={
                  VITE_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg('img')}
                className="object-cover w-full cursor-pointer h-36"
              />
              <img
                src={
                  VITE_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg('img2')}
                className="object-cover w-full cursor-pointer h-36"
              />
            </div>
            <div className="-mainImages flex-[5]">
              <img
                src={
                  VITE_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
                className="w-full max-h-[800px] object-cover"
              />
            </div>
          </section>
          <section className="flex flex-col flex-1 gap-8 -right">
            <h1>{data?.attributes?.title}</h1>
            <span className="text-3xl text-[#2879fe] font-medium">
              ${data?.attributes?.price}
            </span>
            <p className="text-lg font-light text-justify">
              {data?.attributes?.desc}
            </p>
            <div className="flex items-center gap-2 -quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
                className="flex items-center justify-center w-12 h-12 bg-gray-200 border-none cursor-pointer"
              >
                -
              </button>
              {quantity}
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="flex items-center justify-center w-12 h-12 bg-gray-200 border-none cursor-pointer"
              >
                +
              </button>
            </div>
            <button
              className="-add w-[250px] p-3 bg-[#2879fe] text-white flex items-center justify-center gap-5 cursor-pointer border-none font-medium"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img:
                      VITE_UPLOAD_URL + data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <MdAddShoppingCart /> ADD TO CART
            </button>
            <div className="flex gap-5 -links">
              <button className="-item flex items-center gap-2 text-[14px] text-[#2879fe]">
                <MdFavoriteBorder /> ADD TO WISH LIST
              </button>
              <button className="-item flex items-center gap-2 text-[14px] text-[#2879fe]">
                <MdAccountBalanceWallet /> ADD TO COMPARE
              </button>
            </div>
            <div className="-info flex flex-col gap-3 text-gray-500 text-[14px] mt-7">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr className="border border-solid border-gray-200" />
            <div className="info flex flex-col gap-3 text-gray-500 text-[14px] mt-7">
              <span>DESCRIPTION</span>
              <hr className="w-[200px] border border-solid border-gray-200" />
              <span>ADDITIONAL INFORMATION</span>
              <hr className="w-[200px] border border-solid border-gray-200" />
              <span>FAQ</span>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
