import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
export default function Cart() {
  const products = useSelector((state) => state.cart.products)
  const totalPrice = () => {
    let total = 0
    products.forEach((item) => {
      total += item.quantity * item.price
    })
    return total.toFixed(2)
  }
  const dispatch = useDispatch()
  return (
    <div className="cart absolute right-5 top-20 bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h1 className="text-2xl font-normal text-gray-500 mb-7">
        Products in your cart
      </h1>
      {products?.length === 0 ? (
        <h2 className="font-semibold text-2xl">The Cart is Empty</h2>
      ) : (
        products?.map((item) => (
          <div className="flex items-center gap-5 item mb-7" key={item.id}>
            <img src={item.img} alt="" className="object-cover w-20 h-28" />
            <div className="details ">
              <h1 className="text-lg font-medium">{item.title}</h1>
              <p className="mb-3 text-sm text-gray-500">
                {item.desc?.substring(0, 50)}
              </p>
              <div className="price text-[#2879fe]">
                {item.quantity}x ${item.price}
              </div>
            </div>
            <button
              className="text-2xl text-red-600 -delete"
              onClick={() => dispatch(removeItem(item.id))}
            >
              <MdDeleteOutline />
            </button>
          </div>
        ))
      )}
      <div className="total flex justify-between font-medium text-lg mb-5">
        <span>SUBTOTAL</span>
        <span>{totalPrice()}</span>
      </div>
      <button className="w-[250px] p-3 flex items-center justify-center gap-5 border-none bg-[#2979fe] text-white font-medium mb-5">
        PROCEED TO CHECKOUT
      </button>
      <button
        className="reset text-sm text-red-600"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </button>
    </div>
  )
}
