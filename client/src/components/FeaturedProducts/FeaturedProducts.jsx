import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  )

  return (
    <div className="featuredProducts my-[100px] mx-[200px]">
      <div className="top flex items-center justify-between mb-12">
        <h2 className="flex-[2] capitalize font-bold text-2xl">
          {type} products
        </h2>
        <p className="flex-[3] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom flex justify-center gap-12">
        {error
          ? 'Something went wrong'
          : loading
          ? 'Loading...'
          : data?.map((item) => {
              return <Card key={item.id} item={item} />
            })}
      </div>
    </div>
  )
}
