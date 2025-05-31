import React from 'react'
import "./Order.css"
import { RiRedPacketLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { MdAttachMoney } from "react-icons/md";
const Order = () => {
 return (
 <div>
 <div className='container'>
 <div className='row'>
 <div className='col-12 d-flex order '>
 <div className='col-3 order-box'>
 <div className='order-icon'>
 <span><RiRedPacketLine /></span>
 <h5>Prduct Packing</h5>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
 </div>

 </div>

 <div className='col-3 order-box '>
 <div className='order-icon'>
 <span><RiCustomerService2Fill /></span>
 <h5>24*7 support</h5>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
 </div>

 </div>

 <div className='col-3 order-box '>
 <div className='order-icon'>
 <span><LiaTruckMovingSolid /></span>
 <h5>Delivery in 5 day</h5>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
 </div>

 </div>

 <div className='col-3 order-box '>
 <div className='order-icon'>
 <span> <MdAttachMoney /></span>
 <h5>Payment Secure</h5>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
 </div>

 </div>

 </div>


 </div>

 </div>
 </div>

 )
}

export default Order