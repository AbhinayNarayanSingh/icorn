import React from 'react'
import { useDispatch } from 'react-redux'
import { open_dialog } from '../../store/saga/Dialog'

const Products = (props) => {
    const dispatch = useDispatch()
  return (
    <div>
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="f-w-600">Products List</h2>
            <button className="link-btn add-address-link-btn" onClick={() => props.setActiveSection("ProductForm")}>+ Add New Product</button>
        </div>
        <div>
            hello
        </div>

        <style jsx>{`
            h2{
                font-weight: 600;
                margin-bottom: .25rem;
            }
        `}</style>
    </div>
  )
}

export default Products