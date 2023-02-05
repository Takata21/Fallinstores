import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'

export default function List({ catId, maxPrice, sort, subCats }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId} ${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filter][price][$lqe]=${maxPrice}&sort=price:${sort}`
  )

  return (
    <section className="flex justify-between flex-wrap">
      {loading
        ? 'loading...'
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </section>
  )
}
