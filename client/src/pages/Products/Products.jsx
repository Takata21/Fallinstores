import { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'

export default function Products() {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState('asc')
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  )
  console.log(data)

  function handleChanges(e) {
    const value = e.target.value
    const isChecked = e.target.checked
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    )
  }
  return (
    <main className="flex px-12 py-8 -products">
      <aside className="flex-1 -left sticky h-full top-12">
        <div className="-filterItem mb-8">
          <h2 className="font-normal mb-5">Product Categories</h2>
          {data?.length === 0
            ? 'loading......'
            : data?.map((item) => (
                <div className="-input-item mb-3" key={item.id}>
                  <input
                    type="checkbox"
                    name={item.id}
                    id={item.id}
                    value={item.id}
                    onChange={handleChanges}
                  />
                  <label className="ml-3" htmlFor="1">
                    {item.attributes?.title}
                  </label>
                </div>
              ))}
        </div>
        <div className="-filterItem mb-8">
          <h2 className="font-normal mb-5">Filter by Price</h2>
          <div className="-input-item mb-3">
            <span>0</span>
            <input
              type="range"
              name="2"
              id="2"
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
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort('asc')}
              checked
            />
            <label className="ml-3" htmlFor="asc">
              Price (Lowest first){' '}
            </label>
          </div>
          <div className="-input-item mb-3">
            <input
              type="radio"
              name="price"
              id="desc"
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
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </section>
    </main>
  )
}
