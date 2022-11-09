import { useSelector } from "react-redux";
import { WHITE_BCK } from "../../Environment";
import Cards from "../../hoc/Cards/Cards"



export default function Category() {
  const products = useSelector((state) => state.products)
  return (
    <div className="container-fluid landing-page-container">
      <div>
        <h2><span>The latest. </span>Take a look at what’s new right now.</h2>
        {products.map((product, index) => {
          return (
            <Cards type={"Category"} data={product} index={index} key={index} />
          )
        })}

        <h2><span>Accessories. </span>That pairs perfectly with your favourite devices.</h2>
        <div className="product-container-horizontal hide-scrollbar">
          {products.map((product, index) => {
            return (
              <Cards data={product} index={index} key={index} variant={"LANDING_PAGE"}/>
            )
          })}
        </div>
      </div>
        <style jsx>{` 
          .landing-page-container{
            background: ${WHITE_BCK};
            padding-top: 2rem;
          }
          .product-container-horizontal{
            display: flex;
            overflow: scroll;
          } 
          h2, h2 span{
          font-weight: 600;
          font-size: 32px;
          line-height: 39px;
          color: #6E6E73;
          }
          h2 span {
            color: #1D1D1F;
          }
          h2{
            margin: 0 1rem;
            text-align: center;
          }
          @media only screen and (max-width: 600px) {
            h2, h2 span{
              font-size: 20px;
              line-height: 28px;
              }
          }
          @media only screen and (max-width: 2000px) and (min-width: 1400px){
            .product-container-horizontal{
              padding-left: calc(50vw - 700px);
            } 
          }
          `}
        </style>
    </div>
  )
}
