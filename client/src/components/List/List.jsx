import React from 'react'
import Card from '../Card/Card'

export default function List() {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/3672825/pexels-photo-3672825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Lorem ipsum dolor sit amet.',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/3690853/pexels-photo-3690853.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      img2: 'https://images.pexels.com/photos/2902151/pexels-photo-2902151.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Lorem ipsum dolor sit amet.',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/3319092/pexels-photo-3319092.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      img2: 'https://images.pexels.com/photos/3653614/pexels-photo-3653614.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Lorem ipsum dolor sit amet.',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/2801756/pexels-photo-2801756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/2960195/pexels-photo-2960195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Lorem',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ]
  return (
    <section className="flex justify-between flex-wrap">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  )
}
