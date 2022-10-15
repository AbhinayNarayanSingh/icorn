import Link from "next/link";
import { useSelector } from "react-redux";
import ProductCards from "../../components/ProductCards/ProductCards";
import { useRouter } from "next/router";
import { BLUE } from "../../utils/Environment";

const Category = () => {
  const router = useRouter();
  const products = useSelector((state) => state.products);
  const { category } = router.query;

  return (
    <div className="mt-2">
      <div className="container-xxl sub-heading">
        <h2>
          <span>All {category} models. </span>Take your pick.
        </h2>

        <div className="support">
          <p>Need shopping help?</p>
          <Link href="/">
            <h3>Ask an iPad Specialist</h3>
          </Link>
        </div>
      </div>

      <div className="product-cat-container container-xxl">
        <div className="product-container-horizontal hide-scrollbar">
          {products.map((product, index) => {
            return <ProductCards data={product} index={index} key={index} />;
          })}
        </div>

        <h2>
          <span>Accessories. </span>That pairs perfectly with your favourite
          devices.
        </h2>
        <div className="product-container-horizontal hide-scrollbar">
          {products.map((product, index) => {
            return (
              <ProductCards
                type={"He-ro"}
                data={product}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <style jsx>
        {`
          .product-cat-container{
            max-width: 1920px;
            margin: auto;
          }
          .product-container-horizontal {
            display: flex;
            overflow: scroll;
          }
          h2,
          h2 span {
            font-weight: 600;
            font-size: 32px;
            line-height: 39px;
            color: #6e6e73;
            text-align: center;
          }
          h2 span {
            color: #1d1d1f;
          }
          .sub-heading p {
            font-weight: 600;
            margin-bottom: 0.35rem;
          }
          .sub-heading h3 {
            color: ${BLUE};
            font-weight: 600;
            cursor: pointer;
          }
          .sub-heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          @media only screen and (min-width: 600px) {
            .sub-heading h2{
              padding-left: 1rem;
            }
            .sub-heading div{
              padding-right: 1rem;
            }
          }
          @media only screen and (max-width: 600px) {
            .sub-heading {
              flex-direction: column;
              justify-content: start;
            }
            .sub-heading p {
              font-size: 14px;
            }
            .sub-heading h3 {
              font-size: 14px;
            }
            .support {
              display: flex;
              padding-top: 0.25rem;
            }
            p {
              margin-right: 0.25rem;
            }
            h2,
            h2 span {
              font-size: 20px;
              line-height: 28px;
              text-align: center;
            }
            h2 {
              padding: 0 1rem;
            }
          }
          @media only screen and (max-width: 2000px) and (min-width: 1700px){
            .product-container-horizontal {
              padding-left: 10rem;
            }
          }
          @media only screen and (max-width: 1700px) and (min-width: 1400px){
            .product-container-horizontal {
              padding-left: 5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Category;
