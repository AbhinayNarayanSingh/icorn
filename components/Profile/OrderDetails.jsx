import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { INR_STYLE_HELPER } from '../../utils/Helper'


const OrderDetails = () => {
  const {shippingAddress, billingAddress, isBillingAddressIsSame, trackingStatus, trackingDetails, ...data} = useSelector(state => state.order)
  return (
    <div className="container-md min-h">
        <h2 className="f-w-600 mb-1">Your Orders</h2>

    <div className="order-details-container">

      <div className="address-container">
          {/* <h2 className="col-heading">Shipping Address</h2> */}

          <h5>{`${shippingAddress?.firstname} ${shippingAddress?.lastname}`}</h5>
          <p className="pt-05">{`${shippingAddress?.address}`}</p>
          <p>{`${shippingAddress?.city}, ${shippingAddress?.state}, ${shippingAddress?.country}-${shippingAddress?.postalCode}`}</p>

          <h3 className="mt-1">Phone Number : <span>{shippingAddress?.phoneNumber}</span></h3>

          <h3 className="mt-1">Status : <span>Out For Delivery</span></h3>

          <h3 className="mt-1">Your Rewards : <span>{data?.["reward"]} SuperCoins</span></h3>

          <h3 className='mt-1'>Expected to arrive : <span>{moment(data?.["carrier"]?.["expectedDeliveryDate"]).format("DD MMMM, YYYY")}</span></h3>
      </div>

      <h2 className='col-heading mt-2 mb-1'>Items</h2>

        {data?.item?.map((i) => {
          return (
            <div className={`order-product-container`}>
              <div className="d-flex">
                <img
                  src={i["images"]}
                  alt={i["name"]}
                  className="product-image"
                  />
                <div className="product-details mt-1">
                  <h2>{i["name"]}</h2>
                  <p className='expected-date'>Expected by {moment(data["carrier"]["expectedDeliveryDate"]).format("DD MMMM")}</p>
                </div>

                  
              </div>
              <h3 className="product-price">
                ₹ {INR_STYLE_HELPER(i["price"])}
              </h3>
            </div>
          )})}

      </div>
  </div>
  )
}

export default OrderDetails