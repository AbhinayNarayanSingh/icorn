import { useSelector } from "react-redux"
import ProductCards from "../ProductCards/ProductCards"


const Orders = () => {

    const {orders} = useSelector(state => state)

  return (
    <div>
        <h2 className="f-w-600 mb-1">Your Orders</h2>

        {orders.map((item, index) => <ProductCards type={"Bag"} data={item} index={index} key={index} variant={true}/>)}
    </div>
  )
}

export default Orders