import { useSelector } from "react-redux";
import { useState } from "react";
import {
  BLACK,
  BLUE,
  BOX_ICON,
  BOX_SHADOW_C1,
  BOX_SHADOW_C2,
  BOX_SHADOW_C3,
  LOCATION_ICON,
  RADIO_CHECKED_ICON,
  RADIO_ICON,
  WHITE,
} from "../../../utils/Environment";
import { INR_STYLE_HELPER } from "../../../utils/Helper";

const Model = () => {
  const { product, productImages, productPrice, productAccessories } =
    useSelector((state) => state);
  const { size, specifications } = product;

  const [selectedProductImage, setSelectedProductImage] = useState(
    productImages[0]
  );
  const [productsVariants, setProductsVariants] = useState(product["color"][0]);
  const [productSize, setProductSize] = useState(size[0]);

  const [addOnAccessories, setAddOnAccessories] = useState([]);

  const addOnAccessoriesFn = (model, addOnAccessories) => {
    if (addOnAccessories?.includes(model)) {
      const n = addOnAccessories?.filter((value) => value !== model);
      setAddOnAccessories([...n]);
    } else setAddOnAccessories(() => [...addOnAccessories, model]);
  };

  return (
    <>
      <div className="product-page-container">
        <div className="row align-items-start product-page">
          <div className="col-12 col-md-5 product-image-container">
            <div className="product-image-section">
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

          <div className="col-12 col-md-7 product-details-container">
            <div className="product-details">
              <div className="delivery-estimate">
                <img src={LOCATION_ICON[0]} alt={LOCATION_ICON[1]} />
                <p>
                  Delivery at:{" "}
                  <span>Sahibzada Ajit Singh Nagar, Punjab, 160062</span>
                </p>
              </div>

              <h2>{product["name"]}</h2>

              <div className="product-price">
                <h3>
                  ₹ {INR_STYLE_HELPER(productPrice["sellingPrice"])}
                  <span>(Inclusive of all taxes)</span>
                </h3>

                <h4 className="mt-05">
                  <span>MRP {INR_STYLE_HELPER(productPrice["mrp"])}</span>
                  (Save ₹ {INR_STYLE_HELPER(productPrice["discount"])})
                </h4>
              </div>

              <div className="delivery-estimate">
                <img src={BOX_ICON[0]} alt={BOX_ICON[1]} />
                <p>
                  FREE delivery <span>Sunday, 2 October</span>.
                </p>
              </div>

              <p className="mt-2">
                Colour : <span>{productsVariants["color"]}</span>
              </p>

              <div className="product-variants">

                {product["color"].map((variant, index) => {
                  return (
                    <div className={productsVariants["colorCode"] == variant["colorCode"] &&
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

              <p className="mt-2">
                Size name : <span>{productSize}</span>
              </p>

              <div className="product-size">
                {size.map((size, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setProductSize(size)}
                      className={productSize === size && "active"}
                    >
                      <p>{size}</p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-2">Product Accessories</p>

              <div className="product-accessories hide-scrollbar">
                {productAccessories.map((i, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() =>
                        addOnAccessoriesFn(i["model"], addOnAccessories)
                      }
                    >
                      <div className="accessories-container">
                        <img
                          src={
                            addOnAccessories?.includes(i["model"])
                              ? RADIO_CHECKED_ICON[0]
                              : RADIO_ICON[0]
                          }
                          alt={RADIO_ICON[1]}
                        />
                        <div>
                          <p>{i["name"]}</p>
                          <h3>
                            ₹ {INR_STYLE_HELPER(i["sellingPrice"])}
                            <span>(Inclusive of all taxes)</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h2 className="mt-2">Specifications</h2>

              <div className="specifications-container">
                {specifications.map((item, index) => {
                  return (
                    <div key={index} className="row mb-1">
                      <span className="key col-4 col-md-3">{item[0]}</span>
                      <span className="value col-8">{item[1]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="user-action-container container-fluid">
        <div className="container row user-action">
          <div className="col-12 col-md-6">
            <h2>
              Your new {product["name"]}. <span>Just the way you want it.</span>
            </h2>
          </div>
          <div className="col-12 col-md-6 action-btn">
            <button className="secondary-btn">Add to Bag</button>
            <button className="primary-btn">BUY NOW</button>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          // Col-1 ----------------------------------------------------------------

          .product-image-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .product-image-container .main-product-image {
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${WHITE};
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
            background: ${WHITE};
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
            background-color: ${WHITE};
            padding: 1rem;
          }
          .product-details h2 {
            font-weight: 600;
            font-size: 32px;
            line-height: 39px;
            margin-bottom: 1rem;
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
          .product-details .product-price {
            margin-bottom: 1rem;
          }
          .product-details .delivery-estimate {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
          }
          .product-details .delivery-estimate img {
            height: 20px;
            margin-right: 0.5rem;
          }
          .product-details p span {
            font-weight: 600;
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

          .product-details .product-size .active {
            background: ${WHITE};
            border-color: ${BLUE};
          }
          .product-details .product-size {
            display: flex;
            margin-top: 1rem;
          }
          .product-details .product-size div {
            border: 2px solid #80808030;
            width: 75px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 1rem;
            cursor: pointer;
          }

          .product-details .product-accessories {
            display: flex;
            overflow: scroll;
          }

          .product-details .accessories-container {
            width: 320px;
            height: 75px;
            margin: 1rem;

            display: flex;
            align-items: center;

            background: #ffffff;
            box-shadow: ${BOX_SHADOW_C1};
            border-radius: 17px;
            padding: 1rem;
            cursor: pointer;
          }
          .product-details .accessories-container img {
            height: 20px;
            margin-right: 1rem;
          }
          .product-details .accessories-container p {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: ${BLACK};
            height: 50px;
          }
          .product-details .accessories-container h3 {
            font-size: 20px;
            font-weight: 600;
          }
          .product-details .accessories-container h3 span {
            margin-left: 0.5rem;
            font-size: 14px;
          }

          .product-details .key {
            font-weight: 600;
          }
          .product-details .value {
            line-height: 1.35rem;
          }

          // row -------------------------------------------------
          .product-page-container {
            max-width: 1700px;
            margin: auto;
            margin-bottom: 1rem;
          }

          //  user action -----------------------------------------

          .user-action-container {
            position: sticky;
            bottom: 0;
            background: #f5f5f7;

            box-shadow: ${BOX_SHADOW_C2};
          }
          .user-action {
            align-items: center;
          }
          .user-action h2 {
            font-weight: 600;
            font-size: 26px;
            line-height: 30px;

            color: ${BLACK};
            padding: 1rem 0;
          }
          .user-action h2 span {
            font-weight: 600;
            font-size: 26px;
            line-height: 30px;

            color: #6e6e73;
            padding: 1rem 0;
          }
          .user-action .action-btn {
            justify-content: end;
            display: flex;
          }
          .user-action .action-btn button {
            margin-left: 2rem;
          }

          @media only screen and (min-width: 600px) {
            .product-page {
              margin-top: 2rem;
            }
            .product-image-container {
              position: sticky;
              top: 2rem;
            }
            .product-details {
              margin-bottom: 1rem;
            }
            .product-image-section {
              margin-right: 2rem;
            }
          }

          @media only screen and (max-width: 600px) {
            .product-details .accessories-container {
              width: 280px;
              padding: 8px 16px;
            }
            .product-details .accessories-container p {
              font-size: 14px;
              line-height: 20px;
              height: 40px;
            }
            .product-details .accessories-container h3 {
              font-size: 15px;
              margin-top: 5px;
            }

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

            .user-action h2 {
              font-size: 18px;
              line-height: 25px;
              text-align: center;
              padding: 1rem;
            }
            .user-action h2 span {
              font-size: 18px;
              line-height: 25px;
            }
            .user-action .action-btn {
              padding-bottom: 1rem;
            }
            .user-action .action-btn button {
              margin: 0 0.5rem;
            }
            .product-image-container .product-images img:nth-of-type(1) {
              margin-left: 1rem;
            }
            .product-image-container .product-images img:nth-last-of-type(1) {
              margin-right: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Model;
