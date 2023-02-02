import React, { useState } from 'react'
import {
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdAccountBalanceWallet,
} from 'react-icons/md'
export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const images = [
    'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1507698/pexels-photo-1507698.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  ]
  return (
    <main className="flex gap-12 px-12 py-5 -product">
      <section className="flex flex-1 gap-5 -left">
        <div className="flex-1 -images">
          <img
            src={images[0]}
            alt=""
            onClick={(e) => setSelectedImg(0)}
            className="object-cover w-full cursor-pointer h-36"
          />
          <img
            src={images[1]}
            alt=""
            onClick={(e) => setSelectedImg(1)}
            className="object-cover w-full cursor-pointer h-36"
          />
        </div>
        <div className="-mainImages flex-[5]">
          <img
            src={images[selectedImg]}
            alt=""
            className="w-full max-h-[800px] object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col flex-1 gap-8 -right">
        <h1>Title</h1>
        <span className="text-3xl text-[#2879fe] font-medium">$199</span>
        <p className="text-lg font-light text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          iusto iste hic dolore omnis exercitationem. Saepe delectus ex qui.
          Fugit.
        </p>
        <div className="flex items-center gap-2 -quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
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
        <button className="-add w-[250px] p-3 bg-[#2879fe] text-white flex items-center justify-center gap-5 cursor-pointer border-none font-medium">
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
    </main>
  )
}
