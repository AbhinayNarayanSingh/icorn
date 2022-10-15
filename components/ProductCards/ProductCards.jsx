import Link from "next/link";
import { BLACK, BLUE, BOX_SHADOW_C3, BOX_SHADOW_LIGHT, WHITE, WHITE_BCK } from "../../utils/Environment";
import { INR_STYLE_HELPER } from "../../utils/Helper";

const ProductCards = ({ type, data, index, variant }) => {
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
              max-width: 1400px;

              height: 500px;
              background: ${WHITE};
              margin: 2rem auto;
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
              background: ${BLUE};
              border-radius: 35px;
              width: 144px;
              height: 44px;
              color: ${WHITE};

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
              box-shadow: ${BOX_SHADOW_C3};
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

    case "Bag":
      return (
        <>
          <div className={`bag-product-container ${variant && "variant"}`}>
            <h4 className="remove-product">Remove</h4>
            <div className="d-flex">
              <img
                src={data["images"]}
                alt={data["name"]}
                className="product-image"
              />
              <div className="product-details">
                <h2>{data["name"]}</h2>
                <p>Wed 17 Aug — Free Delivery</p>
              </div>
            </div>
            <h3 className="product-price">
              ₹ {INR_STYLE_HELPER(data["price"]["sellingPrice"])}
            </h3>
          </div>

          <style jsx>{`
            .bag-product-container {
              display: flex;
              justify-content: space-between;
              background: ${WHITE_BCK};
              border-radius: 8px;
              margin-bottom: 1rem;
              position: relative;
              width: 100%;
              cursor: pointer;
            }
            .bag-product-container:hover{
              BOX-SHADOW: ${BOX_SHADOW_LIGHT};
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
            .product-price {
              display: none;
            }
            .remove-product {
              position: absolute;
              right: 1rem;
              bottom: 1rem;
              cursor: pointer;
              font-weight: 600;
              font-size: 14px;
              color: #0066cc;
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
              .product-price {
                display: block;
                margin: 2rem 1rem;
                font-weight: 600;
                font-size: 20px;
              }
              .remove-product {
                bottom: 2rem;
                font-size: 16px;
              }
            }
          `}</style>
        </>
      );

    default:
      return (
        <Link href={data["slug"]}>
          <div className="product-card-container">
            <div className={`product-card ${variant != "LANDING_PAGE" && "product-card-bck"}`}>
              <img
                src={data["images"]}
                alt={data["name"]}
                className="product-image"
              />
              <h4 className="d-flex">
                {data["color"] &&
                  data["color"].slice(0,5).map((i, index) => {
                    return (
                      <span
                        key={index}
                        style={{ background: `${i}` }}
                        className="product-color"
                      ></span>
                    );
                  })}
              </h4>
              <h2>{data["name"]}</h2>
            </div>
            <style jsx>
              {`
                .product-card {
                  min-width: 325px;
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

                  cursor: pointer;
                }
                .product-card-bck{
                  background: ${WHITE_BCK};
                }
                .product-card-bck:hover{
                  BOX-SHADOW: ${BOX_SHADOW_LIGHT};
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
                  box-shadow: ${BOX_SHADOW_C3};
                }
                h4{
                  min-height: 48px;
                }
                @media only screen and (max-width: 600px) {
                  .product-card-container {
                    min-width: 100vw;
                    display: flex;
                    justify-content: center;
                    margin: 0;
                  }
                }
              `}
            </style>
          </div>
        </Link>
      );
  }
};
export default ProductCards;
