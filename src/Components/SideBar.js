import React from 'react'
import img from "../assets/images/dp.jpeg"


export default function SideBar() {
  return (
    <div className='side-flex'>
      <div className='sidebar-up'>
      <h3>Dashboard</h3>
      <p className='sidebar-item'>Dashboard</p>
      <p className='sidebar-item'>Products</p>
      <p className='sidebar-item'>Customers</p>
      <p className='sidebar-item'>Income</p>
      <p className='sidebar-item'>Promote</p>
      <p className='sidebar-item'>Help</p>
      </div>
      <div className='row profile'>
      <div className='col-lg-3 -3'>
            <img id='dp' src={img} alt="" />
      </div>
      <div className='col-lg-9 -9'>
            <h6>Evano </h6>
            <p style={{fontSize:"60%"}}>Product Manage</p>
      </div>
     </div>
    </div>
  )
}
