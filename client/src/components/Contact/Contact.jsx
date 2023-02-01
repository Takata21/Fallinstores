import React from 'react'
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
export default function Contact() {
  return (
    <section className="contact bg-[#2879fe] text-white p-4 flex justify-center">
      <div className="flex justify-between w-1/2 m-auto wrapper items-center">
        <span className="font-medium">BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input
            type="text"
            placeholder="Enter your e-mail..."
            className="p-3 border-none rounded-l-md"
          />
          <button className="p-3 text-white bg-[#333] rounded-r-md border-none">
            JOIN US
          </button>
        </div>
        <div className="flex items-center gap-3 icons">
          <AiFillFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiOutlineGoogle />
          <BsPinterest />
        </div>
      </div>
    </section>
  )
}

//   button{
//     padding: 10px;
//     color: white;
//     background: #333;
//     border-radius: 0 5px 5px 0;
//     border: none;
//   }
