import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { BLACK, WHITE_BCK } from '../Environment'
import Cards from '../hoc/Cards/Cards'
import { INR_STYLE_HELPER } from '../utils/Helper'

const order = () => {
  const {shippingAddress, billingAddress, isBillingAddressIsSame, trackingStatus, trackingDetails, ...data} = useSelector(state => state.order)

  const varients = [ "model", "finish", "storage", "memory", "processor", "connectivity"]

  return (
    <div className="container-md min-h mt-2">
      <div className="order-details-container">

        <div className="address-container">
          <div className="col-md-8 col-12">
            <h2 className="col-heading">Shipping Address</h2>
            <p className="mt-1">{`${shippingAddress?.firstname} ${shippingAddress?.lastname}`}</p>
            <h5 className="pt-05">{`${shippingAddress?.address}, ${shippingAddress?.city}`}</h5>
            <h5>{`${shippingAddress?.state}, ${shippingAddress?.country}-${shippingAddress?.postalCode}`}</h5>
            <p className="mt-1">Phone Number : <span>{shippingAddress?.phoneNumber}</span></p>

            <p className="mt-1">Status : <span>Out For Delivery</span></p>
          </div>
          <div className='col-md-4 col-12'>
            <h2 className="col-heading" >Your Rewards</h2>
            <p><span>{data?.["reward"]} SuperCoins</span></p>
          </div>
        </div>

        <p className='mt-1'>Expected to arrive : <span>{moment(data?.["carrier"]?.["expectedDeliveryDate"]).format("DD MMMM, YYYY")}</span></p>




        {/* <div className="progress-bar">
          {trackingStatus && trackingStatus.map((step, index) => {
            return (
              <span className={step.timeStamp && "active"} key={index}>
                <h2>{step.name}</h2>
                <p>{step.timeStamp && moment(step.timeStamp).format("DD MMM, YY")}</p>
              </span>
            )})
          }
        </div> */}

        <p>Items</p>

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

                    {/* <div className='mt-05 varients'>
                      {varients?.map((n) => {
                        return (i?.varient?.[n] && <p>{n} : <span>{i?.varient?.[n]}</span></p>)
                      })}
                    </div> */}
                    
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

export default order

