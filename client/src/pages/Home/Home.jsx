import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  )
}
