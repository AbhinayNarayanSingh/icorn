import React from 'react'
import { useSelector } from 'react-redux'
import Cards from "../../hoc/Cards/Cards"

const SavedProducts = () => {

    const {relatedProducts} = useSelector(state => state)

  return (
    <div>
        <h2 className="f-w-600 mb-1">Saved Product ({relatedProducts.length})</h2>

        {relatedProducts.map((item, index) => <Cards type={"Bag"} data={item} index={index} key={index} variant={true}/>)}
    </div>
  )
}

export default SavedProducts