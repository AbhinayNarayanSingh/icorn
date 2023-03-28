import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { BLUE, PRIMARY_COLOUR, USER_AVATAR, WHITE } from '../../Environment'

// sub-components src /components/Profile
import ManageAddresses from '../../components/Profile/ManageAddresses'
import ManageCards from '../../components/Profile/ManageCards'
import SavedProducts from '../../components/Profile/SavedProducts'
import Orders from '../../components/Profile/Orders'
import AccountSettings from '../../components/Profile/AccountSettings'
import OrderDetails from '../../components/Profile/OrderDetails'


const Profile = () => {
    const {user} = useSelector((state)=> state)
    const [ActiveSection, setActiveSection] = useState("Orders")
    const router = useRouter()
    
    const {section} = router.query    

    const profileSections = [
        { url: "address", name: "Manage Address" },
        { url: "saved-products", name: "Saved Product" },
        { url: "cards", name: "Manage Cards" },
        { url: "orders", name: "Orders" },
        { url: "settings", name: "Account Settings" }
    ]

    const ProfilePageActiveSection = () => {

        switch (section) {
            case "saved-products":
                return <SavedProducts/>
            case "address":
                return <ManageAddresses/>
            case "cards":
                return <ManageCards/>
            case "orders":
                return <Orders/>
            case "settings":
                return <AccountSettings/>
            case "orders":
                return <OrderDetails/>
            case "order":
                return <OrderDetails/>
            default :
                return <SavedProducts/>
        }
    }


  return (
    <div className="container-md min-h mt-2 profile-container">
        <div className="user-card-container">
            <div className="user-profile-container flex-xy-center flex-column">
                <img src={USER_AVATAR[0]} alt={USER_AVATAR[1]} className="user-profile"/>
                <h2>{user?.FirstName + " " + user?.LastName}</h2>
            </div>
        </div>   

        <div className="row profile-sections">
            <div className="profile-sections-header col-12 col-md-3 hide-scrollbar">
                {profileSections.map((i, index) => 
                    <h2 className={section == i["url"] && "active"} key={index} onClick={() => router.push(`/gp/${i["url"]}`)}>{i["name"]}</h2>
                )}
            </div>
            <div className="col-md-9 col-12">
                {ProfilePageActiveSection()}
            </div>
        </div>
        
        <style jsx>{`
            .profile-container{
                max-width: 1000px;
            }
            .user-card-container{
                padding:2rem;
            }
            .user-profile{
                width: 150px;
                height: 150px;
                object-fit: cover;
                border:2px solid ${PRIMARY_COLOUR};
                border-radius: 50%;
                margin-bottom : 1.5rem;
            }
            .user-profile-container h2{
                font-weight: 600;
                font-size:1.1rem;
            }
            .profile-sections-header h2{
                padding: 0 1rem 1rem;
                cursor: pointer;
                font-weight: 600;
            }
            h2.active{
                color: ${BLUE};
            }
            .profile-sections{
                margin: 1rem;
            }
            @media only screen and (max-width: 600px) {
              .profile-sections-header{
                  display: flex;
                  overflow: scroll;
              }
            }
        `}</style>
    </div>
  )
}

export default Profile