import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BLUE, PRIMARY_COLOUR, USER_AVATAR, WHITE } from '../../utils/Environment'
import ManageAddresses from './Manage-Addresses'
import ManageCards from './Manage-Cards'

const ProfilePageActiveSection = (ActiveSection) => {
    switch (ActiveSection) {
        case "Saved Product":
            return <div>Saved Product</div>
        case "Manage Address":
            return <ManageAddresses/>
        case "Manage Cards":
            return <ManageCards/>
        case "Orders":
            return <div>Orders</div>
        case "Setting":
            return <div>Setting</div>
    }
}

const Profile = () => {
    const {user} = useSelector((state)=> state)
    const [ActiveSection, setActiveSection] = useState("Manage Address")
    const profileSections = ["Manage Address", "Saved Product", "Manage Cards", "Orders", "Setting"]


  return (
    <div className="container-md min-h-80vh mt-2 profile-container">
        <div className="user-card-container">
            <div className="user-profile-container flex-xy-center flex-column">
                <img src={USER_AVATAR[0]} alt={USER_AVATAR[1]} className="user-profile"/>
                <h2>{user?.FirstName + " " + user?.LastName}</h2>
            </div>
        </div>   

        <div className="row profile-sections">
            <div className="profile-sections-header col-12 col-md-3">
                {profileSections.map((i, index) => 
                    <h2 className={ActiveSection == i && "active"} key={index} onClick={() => setActiveSection(i)}>{i}</h2>
                )}
                <h2>Logout</h2>
            </div>
            <div className="col-md-9 col-12">
                {ProfilePageActiveSection(ActiveSection)}
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
            // .profile-sections-header{
            //     display: flex;
            //     overflow: scroll;
            // }
            .profile-sections{
                margin: 1rem;
            }
        `}</style>
    </div>
  )
}

export default Profile