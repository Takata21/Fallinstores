import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Categories.module.css'
export default function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link className="link" to="/products/1">
            Women
          </Link>
        </div>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link className="link" to="/products/1">
            Sale
          </Link>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/products/1" className="link">
            New Season
          </Link>
        </div>
      </div>
      <div className={`${styles.col} ${styles.coll}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <Link to={`/products/2`} className="link">
                Men
              </Link>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <Link to="/products/1" className="link">
                Accessories
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/products/1" className="link">
            Shoes
          </Link>
        </div>
      </div>
    </section>
  )
}
