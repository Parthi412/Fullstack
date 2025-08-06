import React from 'react'
import { Link } from 'react-router-dom'

function sideone() {
  return (
    <div className='fix'  style={{backgroundColor:"GrayText",height:"50vh",width:"400px"}}>
    <Link  to='/cre' style={{textDecoration:"none"}}> <h3 className='jt'>Create</h3></Link> 
        <Link  style={{textDecoration:"none"}}> <h3 className='jt'>Update</h3></Link> 

    <Link  style={{textDecoration:"none"}}> <h3 className='jt'>Delete</h3></Link> 

    <Link to='/user'  style={{textDecoration:"none"}}> <h3 className='jt' >Logout</h3></Link> 

         
</div>
    
  )
}

export default sideone

