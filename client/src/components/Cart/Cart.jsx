import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
export default function Cart() {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/3672825/pexels-photo-3672825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Lorem ipsum dolor sit amet.',
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo maiores dolorum, quod labore rem nesciunt, aperiam at sed earum incidunt tenetur tempore deserunt optio sequi repellendus aliquam natus magnam sapiente voluptatem explicabo quisquam illum! Molestiae nisi quibusdam id ducimus numquam consequuntur officia placeat eius error accusamus totam temporibus, omnis, sed fugit, quo earum vitae quos. Quo, eum impedit. Dolorem cum quos expedita ipsum cumque labore, vitae, laboriosam placeat ad aliquam pariatur non sed, sequi iure unde id autem corrupti qui quas! Dolorem necessitatibus quas odit accusamus quos tenetur vel laborum aspernatur corporis nesciunt aliquid cumque, quae consequuntur labore dolor non magnam libero perspiciatis. Corrupti officia accusantium illum sed, nobis ipsam aliquam, perferendis cupiditate facere harum doloribus at eius non odio perspiciatis? Provident, ipsum obcaecati ullam fugiat ex alias in quas odit deserunt temporibus cum atque asperiores harum voluptatem sed aspernatur ad minus vitae dolorum. At commodi quia aliquam itaque?',
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/3690853/pexels-photo-3690853.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      img2: 'https://images.pexels.com/photos/2902151/pexels-photo-2902151.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Lorem ipsum dolor sit amet.',
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo maiores dolorum, quod labore rem nesciunt, aperiam at sed earum incidunt tenetur tempore deserunt optio sequi repellendus aliquam natus magnam sapiente voluptatem explicabo quisquam illum! Molestiae nisi quibusdam id ducimus numquam consequuntur officia placeat eius error accusamus totam temporibus, omnis, sed fugit, quo earum vitae quos. Quo, eum impedit. Dolorem cum quos expedita ipsum cumque labore, vitae, laboriosam placeat ad aliquam pariatur non sed, sequi iure unde id autem corrupti qui quas! Dolorem necessitatibus quas odit accusamus quos tenetur vel laborum aspernatur corporis nesciunt aliquid cumque, quae consequuntur labore dolor non magnam libero perspiciatis. Corrupti officia accusantium illum sed, nobis ipsam aliquam, perferendis cupiditate facere harum doloribus at eius non odio perspiciatis? Provident, ipsum obcaecati ullam fugiat ex alias in quas odit deserunt temporibus cum atque asperiores harum voluptatem sed aspernatur ad minus vitae dolorum. At commodi quia aliquam itaque?',
    },
  ]
  return (
    <div className="cart absolute right-5 top-20 bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h1 className="text-2xl font-normal text-gray-500 mb-7">
        Products in your cart
      </h1>
      {data?.map((item) => (
        <div className="flex items-center gap-5 item mb-7" key={item.id}>
          <img src={item.img} alt="" className="object-cover w-20 h-28" />
          <div className="details ">
            <h1 className="text-lg font-medium">{item.title}</h1>
            <p className="mb-3 text-sm text-gray-500">
              {item.desc?.substring(0, 50)}
            </p>
            <div className="price text-[#2879fe]">1 x ${item.price}</div>
          </div>
          <button className="text-2xl text-red-600 -delete">
            <MdDeleteOutline />
          </button>
        </div>
      ))}
      <div className="total flex justify-between font-medium text-lg mb-5">
        <span>SUBTOTAL</span>
        <span>$353</span>
      </div>
      <button className="w-[250px] p-3 flex items-center justify-center gap-5 border-none bg-[#2979fe] text-white font-medium mb-5">
        PROCEED TO CHECKOUT
      </button>
      <button className="reset text-sm text-red-600" onClick="">
        Reset Cart
      </button>
    </div>
  )
}
