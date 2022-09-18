import { useSelector } from "react-redux";
import ProductCards from "../../components/ProductCards/ProductCards";
import { INR_STYLE_HELPER } from "../../utils/Helper";

const Bag = () => {
  const { items, bagTotal, bagSubTotal, bagSubTotalTax, shipping } =
    useSelector((state) => state.bag);

  return (
    <div className="container-xxl min-h-70vh">
      <div className="col-12  col-xl-8 m-auto">
        <h2 className="bag-total">
          Your bag total is ₹{INR_STYLE_HELPER(bagTotal)}
        </h2>
        {items.map((item, index) => {
          return (
            <ProductCards type={"Bag"} data={item} index={index} key={index} />
          );
        })}

        <div className="product-subtotals-container">
          <div className="product-subtotals col-12 col-md-6">
            <p>
              <span>Subtotal</span>
              <span>₹{INR_STYLE_HELPER(bagSubTotal)}</span>
            </p>
            <p>
              <span>Tax</span>
              <span>₹{INR_STYLE_HELPER(bagSubTotalTax)}</span>
            </p>
            <p>
              <span>Shipping</span>
              <span>{shipping}</span>
            </p>
            <h2>
              <span>Total</span>
              <span>₹{INR_STYLE_HELPER(bagTotal)}</span>
            </h2>

            <div className="checkout-btn-container">
              <button className="primary-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bag-total {
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          text-align: center;
          margin: 2rem 0;
        }
        .product-subtotals p,
        .product-subtotals h2 {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .product-subtotals {
          margin-top: 1rem;
        }
        .product-subtotals h2 {
          margin: 0.75rem 0 1.5rem;
        }
        .product-subtotals h2 span {
          font-weight: 600;
        }
        .checkout-btn-container {
          display: flex;
          justify-content: end;
          margin: 2rem 0;
        }
        @media only screen and (max-width: 600px) {
          .product-subtotals-container {
            padding: 0 1rem;
          }
        }
        @media only screen and (min-width: 600px) {
          .bag-total {
            font-size: 32px;
            margin: 3rem 0;
          }
          .product-subtotals-container {
            display: flex;
            justify-content: end;
          }
        }
      `}</style>
    </div>
  );
};

export default Bag;
