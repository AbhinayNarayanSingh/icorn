import React from 'react'
import { useSelector } from 'react-redux'
import { PRIMARY_COLOUR, USER_AVATAR, WHITE } from '../../utils/Environment'
import ManageAddresses from './Manage-Addresses'
import ManageCards from './Manage-Cards'

const Profile = () => {
    const {user} = useSelector((state)=> state)
  return (
    <div className="container-md min-h-80vh mt-2 profile-container">
        <div className="user-card-container">
            <div className="user-profile-container flex-xy-center flex-column">
                <img src={USER_AVATAR[0]} alt={USER_AVATAR[1]} className="user-profile"/>
                <h2>{user?.FirstName + " " + user?.LastName}</h2>
            </div>
        </div>   
        <ManageAddresses/> 
        <ManageCards/>
        
        <style jsx>{`
            .profile-container{
                max-width: 1000px;
            }
            .user-card-container{
                background : ${WHITE};
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

        `}</style>
    </div>
  )
}

export default Profile