import { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'

export default function Products() {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <main className="flex px-12 py-8 -products">
      <aside className="flex-1 -left sticky h-full top-12">
        <div className="-filterItem mb-8">
          <h2 className="font-normal mb-5">Product Categories</h2>
          <div className="-input-item mb-3">
            <input type="checkbox" name="1" id="1" value={1} />
            <label className="ml-3" htmlFor="1">
              Shoes
            </label>
          </div>
          <div className="-input-item mb-3">
            <input type="checkbox" name="2" id="2" value={2} />
            <label className="ml-3" htmlFor="2">
              Skirt
            </label>
          </div>
          <div className="-input-item mb-3">
            <input type="checkbox" name="3" id="3" value={3} />
            <label className="ml-3" htmlFor="3">
              Coast
            </label>
          </div>
        </div>
        <div className="-filterItem mb-8">
          <h2 className="font-normal mb-5">Filter by Price</h2>
          <div className="-input-item mb-3">
            <span>0</span>
            <input
              type="range"
              name=""
              id=""
              min={0}
              max={100}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="-filterItem mb-8">
          <h2 className="font-normal mb-5">Sort by</h2>
          <div className="-input-item mb-3">
            <input
              type="radio"
              name="asc"
              id="price"
              value="asc"
              onChange={(e) => setSort('asc')}
            />
            <label className="ml-3" htmlFor="asc">
              Price (Lowest first){' '}
            </label>
          </div>
          <div className="-input-item mb-3">
            <input
              type="radio"
              name="desc"
              id="price"
              value="desc"
              onChange={(e) => setSort('desc')}
            />
            <label className="ml-3" htmlFor="desc">
              Price (Highest first){' '}
            </label>
          </div>
        </div>
      </aside>
      <section className="-right flex-[3]">
        <div className="right">
          <img
            className="catImg w-full h-[300px] mb-12 object-cover"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats="" />
        </div>
      </section>
    </main>
  )
}
