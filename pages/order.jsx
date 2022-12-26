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

                    <div className='mt-05 varients'>
                      {varients?.map((n) => {
                        return (i?.varient?.[n] && <p>{n} : <span>{i?.varient?.[n]}</span></p>)
                      })}
                    </div>
                    
                </div>
                <h3 className="product-price">
                  ₹ {INR_STYLE_HELPER(i["price"])}
                </h3>
              </div>
            )})}

        </div>

        <style jsx>{`
          .order-product-container {
            display: flex;
            justify-content: space-between;
            position: relative;
          }
          .order-details-container{
            border-radius: 8px;
            width: 100%;
            cursor: pointer;
            background: ${WHITE_BCK};
            padding: 0 2rem;
          }
          .border-top{
            border-top: .75rem solid white;
          }
          img {
            height: 75px;
            width: 75px;
            object-fit: contain;
            padding: 1rem;
          }
          h2 {
            font-weight: 600;
            font-size: 16px;
            color: ${BLACK};
            margin-bottom: 0.25rem;
            line-height: 125%;
            margin-top: 1rem;
          }
          p {
            font-weight: 600;
            font-size: 12px;
          }
          p span {
            font-weight: 400;
            font-size: 12px;
          }
          h5 {
            font-size: 12px;
            padding-top: .25rem;
            line-height: 135%;
          }
          .product-price {
            display: none;
          }

          .progress-bar {
            padding-top: 1.25rem;
            height: 75px;
          }
          .progress-bar span{
            float: left;
            position: relative;
            padding-top: 2rem;
            width: 20%;

            font-size: .65rem;
            font-weight: 700;
          }

          .progress-bar span:before{
            content:"";
            width: 16px;
            height: 16px;
            border: 2px solid #cfcfcf;
            background: #cfcfcf;
            display: block;
            border-radius: 50%;
            position: absolute;
            top: 0;
            
          }
          .progress-bar span:not(:last-of-type):after {
            content: '';
            position: absolute;
            width:100%;
            height: 3px;
            background: #cfcfcf;
            top: 9px;
            left: 0;
            
          }

          .progress-bar span.active:not(:last-of-type):after {
            background: #3aac5d;
          }
          .progress-bar span.active:before{
            border-color: #3aac5d;
            background: #3aac5d;
          }
          .progress-bar .active h2, .progress-bar .active p {
            color: #3aac5d;
            font-weight: 600;
          }
          .progress-bar span h2{
            margin: 0;
            font-size: .75rem;
            color: grey;
          }

          .tracking-details h5{
            font-size: .9rem;
            margin-bottom: 0.75rem;
          }

          .tracking-details h3{
            font-size: .9rem;
            font-weight: 600;
          }
          .col-heading {
            font-size: 1rem;
            font-weight: 600;
          }
          .varients {
            text-transform: capitalize;
            line-height: 125%;
          }
          
          @media only screen and (min-width: 600px) {
            img {
              height: 100px;
              width: 100px;
              padding: 2rem;
              margin-right: 2rem;
            }
            h2 {
              font-size: 20px;
              margin-bottom: 0.5rem;
              line-height: 125%;
              margin-top: 2rem;
            }
            p {
              font-weight: 600;
              font-size: 14px;
            }
            p span {
              font-weight: 400;
              font-size: 14px;
            }
            h5 {
              font-size: 14px;
            }
            .product-price {
              display: block;
              margin: 2rem 1rem;
              font-weight: 600;
              font-size: 20px;
            }
            .address-container{
              display: flex;
              gap: 1rem;
            }
          }
          @media only screen and (max-width: 600px) {
            .order-details-container{
              padding: 0;
            }
            .address-container{
              padding: 0 .5rem;
            }
            .col-heading{
              padding-top: 1rem;
            }
            
          }
        `}</style>
    </div>
  )
}

export default order

