import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';


function Nav() {
  const[input,setinput]=useState(false)
  function handle(){
    setinput(true)

    
  }
  return (
    <div>
    <section>
      <div className='container'>
        <nav class="navbar navbar-text fs-5">
          <Link><img className='im' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSst1WVeTPp5nj1IMKnoboJjJsGyIOvEAgA9w&s' style={{width:"50px"}} alt='logo'></img></Link>
          <Link className='one' to="/home">Store</Link>
          <Link className='one' to='/mobile'>Mobile Phone</Link>
          <Link className='one' to='/tablets'>Tablte's</Link>
          <Link className='one' to='/Tv'>Tv</Link>
          
          <Link><svg onClick={handle} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></Link>

<Link to='/car'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Link>
<Link to={'/user'}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></Link>
<Link to='/ad' style={{textDecoration:"none"}}> Admin</Link>
</nav>
     {input &&(
  <div className='container search'>
    <input type='text' className='in'></input>
    <br></br>
    <h1 style={{position:"relative",bottom:"150px",left:"100px"}}>Search For Every Thins's</h1>
    <h3 style={{position:"relative",left:"150px"}}>Treanding</h3>
    <ul>
      <li style={{position:"relative",left:"250px"}}><h2>Redmi Note 14 5g</h2></li>
            <li style={{position:"relative",left:"250px"}}><h2>Redmi Note 14 5g+</h2></li>
      <li style={{position:"relative",left:"250px"}}><h2>Redmi Note 13 5g</h2></li>

    </ul>
    <svg style={{position:"relative",bottom:"400px"}} className='close' onClick={()=>setinput(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
    
  </div>
)}
      </div>
    </section>

        
   </div>
  )
}

export default Nav
