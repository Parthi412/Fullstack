import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux';
import { addCart } from './Crete';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Nav from './Nav';
import './tv.css'

import {  Navigation } from 'swiper/modules';
function Tv() {
    const[tv,settv]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/tvall").then((res)=>res.json())
        .then((data)=>{
            if(Array.isArray(data)){
                settv(data)
            }
        })
    })
        const us=useDispatch()

        const handle=(bag)=>{
             us(addCart(bag))

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
                                <SwiperSlide><img src='https://i03.appmifile.com/362_operator_in/15/05/2025/c4b0e22a0f3cf1146c05d84da2e6e1be.jpg?thumb=1&w=2560&f=webp&q=85' alt='tv'></img></SwiperSlide>
                                <SwiperSlide><img src='https://i03.appmifile.com/249_operator_in/15/05/2025/fc37f38f293ec198ca906762911709b7.jpg?thumb=1&w=2560&f=webp&q=85' alt='tv'></img></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
               
                <section>

 <div className='container'>
                    <h1 style={{ textAlign: "center", color: "black",fontSize:"40px"}}>Xiamomi Tv</h1>

                </div>
                    <div className='container-fluid '>

                        <div className='row'>
                            {tv.map((bag,index) => (
                                     <React.Fragment key={bag._id}>
                                
                                <div className='col-6  lap' style={{ marginRight: "20px" }}>
                                    <h1 >{bag.tittle}</h1>
                                    <img  src={bag.img} alt='tv'></img>
                                    <br></br>
                                    <br></br>
                                    <h4>{bag.price}</h4>
                                    <button  className='btn btn-dark' onClick={()=>handle(bag)}>Buy now</button>
                                  
                                </div>
                                {
                                    index===8 &&(
                                                   <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                  <SwiperSlide>
  <div    style={{
      backgroundImage: `url("https://i03.appmifile.com/709_operator_in/12/05/2025/ac8ef715ea547ddc6205d1993d3afa47.png?thumb=1&w=2560&f=webp&q=85")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '600px',
      width: '100%'
    }}
  >
    <h1 style={{textAlign:'center',color:"white",position:"relative",right:"150px",top:"200px"}}> Xiamomi 4K X series
        <br>
        </br>
        2025
    </h1>
    <p  style={{textAlign:'center',color:"white",position:"relative",right:"150px",top:"200px"}}>4k Cinematic vision</p>
  </div>
</SwiperSlide>

                                <SwiperSlide>
                                    <div    style={{
      backgroundImage: `url("https://i03.appmifile.com/511_operator_in/02/07/2025/1479b4be7033584c0f734c3d4b82f5c9.jpg?thumb=1&w=2560&f=webp&q=85")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '600px',
      width: '100%'
    }}
  >
    <h1 style={{textAlign:'center',color:"white",position:"relative",right:"250px",top:"200px"}}> Xiamomi QLED PRO
        <br>
        </br>
        2025
    </h1>
    <p  style={{textAlign:'center',color:"white",position:"relative",right:"250px",top:"200px"}}>4k Cinematic vision</p>
  </div>
                                    
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div    style={{
      backgroundImage: `url("https://i03.appmifile.com/949_operator_in/12/05/2025/003885db8c4fa63d8eeaf88ac423ae32.png?thumb=1&w=2560&f=webp&q=85")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '600px',
      width: '100%'
    }}
  >
    <h1 style={{textAlign:'center',color:"white",position:"relative",right:"250px",top:"200px"}}> Xiamomi QLED  A PRO
        <br>
        </br>
        2025
    </h1>
    <p  style={{textAlign:'center',color:"white",position:"relative",right:"250px",top:"200px"}}>4k Cinematic vision</p>
  </div>
                                    
                                </SwiperSlide>
                            </Swiper>

                                    )
                                }
                                {
                                    index ===2 &&(
                                        <div>
                                            <h1 style={{textAlign:"center"}}>TVs 43 (109.22cm)</h1>
                                        </div>
                                    )
                                }
                                    {
                                    index ===5 &&(
                                        <div>
                                            <h1 style={{textAlign:"center"}}>TVs 55 & 65 (139 & 165cm)</h1>
                                        </div>
                                    )
                                }
                                 {
                                    index ===8 &&(
                                        <div>
                                            <h1 style={{textAlign:"center",marginTop:"40px"}}>TVs 32 (81.28cm)</h1>
                                            <br></br>
                                        </div>
                                    )
                                }
                            </React.Fragment>

                            ))
                            }
                        </div>
                    </div>
                   

                </section>

           

            </div>
 

        </div>
    )
}

export default Tv
