import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import Nav from './Nav';



function Admi() {
 
 
  return (
    <div>
      <Nav></Nav>
    <div className='co'>
<div className='fix'  style={{backgroundColor:"GrayText",height:"50vh",width:"400px"}}>
    <Link  to='/moblieproduct' style={{textDecoration:"none"}}> <h3 className='jt'>Mobile</h3></Link> 
        <Link to="/tabletproduct"  style={{textDecoration:"none"}}> <h3 className='jt'>Tablet</h3></Link> 

    <Link  to='/tvproduct' style={{textDecoration:"none"}}> <h3 className='jt'>Tv</h3></Link> 

    <Link style={{textDecoration:"none"}}> <h3 className='jt' >Logout</h3></Link> 
    

    

         
</div>
       

</div>
     
      
    </div>
  )
}

export default Admi
