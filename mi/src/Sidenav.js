import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div>
        <div className='fix'  style={{backgroundColor:"GrayText",height:"50vh",width:"400px"}}>
    <Link to="/moblieproduct"   style={{textDecoration:"none"}}> <h3 className='jt'>Moblie</h3></Link> 
        <Link to="/tabletproduct"  style={{textDecoration:"none"}}> <h3 className='jt'>Tablet</h3></Link> 

    <Link  to='/tvproduct'  style={{textDecoration:"none"}}> <h3 className='jt'>Tv</h3></Link> 

    <Link to='/user'  style={{textDecoration:"none"}}> <h3 className='jt' >Logout</h3></Link> 

         
</div>
      
    </div>
  )
}

export default Sidenav
