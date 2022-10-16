import {BOX_SHADOW_LIGHT, WHITE_BCK } from "../../utils/Environment"

const ManageAddresses = () => {

  const dummy = [1,2,3]
  return (
    <div className="manage-address-component-container">
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="f-w-600">Manage Addresses</h2>
            <button className="link-btn add-address-link-btn">+ Add New Address</button>
        </div>

        {dummy.map((i) => {return (
          <div className="address-card">
              <h2>Abhinay Narayan Singh</h2>

              <div className="row">
                <h3>Aashirvad Niketan, Seer Goverdhanpur, Near Chaura Mata Mandir, Banaras Hindu University, Varanasi, Uttar Pradesh, India - 221005</h3>
              </div>

              <div className="row address-card-email">
                <p className="col-2">Email</p>
                <h3 className="col-9">abhinaynarayansingh@appscrip.co</h3>
              </div>

              <div className="row address-card-phone">
                <p className="col-2">Phone</p>
                <h3 className="col-10">+91 8795675599</h3>
              </div>

              <div className="address-action-link-btn flex">
                <button className="link-btn">Update</button>
                <button className="link-btn">Remove</button>
              </div>

          </div>
        )})}


        <style jsx>{`
        .address-card{
          padding: 1rem;
          margin-top: 1rem;
          border-radius: 5px;
          position: relative;
          cursor: pointer;
          background: ${WHITE_BCK};
          border-radius: 8px;
        }
        .address-card:hover{
          BOX-SHADOW: ${BOX_SHADOW_LIGHT};
        }
        .address-card h2 {
          font-weight:600;
          font-size: 20px;
          margin-bottom: .25rem;
        }
        .address-card p {
          margin-top: .5rem;
          font-weight:600;
        }
        .address-card h3{
          margin-top: .5rem;
          line-height: 1.25rem;
        }
        .full-address{
          line-height: 140%;
        }
        .address-action-link-btn{
          position: absolute;
          bottom: 1rem;
          right: 1rem;
        }
        .address-action-link-btn button {
          margin-left:10px;
          font-size: 14px;
        }
        @media only screen and (max-width: 600px){
          .manage-address-component-container{
            padding: 1rem 0;
          }
          .manage-address-component-container p,
          .manage-address-component-container h3{
            font-size: 15px;
          }
          .address-card{
            padding: 1rem 1rem 1.5rem;
          }
          .address-card-email{
            margin-top: .25rem;
          }
          .address-card-email,
          .address-card-phone,
          .manage-address-component-container p{
            display: none;
          }
          .address-card h2{
            font-size: 18px;
            margin-bottom: 0;
          }
          .address-action-link-btn{
            bottom: 6px;
            right: 10px;
          }
        }
        `}</style>
    </div>
  )
}

export default ManageAddresses