import React from 'react'

const AccountSettings = () => {
  return (
    <div>
      <h2>Personal & Account information</h2>
      <div className="personal-account-information">
        <div className="row">
            <h3 className='col-md-2 col-12'>Name</h3>
            <p className="col-11 col-md-9">Abhinay Narayan Singh</p>
            <p className="col-1">Edit</p>
        </div>
        <div className="row">
            <h3 className='col-md-2 col-12'>Email</h3>
            <p className="col-11 col-md-9">abhinaynarayansingh@appscrip.co</p>
            <p className="col-1">Edit</p>
        </div>
        <div className="row">
            <h3 className='col-md-2 col-12'>Phone</h3>
            <p className="col-11 col-md-9">+91 8795675599</p>
            <p className="col-1">Edit</p>
        </div>
      </div>

      <h2 className='mt-2'>Change Password</h2>
      <div className="row">
        <p className='col-11'>It's a good idea to use a strong password that you're not using elsewhere</p>
        <p className='col-1'>Update</p>
      </div>

      <h2 className='mt-2'>Delete Account</h2>
      <div className="row">
        <p className='col-11'>Once you delete your account, there is no going back. Please be certain.</p>
        <p className='col-1'>Delete</p>
      </div>

      <style jsx>{`
        h2{
          font-weight: 600;
          margin-bottom: .25rem;
        }
        .personal-account-information .row{
          margin-top: .5rem;
        }
        h3{
          font-weight: 600;

        }
      `}</style>
    </div>
  )
}

export default AccountSettings