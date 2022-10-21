import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  BLUE,
  BOX_SHADOW_C3,
  WHITE,
} from "../../../utils/Environment";
import { INR_STYLE_HELPER } from "../../../utils/Helper";

const Model = () => {
  const { product, productImages, varients } = useSelector((state) => state);
  const { specifications, base_price:base } = product;
  const { storage, model, finish, connectivity, memory, processor } = varients

  const voidPrice = {addonPrice : 0}
  const voidModelPrice = {addonPrice : base}

  const [selectedProductImage, setSelectedProductImage] = useState(productImages[0]);
  const [finalPrice, setFinalPrice] = useState(base)

  
  const [productModel, setProductModel] = useState(model?.[0] || voidModelPrice)
  const [productStorage, setProductStorage] = useState(storage?.[0] || voidPrice);
  const [productFinish, setProductFinish] = useState(finish?.[0] || voidPrice);
  const [productMemory, setProductMemory] = useState(memory?.[0] || voidPrice);
  const [productProcessor, setProductProcessor] = useState(processor?.[0] || voidPrice);
  const [productConnectivity, setProductConnectivity] = useState(connectivity?.[0] || voidPrice);

  // productProcessor.[addonPrice]


  const [addOnState, setAddOnState] = useState({
      "model" : model?.[0].addonPrice || base || 0,
      "storage" : storage?.[0].addonPrice || 0,
      "finish" :  finish?.[0].addonPrice || 0,
      "connectivity" : connectivity?.[0].addonPrice || 0,
      "memory" : memory?.[0].addonPrice || 0,
      "processor" : processor?.[0].addonPrice || 0,
    })

  const updatedPrice = (key, value) => {
    const addOn = addOnState
    addOn[key] = value

    const updatedPrice = Object.values(addOn).reduce((a, b) => a + b) 
    setFinalPrice(updatedPrice)
    setAddOnState(addOn)
  }
  
  useEffect(() => {
    const updatedPrice = Object.values(addOnState).reduce((a, b) => a + b) 
    setFinalPrice(updatedPrice)
  }, [])
  

  // const [addOnAccessories, setAddOnAccessories] = useState([]);

  // const addOnAccessoriesFn = (model, addOnAccessories) => {
  //   if (addOnAccessories?.includes(model)) {
  //     const n = addOnAccessories?.filter((value) => value !== model);
  //     setAddOnAccessories([...n]);
  //   } else setAddOnAccessories(() => [...addOnAccessories, model]);
  // };

  return (
    <>
      <div className="container-xxl">
        <div className="row align-items-start justify-content-between product-page">

          <div className="col-12 col-md-6 product-image-container">
            <div>
              <div className="main-product-image">
                <img src={selectedProductImage} alt={product["name"]} />
              </div>

              <div className="product-images hide-scrollbar">
                {productImages.map((i, index) => {
                  return (
                    <img
                      src={i}
                      alt={product["name"]}
                      key={index}
                      onClick={() =>
                        setSelectedProductImage(productImages[index])
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 product-details-container">

            <div className="product-details">
              <div>
                <h2 className="product-varient">{product.name}</h2>
                <h5 className="product-varient-final-price">Just the way you want it. From ₹{INR_STYLE_HELPER(finalPrice)}‡</h5>
              </div>

              {model && (
                <>
                  <p className="mt-2">Model. <span>Which is best for you.</span></p>
                  <div className="product-variants-001 mt-1">
                    {model.map((i, index) => {
                      return (
                        <div key={index} onClick={() => {
                            setProductModel(i)
                            updatedPrice("model", i.addonPrice)
                          }} className={`${productModel.name === i.name && "active"} card-container col-12`} >
                          <h2>{i.name}</h2>
                          <p>{i.description} - From ₹{INR_STYLE_HELPER(i.addonPrice)}‡</p>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {finish && (
              <>
                <p className="mt-2">Finish. <span>Pick your favourite.</span></p>
                <div className="product-variants-002">
                  {finish.map((i, index) => {
                    return (
                      <div className={`${productFinish["additionalDetails"] == i["additionalDetails"] && "active"} color-container`}
                      onClick={() => {
                        setProductFinish(i)
                        updatedPrice("finish", i.addonPrice)
                      }}
                      >
                        <span
                          key={index}
                          style={{ background: `${i["additionalDetails"]}` }}
                        ></span>
                        <h2 className="mt-05">{i["name"]}</h2>
                        <p>MRP ₹{INR_STYLE_HELPER(productModel["addonPrice"] + i.addonPrice)}‡</p>
                      </div>
                    );
                  })}
                </div>
              </>
              )}

              {processor && (
                <>
                  <p className="mt-2">Processor. <span>Which chip is right for you.</span></p>
                  <div className="product-variants-001 mt-1">
                    {processor.map((i, index) => {
                      return (
                        <div key={index} onClick={() => {
                            setProductProcessor(i)
                            updatedPrice("processor", i.addonPrice)
                          }} className={`card-container ${productProcessor.name === i.name && "active"}`} >
                          <h2>{i.name}</h2>
                          <p>MRP ₹{INR_STYLE_HELPER(productModel["addonPrice"] + productFinish["addonPrice"] + i.addonPrice)}‡ (Incl. of all taxes)</p>

                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {memory && (
              <>
                <p className="mt-2">Memory. <span>How much memory is right for you.</span></p>
                <div className="product-variants-001 mt-1">
                  {memory.map((i, index) => {
                    return (
                      <div key={index} onClick={() => {
                          setProductMemory(i)
                          updatedPrice("memory", i.addonPrice)
                        }} className={`card-container ${productMemory.name === i.name && "active"}`} >
                        <h2>{i.name}</h2>
                        <p>MRP ₹{INR_STYLE_HELPER(productModel["addonPrice"] + productFinish["addonPrice"] + productProcessor["addonPrice"] + i.addonPrice)}‡ (Incl. of all taxes)</p>
                      </div>
                    );
                  })}
                </div>
              </>
              )}

              {storage && (
                <>
                  <p className="mt-2">Storage. <span>How much space do you need.</span></p>
                  <div className="product-variants-001 mt-1">
                    {storage.map((i, index) => {
                      return (
                        <div key={index} onClick={() => {
                            setProductStorage(i)
                            updatedPrice("storage", i.addonPrice)
                          }} className={`card-container ${productStorage.name === i.name && "active"}`} >
                          <h2>{i.name}</h2>
                          <p>MRP ₹{INR_STYLE_HELPER(productModel["addonPrice"] + productFinish["addonPrice"] + productProcessor["addonPrice"] + productMemory["addonPrice"] + i.addonPrice)}‡ (Incl. of all taxes)</p>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {connectivity && (
                <>
                  <p className="mt-2">Connectivity. <span></span></p>
                  <div className="product-variants-001 mt-1">
                    {connectivity.map((i, index) => {
                      return (
                        <div key={index} onClick={() => {
                          setProductConnectivity(i)
                            updatedPrice("connectivity", i.addonPrice)
                          }} className={`card-container ${productConnectivity.name === i.name && "active"}`} >
                          <h2>{i.name}</h2>
                          <p>MRP ₹{INR_STYLE_HELPER(productModel["addonPrice"] + productFinish["addonPrice"] + productProcessor["addonPrice"] + productMemory["addonPrice"] + productStorage["addonPrice"] + i.addonPrice)}‡ (Incl. of all taxes)</p>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}


              <div className="action-btn justify-content-around row mt-2">
                <button className="secondary-btn w-48">Add to Bag</button>
                <button className="primary-btn w-48">Buy Now</button>
              </div>

              <h5 className="mt-1">Still deciding? Add this item to a list and easily come back to it later.</h5>
            </div>

          </div>

        </div>

        <div className="specifications-container mt-2">
          <h2>Specifications</h2>

          <div className="mt-1">
            {specifications.map((item, index) => {
              return (
                <div key={index} className="row mb-1">
                  <span className="key col-4 col-md-2">{item.name}</span>
                  <span className="value col-8 col-md-9">{item.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>
        {`
        .product-varient{
          font-size: 1.5rem;
          font-weight: 600;
        }
        .product-varient-final-price{
          margin: .25rem 0 2rem;
        }
          // Col-1 ----------------------------------------------------------------

          .product-image-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: ${WHITE};
          }
          .product-image-container .main-product-image {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3rem;
            margin-bottom: 1rem;
          }
          .product-image-container .main-product-image img {
            width: 100%;
          }
          .product-image-container .product-images {
            overflow: scroll;
            display: flex;
            margin: 0 0 1rem;
          }
          .product-image-container .product-images img {
            height: 70px;
            width: 70px;
            padding: 1rem;
            margin-right: 1rem;
          }
          .product-image-container .product-images img:nth-last-of-type(1) {
            margin-right: 0;
          }

          // col-2  -------------------------------------------------------------------------

          .product-details {
            padding: 1rem;
          }
          .specifications-container{
            margin : 1rem;
          }
          .specifications-container h2 {
            font-weight: 600;
            font-size: 24px;
            line-height: 39px;
          }
          .product-details h3 {
            font-weight: 600;
            font-size: 30px;
          }
          .product-details h3 span {
            font-weight: 600;
            font-size: 16px;
            margin-left: 0.5rem;
          }

          .product-details h4 span {
            font-weight: 600;
            font-size: 1rem;
            text-decoration-line: line-through;
            color: #6e6e73;
            margin-right: 0.5rem;
          }
          .product-details h4 {
            font-weight: 600;
            font-size: 16px;
            color: #6e6e73;
          }
          .product-details p {
            font-weight: 600;
          }
          .product-details p span {
            font-weight: 600;
            color: #6e6e73;
          }
          .product-details .product-variants-002 {
            margin-top: 1rem;

            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .product-details .product-variants-002 span {
            width: 2.25rem;
            height: 2.25rem;
            display: block;
            border-radius: 50%;
            box-shadow: ${BOX_SHADOW_C3};
          }
          .product-details .product-variants-002 div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            border-radius: 10px;
            border: 2px solid #80808030;
            cursor: pointer;
            padding: 1rem 0;

            margin: 0 .25rem .5rem ;
          }
          .active {
            border-color : ${BLUE} !important;
          }
          .product-details .product-variants-001 .card-container
           {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            padding: 1rem 0;
            border: 2px solid #80808030;
            border-radius: 15px;
            margin-top: .5rem;
          }
          .product-details .product-variants-001 h2 {
            font-size: 1.2rem;
            line-height: 1.5rem;
            margin: 0;
          }
          .product-details .product-variants-001 p {
            margin: .15rem 0 0;
            font-size: 12px;
          }
          .product-details .product-variants-001 p,
          .product-details .product-variants-002 p {
            margin: .15rem 0 0;
            font-size: 12px;
            font-weight: 400;
          }
          .product-details .key {
            font-weight: 600;
          }
          .product-details .value {
            line-height: 1.35rem;
          }

          @media only screen and (min-width: 600px) {
            .product-page {
              padding-top: 2rem;
            }
            .product-image-container {
              position: sticky;
              top: 2rem;
            }
            .product-details {
              margin-bottom: 1rem;
            }
          }

          @media only screen and (max-width: 600px) {

            .product-details h3 {
              font-size: 24px;
            }
            .product-details h4 {
              font-size: 14px;
            }
            .product-details span {
              font-size: 15px;
              line-height: 20px;
            }
            .product-image-container .product-images img:nth-of-type(1) {
              margin-left: 1rem;
            }
            .product-image-container .product-images img:nth-last-of-type(1) {
              margin-right: 1rem;
            }
            .product-image-container .main-product-image {
              padding: 3rem 1rem;
              margin-bottom: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Model;
