import { useSelector } from "react-redux";
import { useState } from "react";
import {
  BLACK,
  BLUE,
  BOX_SHADOW_C3,
  WHITE,
  WHITE_BCK,
} from "../../../utils/Environment";
import { INR_STYLE_HELPER } from "../../../utils/Helper";

const Model = () => {
  const { product, productImages, productPrice, productAccessories } =
    useSelector((state) => state);
  const { storage, specifications, model } = product;

  const [selectedProductImage, setSelectedProductImage] = useState(productImages[0]);
  const [selectedModelBasePrice, setSelectedModelBasePrice] = useState(productPrice["sellingPrice"])
  
  const [productModel, setProductModel] = useState(model[0].name)
  const [productSize, setProductSize] = useState(storage[0].size);
  const [productsVariantsColour, setProductsVariants] = useState(product["color"][0]);

  const [finalPrice, setFinalPrice] = useState(productPrice["sellingPrice"])
  const [addOnState, setAddOnState] = useState({
      "basePrice" : productPrice['sellingPrice'],
      "model" : 0,
      "storage" : 0,
    })

  const updatedPrice = (key, value) => {
    if (key === "model") {
      setSelectedModelBasePrice(() => productPrice['sellingPrice'] + value)
    }
    const addOn = addOnState
    addOn[key] = value

    const updatedPrice = Object.values(addOn).reduce((a, b) => a + b) 
    setFinalPrice(updatedPrice)
    setAddOnState(addOn)
    }

  // const [addOnAccessories, setAddOnAccessories] = useState([]);

  // const addOnAccessoriesFn = (model, addOnAccessories) => {
  //   if (addOnAccessories?.includes(model)) {
  //     const n = addOnAccessories?.filter((value) => value !== model);
  //     setAddOnAccessories([...n]);
  //   } else setAddOnAccessories(() => [...addOnAccessories, model]);
  // };

  return (
    <div className="container-fluid pdp-conatiner-fluid">
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
                <h2 className="product-varient">{productModel + " " + productSize + " " + productsVariantsColour.color}</h2>
                <h5 className="product-varient-final-price">Just the way you want it. From ₹{INR_STYLE_HELPER(finalPrice)}‡</h5>
              </div>

              <p>Model. <span>Which is best for you.</span></p>
              <div className="product-model mt-1">
                {model.map((i, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setProductModel(i.name)
                        updatedPrice("model", i.price)
                      }}
                      className={`${productModel === i.name && "active"} model-card-container col-12`}
                    >
                      <h2>{i.name}</h2>
                      <p>{i.description} - From ₹{INR_STYLE_HELPER(productPrice['sellingPrice'] + i.price)}‡</p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-2">Finish. <span>Pick your favourite.</span></p>
              <div className="product-variants">
                {product["color"].map((variant, index) => {
                  return (
                    <div className={productsVariantsColour["colorCode"] == variant["colorCode"] &&
                      "active" + " " + "color-container"
                    }
                    >
                      <span
                        key={index}
                        style={{ background: `${variant["colorCode"]}` }}
                        onClick={() => setProductsVariants(variant)}
                      ></span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-2">Storage. <span>How much space do you need.</span></p>
              <div className="product-size mt-1">
                {storage.map((i, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setProductSize(i.size)
                        updatedPrice("storage", i.price)
                      }}
                      className={`price-card-container ${productSize === i.size && "active"}`}
                    >
                      <h2>{i.size}</h2>
                      <p>MRP ₹{INR_STYLE_HELPER(selectedModelBasePrice + i.price)}‡ (Incl. of all taxes)</p>
                    </div>
                  );
                })}
              </div>

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
                  <span className="key col-4 col-md-2">{item[0]}</span>
                  <span className="value col-8 col-md-9">{item[1]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>
        {`
        .pdp-conatiner-fluid {
          background: ${WHITE};
        }

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
            // background: ${WHITE_BCK};
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
          .product-details .product-variants {
            display: flex;
            margin: 1rem 0 0;
          }
          .product-details .product-variants span {
            width: 32px;
            height: 32px;
            display: block;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: ${BOX_SHADOW_C3};
          }
          .product-details .product-variants div {
            border: 2px solid transparent;
            border-radius: 50%;
            padding: 4px;
            margin-right: 10px;
          }
          .product-details .product-variants .active{
            border: 2px solid #0066cc;
          }

          .active {
            border-color : ${BLUE} !important;
          }
          .product-details .product-size .price-card-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            padding: 1rem;
            min-width: 150px;
            border: 2px solid #80808030;
            border-radius: 15px;
            margin-top: .5rem;
          }
          .product-details .product-model .model-card-container{
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
          .product-details .product-size h2,
          .product-details .product-model h2 {
            font-size: 1.2rem;
            line-height: 1.5rem;
            margin: 0;
          }
          .product-details .product-size p,
          .product-details .product-model p {
            margin: .15rem 0 0;
            font-size: 12px;
          }
          .product-details .product-model p,
          .product-details .product-size p {
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
    </div>
  );
};

export default Model;
