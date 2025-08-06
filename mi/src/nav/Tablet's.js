import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { addCart, } from './Crete';
import Nav from './Nav';
import './table.css'
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
function Tablte() {

const[table,settable]=useState([])
useEffect(()=>{
    fetch("http://localhost:4000/alltablet").then((res)=>res.json())
    .then((data)=>{
        if(Array.isArray(data)){
            settable(data)
        }
    })
})
const dis=useDispatch()

const handle=(bag)=>{
    dis(addCart(bag))

}
    return (
        <div>
            <Nav></Nav>
            <hr></hr>
            <div >
               
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src='https://i03.appmifile.com/598_operator_in/23/06/2025/ea787bcfa397c93cd6913204b08b6082.jpg?thumb=1&w=2560&f=webp&q=85' alt='tab'></img></SwiperSlide>
                                <SwiperSlide><img src='https://i03.appmifile.com/863_operator_in/02/06/2025/7143eae2ae4b02fa93663d4bfbdf4147.png?thumb=1&w=2560&f=webp&q=85' alt="tab"></img></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <section>
                     <div className='container'>
                    <h1 style={{ textAlign: "center", color: "black", fontSize:"40px"}}>Xiaomi</h1>

                </div>

                    <div className='container-fluid '>

                        <div className='row'>
                            {table.map((bag,index) => (
                                <div className='col-6  lap' key={bag._id} style={{ marginRight: "20px" }}>
                                    <h1>{bag.title}</h1>
                                    <img  src={bag.img} alt='tab'></img>
                                    <h4  className='hot1'>Hot Sales</h4>
                                    <h4>{bag.price}</h4>
                                    <button onClick={()=>handle(bag)} className='btn btn-dark'>Buy now</button>
                                </div>
                                

                            ))
                            }
                        </div>
                    </div>
                  

                </section>
          
                  
                
            </div>
            <br>
            </br>
            <br></br>


        </div>
    )
}

export default Tablte
