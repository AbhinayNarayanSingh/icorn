import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductForm from '../../../components/Admin/ProductForm'
import Products from '../../../components/Admin/Products'
import { BLUE, PRIMARY_COLOUR } from '../../../utils/Environment'

// sub-components src /components/Profile

const ProfilePageActiveSection = (ActiveSection, setActiveSection) => {
    switch (ActiveSection) {
      case "Products":
        return <Products setActiveSection={setActiveSection}/>
      case "ProductForm":
        return <ProductForm/>

    }
}

const Dashboard = () => {
    const [ActiveSection, setActiveSection] = useState("ProductForm")
    const dashboardSections = [ "Orders", "Products", "Category", "Customers", "Transactions"]


  return (
    <div className="min-h-80vh mt-2">
      <div className="row container-xxl">
        <div className="dashboard-sections-header col-12 col-md-2">
            {dashboardSections.map((i, index) => 
                <h2 className={ActiveSection == i && "active"} key={index} onClick={() => setActiveSection(i)}>{i}</h2>
            )}
        </div>
        <div className="col-md-10 col-12">
            {ProfilePageActiveSection(ActiveSection, setActiveSection)}
        </div>
      </div>
        
        <style jsx>{`
            .dashboard-sections-header h2{
                padding: 0 1rem 1rem;
                cursor: pointer;
                font-weight: 600;
            }
            h2.active{
                color: ${BLUE};
            }
            .dashboard-sections{
                margin: 1rem;
            }
            @media only screen and (max-width: 600px) {
              .dashboard-sections-header{
                  display: flex;
                  flex-wrap: wrap;
              }
            }
        `}</style>
    </div>
  )
}
export default Dashboard
