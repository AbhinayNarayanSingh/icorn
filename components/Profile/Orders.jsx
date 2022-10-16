import { useSelector } from "react-redux"
import Cards from "../../hoc/Cards/Cards"


const Orders = () => {

    const {orders} = useSelector(state => state)

  return (
    <div>
        <h2 className="f-w-600 mb-1">Your Orders</h2>

        {orders.map((item, index) => <Cards type={"Bag"} data={item} index={index} key={index} variant={true}/>)}
    </div>
  )
}

export default Orders