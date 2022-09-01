import { useSelector } from "react-redux";
import { useState } from "react";
import {
  BOX_ICON,
  LOCATION_ICON,
  RADIO_CHECKED_ICON,
  RADIO_ICON,
} from "../../../utils/Environment";
import { INR_STYLE_HELPER } from "../../../utils/Helper";

const Model = () => {
  const {
    product,
    productImages,
    productPrice,
    productVariants,
    productAccessories,
  } = useSelector((state) => state);
  const { size, specifications } = product;

  const [selectedProductImage, setSelectedProductImage] = useState(
    productImages[0]
  );
  const [productsVariants, setProductsVariants] = useState(productVariants[0]);
  const [productSize, setProductSize] = useState(size[0]);

  const [addOnAccessories, setAddOnAccessories] = useState([]);

  const addOnAccessoriesFn = (model, addOnAccessories) => {
    if (addOnAccessories?.includes(model)) {
      const n = addOnAccessories?.filter((value) => value !== model);
      setAddOnAccessories([...n]);
    } else setAddOnAccessories(() => [...addOnAccessories, model]);
  };

  return (
    <div className="container-xxl">
      <div className="row align-items-start">
        <div className="col-12 col-md-6 product-image-container">
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
                  onClick={() => setSelectedProductImage(productImages[index])}
                />
              );
            })}
          </div>
          <style jsx>{`
            .product-image-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .main-product-image {
              display: flex;
              justify-content: center;
              align-items: center;
              background: white;
              margin: 3rem 0 1rem;
              padding: 3rem;
            }
            .main-product-image img {
              width: 100%;
            }
            .product-images {
              overflow: scroll;
              display: flex;
              margin: 0 1rem 2rem;
            }
            .product-images img {
              background: white;
              height: 70px;
              width: 70px;
              margin-right: 1rem;
              padding: 1rem;
            }
          `}</style>
        </div>
        <div className="col-12 col-md-6">
          <div className="m-2">
            <div className="delivery-estimate pt-2">
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
              <h4>
                <span>MRP {INR_STYLE_HELPER(productPrice["mrp"])}</span>
                (Save ₹ {INR_STYLE_HELPER(productPrice["discount"])})
              </h4>
            </div>

            <div className="delivery-estimate">
              <img src={BOX_ICON[0]} alt={BOX_ICON[1]} />
              <p>
                Order today, FREE delivery by <span>Tuesday, August 16.</span>
              </p>
            </div>

            <p className="mt-2">
              Colour : <span>{productsVariants["color"]}</span>
            </p>

            <div className="product-variants">
              {productVariants.map((variant, index) => {
                return (
                  <span
                    key={index}
                    style={{ background: `${variant["colorCode"]}` }}
                    onClick={() => setProductsVariants(variant)}
                    className={
                      productsVariants["colorCode"] == variant["colorCode"] &&
                      "active"
                    }
                  ></span>
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
                    <span className="key col-4">{item[0]}</span>
                    <span className="value col-8">{item[1]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <style jsx>{`
            h2 {
              font-weight: 600;
              font-size: 32px;
              line-height: 39px;
              margin-bottom: 1rem;
            }
            h3 {
              font-weight: 600;
              font-size: 30px;
            }
            h3 span {
              font-weight: 600;
              font-size: 16px;
              margin-left: 0.5rem;
            }

            h4 span {
              font-weight: 600;
              font-size: 20px;
              text-decoration-line: line-through;
              color: #6e6e73;
              margin-right: 0.5rem;
            }
            h4 {
              font-weight: 600;
              font-size: 16px;
              color: #6e6e73;
            }
            .product-price {
              margin-bottom: 1rem;
            }
            .delivery-estimate {
              display: flex;
              align-items: center;
              margin-bottom: 1rem;
            }
            .delivery-estimate img {
              height: 20px;
              margin-right: 0.5rem;
            }
            p span {
              font-weight: 600;
            }
            .product-variants {
              display: flex;
            }
            .product-variants span {
              width: 32px;
              height: 32px;
              display: block;
              border-radius: 50%;
              margin: 1rem 1.25rem 0 0;
              cursor: pointer;
              box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.1);
            }
            .product-variants .active {
            }

            .product-size .active {
              background: white;
            }
            .product-size {
              display: flex;
              margin-top: 1rem;
            }
            .product-size div {
              width: 75px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 1rem;
              cursor: pointer;
              box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
              background: #e8e8e8;
            }
            .product-accessories {
              display: flex;
              overflow: scroll;
            }

            .accessories-container {
              width: 320px;
              height: 75px;
              margin: 1rem;

              display: flex;
              align-items: center;

              background: #ffffff;
              box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.15);
              border-radius: 17px;
              padding: 1rem;
              cursor: pointer;
            }
            .accessories-container img {
              height: 20px;
              margin-right: 1rem;
            }
            .accessories-container p {
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
              color: #000000;
              height: 50px;
            }
            .accessories-container h3 {
              font-size: 20px;
              font-weight: 600;
            }
            .accessories-container h3 span {
              margin-left: 0.5rem;
              font-size: 14px;
            }

            .key {
              font-weight: 600;
              margin-right: 1rem;
            }
            .value {
              margin-right: -1rem;
              line-height: 1.35rem;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Model;
