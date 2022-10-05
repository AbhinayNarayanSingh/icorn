import {BLUE, BOX_SHADOW_DARK, BOX_SHADOW_LIGHT, MASTERCARD_ICON, MASTER_BCK, RUPAY_BCK, RUPAY_ICON, VISA_BCK, VISA_ICON, WHITE } from "../../utils/Environment"

const ManageCards = () => {

  return (
    <div className="mt-2 manage-cards-component-container">
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="f-w-600">Manage Cards</h2>
            <button className="link-btn add-card-link-btn">+ Add New Card</button>
        </div>

        <div className="card-container">
            <div className="card VISA">
                <img src={VISA_ICON[0]} alt={VISA_ICON[1]} />         
                <div className="card-details">
                    <h2>ABHINAY NARAYAN SINGH</h2>    
                    <p>XXXX-XXXX-XXXX-1902</p>
                    <p>EXP: 02/25</p>
                </div>   
            </div>
        </div>

        <div className="card-container card-selected">
            <div className="card MASTERCARD">
                <div className="card-details">
                    <h2>ABHINAY NARAYAN SINGH</h2>    
                    <p>XXXX-XXXX-XXXX-1902</p>
                    <p>EXP: 02/25</p>
                </div>   
                <img src={MASTERCARD_ICON[0]} alt={MASTERCARD_ICON[1]} />         
            </div>
        </div>

        <div className="card-container">
            <div className="card RUPAY">
                <div className="card-details">
                    <h2>ABHINAY NARAYAN SINGH</h2>    
                    <p>XXXX-XXXX-XXXX-1902</p>
                    <h3>EXP: 02/25</h3>
                </div>   
                <img src={RUPAY_ICON[0]} alt={RUPAY_ICON[1]} className="" />         
            </div>
        </div>



        <style jsx>{`
        .manage-cards-component-container{
            background: ${WHITE};
            padding: 2rem;
        }
        .card-container{
            border: 2px solid transparent;
            border-radius: 18px;
            padding: 6px;
            margin-top: .25rem;

            max-width: 400px;
            margin: auto;
        }
        .card-selected {
            border-color: ${BLUE};
        }
        .card {
            padding: 1rem;
            padding: 1rem 0;
            border-radius: 10px;
            position: relative;
        }
        .card img{
            height: 20px;
            position: absolute;
            right: 1rem;
            bottom: 1rem;
        }
        .card h2{
            font-weight: 600;
            margin-bottom: .15rem;
        }
        .card p{
            font-size: 14px;
            margin-bottom: .15rem;
        }
        .card h3{
            font-size: 14px;
        }
        .card-details{
            padding-left: 1rem;
        }
        .VISA {
            background : ${VISA_BCK};
        }
        .MASTERCARD{
            background : ${MASTER_BCK};
        }
        .RUPAY{
            background : ${RUPAY_BCK};
        }
       
        @media only screen and (max-width: 600px){
          .manage-cards-component-container{
            padding: 1rem;
          }
          
        }
        `}</style>
    </div>
  )
}

export default ManageCards