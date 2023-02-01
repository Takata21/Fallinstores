import React from 'react'

export default function Footer() {
  return (
    <div className="footer ml-[100px] my-[200px] mr-5">
      <div className="flex gap-12 top">
        <div className="flex flex-col flex-1 gap-3 text-sm text-justify item">
          <h1 className="text-lg font-medium text-[#555]">Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="flex flex-col flex-1 gap-3 text-sm text-justify item">
          <h1 className="text-lg font-medium text-[#555]">Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="flex flex-col flex-1 gap-3 text-sm text-justify item">
          <h1 className="text-lg font-medium text-[#555]">About</h1>
          <span className="text-[gray]">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="flex flex-col flex-1 gap-3 text-sm text-justify item">
          <h1 className="text-lg font-medium text-[#555]">Contact</h1>
          <span className="text-[gray]">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="flex bottom items-center justify-between mt-[50px]">
        <div className="flex items-center left">
          <span className="logo text-[#2879f6] font-bold text-2xl">
            Fallinstore
          </span>
          <span className="ml-5 text-xs text-gray-500 copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" className="h-12" />
        </div>
      </div>
    </div>
  )
}
