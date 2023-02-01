import React, { useState } from 'react'
import { MdOutlineWest, MdOutlineEast } from 'react-icons/md'
import styles from './Slider.module.css'
export default function Slider() {
  const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
  }
  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="slider images" />
        <img src={data[1]} alt="slider images" />
        <img src={data[2]} alt="slider images" />
      </div>
      <div className={styles.icons}>
        <button className={styles.icon} onClick={prevSlide}>
          <MdOutlineWest />
        </button>
        <button className={styles.icon} onClick={nextSlide}>
          <MdOutlineEast />
        </button>
      </div>
    </div>
  )
}
