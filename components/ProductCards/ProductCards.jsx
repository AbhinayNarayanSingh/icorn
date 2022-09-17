import Link from "next/link";
import { RADIO_CHECKED_ICON } from "../../utils/Environment";
import { INR_STYLE_HELPER } from "../../utils/Helper";

const ProductCards = ({ type, data, index }) => {
  switch (type) {
    case "Hero":
      return (
        <div>
          <div className={`product-card ${index % 2 === 0 && "alter-product"}`}>
            <div className="col">
              <h2>{data["name"]}</h2>
              <h3>
                ₹ {INR_STYLE_HELPER(data["price"]["sellingPrice"])}
                <span>MRP {INR_STYLE_HELPER(data["price"]["mrp"])}</span>
              </h3>

              <h4 className="d-flex">
                {data["color"] &&
                  data["color"].map((i, index) => {
                    return (
                      <span
                        key={index}
                        style={{ background: `${i}` }}
                        className="product-color"
                      ></span>
                    );
                  })}
              </h4>

              <button>Buy Now</button>
            </div>
            <div className="col">
              <img
                src={data["images"]}
                alt={data["name"]}
                className="product-image"
              />
            </div>
          </div>
          <style jsx>{`
            .product-card {
              display: flex;
              justify-content: center;

              height: 500px;
              background: white;
              margin: 2rem 0;
              padding: 1.5rem 0;
            }

            .col {
              width: 45%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            .product-image {
              height: 350px;
            }
            .col h2 {
              font-weight: 600;
              font-size: 40px;
              line-height: 48px;
              text-align: center;
              margin-bottom: 1rem;
            }
            .col h3 {
              font-weight: 600;
              font-size: 32px;
              line-height: 39px;
            }
            .col h3 span {
              font-weight: 600;
              font-size: 18px;
              line-height: 22px;
              text-decoration-line: line-through;
              padding-left: 0.5rem;

              color: rgba(0, 0, 0, 0.8);
            }
            .col button {
              background: #0066cc;
              border-radius: 35px;
              width: 144px;
              height: 44px;
              color: white;

              display: flex;
              justify-content: center;
              align-items: center;

              margin-top: 2rem;
            }
            .alter-product {
              flex-direction: row-reverse;
            }
            .product-color {
              width: 18px;
              height: 18px;
              display: block;
              border-radius: 50%;
              margin: 1rem 0.5rem;
              cursor: pointer;
              box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.1);
            }

            @media only screen and (max-width: 600px) {
              .product-card {
                flex-direction: column;

                height: 450px;
                margin: 2rem 0;
              }

              .col {
                width: 100%;
              }
              .product-image {
                margin-top: 2rem;
                height: 250px;
              }
              .col h2 {
                font-size: 24px;
                line-height: 29px;
              }
              .col h3 {
                font-size: 20px;
                line-height: 19px;
              }
              .col h3 span {
                font-size: 12px;
              }
              .col button {
                width: 110px;
                height: 30px;

                margin-top: 1rem;

                font-weight: 600;
                font-size: 14px;
              }
            }
          `}</style>
        </div>
      );

    // case "Accessories":
    //   return (
    //     <div>
    //       <div className="accessories-container">
    //         <img src={RADIO_CHECKED_ICON[0]} alt={RADIO_CHECKED_ICON[1]} />
    //         <div>
    //           <p>{data["name"]}</p>
    //           <h3>
    //             ₹ {INR_STYLE_HELPER(data["sellingPrice"])}
    //             <span>(Inclusive of all taxes)</span>
    //           </h3>
    //         </div>
    //       </div>
    //       <style jsx>{`
    //         .accessories-container {
    //           width: 320px;
    //           height: 75px;
    //           margin: 1rem;

    //           display: flex;
    //           align-items: center;

    //           background: #ffffff;
    //           box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.15);
    //           border-radius: 17px;
    //           padding: 1rem;
    //         }
    //         img {
    //           height: 20px;
    //           margin-right: 0.75rem;
    //         }
    //         p {
    //           font-weight: 600;
    //           font-size: 16px;
    //           line-height: 20px;
    //           color: #000000;
    //           height: 50px;
    //         }
    //         h3 {
    //           font-size: 20px;
    //           font-weight: 600;
    //         }
    //         h3 span {
    //           margin-left: 0.5rem;
    //           font-size: 14px;
    //         }
    //       `}</style>
    //     </div>
    //   );

    default:
      return (
        <Link href={data["slug"]}>
          <div className={`product-card`}>
            <img
              src={data["images"]}
              alt={data["name"]}
              className="product-image"
            />
            <h4 className="d-flex">
              {data["color"] &&
                data["color"].map((i, index) => {
                  return (
                    <span
                      key={index}
                      style={{ background: `${i}` }}
                      className="product-color"
                    ></span>
                  );
                })}
            </h4>
            <h2 className={!data["color"] && `mt-2`}>{data["name"]}</h2>
            <style jsx>
              {`
                .product-card {
                  min-width: 288px;
                  width: 288px;
                  height: 375px;
                  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.05));
                  background: #ffffff;
                  border-radius: 15px;

                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  margin: 2rem 0 2rem 2rem;
                }
                .product-card:nth-last-of-type(1) {
                  margin: 2rem;
                }
                .product-card img {
                  height: 225px;
                  margin-bottom: 1rem;
                }
                .product-card h2 {
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 22px;
                }
                .product-color {
                  width: 16px;
                  height: 16px;
                  display: block;
                  border-radius: 50%;
                  margin: 1rem 0.25rem;
                  cursor: pointer;
                  box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.1);
                }
              `}
            </style>
          </div>
        </Link>
      );
  }
};
export default ProductCards;
