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
          <h2 className="col-heading">Shipping Address</h2>
          <p className="mt-1">{`${shippingAddress?.firstname} ${shippingAddress?.lastname}`}</p>
          <h5 className="pt-05">{`${shippingAddress?.address}`}</h5>
          <h5>{`${shippingAddress?.city}, ${shippingAddress?.state}, ${shippingAddress?.country}-${shippingAddress?.postalCode}`}</h5>

          <p className="mt-1">Phone Number : <span>{shippingAddress?.phoneNumber}</span></p>

          <p className="mt-1">Status : <span>Out For Delivery</span></p>

          <p className="mt-1">Your Rewards : <span>{data?.["reward"]} SuperCoins</span></p>

          <p className='mt-1'>Expected to arrive : <span>{moment(data?.["carrier"]?.["expectedDeliveryDate"]).format("DD MMMM, YYYY")}</span></p>
      </div>

      <p className='col-heading mt-1 mb-1'>Items</p>

        {data?.item?.map((i) => {
          return (
            <div className={`order-product-container`}>
              <div className="d-flex">
                <img
                  src={i["images"]}
                  alt={i["name"]}
                  className="product-image"
                  />
                <div className="product-details">
                  <h2>{i["name"]}</h2>
                  <p>Expected by {moment(data["carrier"]["expectedDeliveryDate"]).format("DD MMMM")}</p>
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