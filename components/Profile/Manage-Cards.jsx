import {BOX_SHADOW_LIGHT, MASTERCARD_ICON, RUPAY_ICON, VISA_ICON, WHITE_BCK } from "../../Environment"

const ManageCards = () => {

  return (
    <div className="manage-cards-component-container">
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="f-w-600">Manage Cards</h2>
            <button className="link-btn add-card-link-btn">+ Add New Card</button>
        </div>

        <div className="cards-list-container">

            <div className="card-container">
                <div className="card">
                    <div className="card-details">
                        <h2>ABHINAY NARAYAN SINGH</h2>    
                        <p>XXXX-XXXX-XXXX-1902</p>
                        <p>EXP: 02/25</p>
                    </div>   
                    <img src={VISA_ICON[0]} alt={VISA_ICON[1]} />         
                    <button className="link-btn card-remove-btn">Remove</button>
                </div>
            </div>

            <div className="card-container card-selected">
                <div className="card">
                    <div className="card-details">
                        <h2>ABHINAY NARAYAN SINGH</h2>    
                        <p>XXXX-XXXX-XXXX-1902</p>
                        <p>EXP: 02/25</p>
                    </div>   
                    <img src={MASTERCARD_ICON[0]} alt={MASTERCARD_ICON[1]} />         
                    <button className="link-btn card-remove-btn">Remove</button>
                </div>
            </div>

            <div className="card-container">
                <div className="card">
                    <div className="card-details">
                        <h2>ABHINAY NARAYAN SINGH</h2>    
                        <p>XXXX-XXXX-XXXX-1902</p>
                        <h3>EXP: 02/25</h3>
                    </div>   
                    <img src={RUPAY_ICON[0]} alt={RUPAY_ICON[1]} className="" />         
                    <button className="link-btn card-remove-btn">Remove</button>
                </div>
            </div>

        </div>



        <style jsx>{`
        .cards-list-container{
            margin: 1rem;
        }
        .card-container{
            border: 2px solid transparent;
            border-radius: 18px;
            padding: 6px;
            margin-top: .25rem;
            background: ${WHITE_BCK};

            max-width: 450px;
            margin-bottom: 1rem;

            cursor: pointer;
        }
        .card-container:hover{
            BOX-SHADOW: ${BOX_SHADOW_LIGHT};
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
            top: 1rem;
        }
        .card h2{
            font-weight: 600;
            margin-bottom: .15rem;
            font-size: 1.25rem;
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
       .card-remove-btn{
        position: absolute;
        bottom: .5rem;
        right: 1rem;
        font-size: .95rem;
       }
        @media only screen and (max-width: 600px){
        .manage-cards-component-container{
            padding: 1rem 0;
        }
        .card h2{
            font-size: 1rem;
        }
        .cards-list-container{
            margin: 1rem 0;
        }
          
        }
        `}</style>
    </div>
  )
}

export default ManageCards