const ProductCards = ({ type, data, index }) => {
  switch (type) {
    case "Hero":
      return (
        <div>
          <div
            className={`product-card ${index % 2 === 0 && "flex-row-reverse"}`}
          >
            <div className="col">
              <h2>{data["name"]}</h2>
              <h3>
                ₹ {data["price"]["mrp"]}
                <span>MRP {data["price"]["mrp"]}</span>
              </h3>
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
            .flex-row-reverse {
              flex-direction: row-reverse;
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
                width: 92px;
                height: 28.11px;

                font-size: 11px;
                line-height: 13px;

                margin-top: 1rem;
              }
            }
          `}</style>
        </div>
      );
    default:
      return (
        <div className={`product-card`}>
          <img
            src={data["images"]}
            alt={data["name"]}
            className="product-image"
          />
          <h2>{data["name"]}</h2>
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
                margin: 2rem;
              }
              .product-card img {
                height: 225px;
                margin-bottom: 2rem;
              }
              .product-card h2 {
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
              }
            `}
          </style>
        </div>
      );
  }
};
export default ProductCards;
