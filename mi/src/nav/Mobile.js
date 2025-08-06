import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Mob.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Nav from './Nav';
import { useDispatch } from "react-redux";
import { addCart } from './Crete';
import { Navigation } from 'swiper/modules';

function Mobile() {

    const [mobile, setmobile] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/allmobile")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setmobile(data)
                }
            })
    }, [])

    const dis = useDispatch()

    const add = (bag) => {
        dis(addCart(bag))
    }

    return (
        <div>
            <Nav />
            <hr />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <img src='https://i03.appmifile.com/749_operator_in/02/05/2025/d48cdcc6f8cdcb9a11b0438dc3b76eb5.png?thumb=1&w=2560&f=webp&q=85' alt='mobile' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='https://i03.appmifile.com/305_operator_in/21/05/2025/007480688b7bb8dc0e86c3b40ed2ee2c.png?thumb=1&w=2560&f=webp&q=85' alt='mobile' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <br /><br /><br />

            <section>
                <div className='container-fluid'>
                    <h1 style={{ textAlign: "center", color: "black", fontSize: "40px" }}>Xiaomi's Mobile</h1>
                    <br /><br /><br />
                </div>

                <div className='container-fluid' style={{ position: "relative", bottom: "70px" }}>
                    <div className='row'>
                        {mobile.map((bag, index) => (
                            <React.Fragment key={bag._id}>
                                <div className='col-6 lap' style={{ marginRight: "20px", marginTop: "30px" }}>
                                    <h2>{bag.title}</h2>
                                    <img src={bag.img} alt='mobile' />
                                    <br /><br />
                                    <h4>{bag.price}</h4>
                                    <button onClick={() => add(bag)} className='btn btn-dark'>Buy now</button>
                                </div>

                                {index === 5 && (
                                    <div className='col-12' style={{ marginTop: "60px" }}>
                                        <h1 style={{textAlign:"center",fontSize:"40px"}}>Upcoming Mobile</h1>
                                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                            <SwiperSlide>
                                                <img src="https://i03.appmifile.com/257_operator_in/23/06/2025/b81ec141843167ad852cc645c0446e65.png?thumb=1&w=2560&f=webp&q=85" alt='mobile' />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src='https://i03.appmifile.com/866_operator_in/16/04/2025/c8edb2200ae77d6c3f5b8940ad2eb484.png?thumb=1&w=2560&f=webp&q=85' alt='mobile' />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                )}
                                {index===5&&(
                                    <div>
                                        <h1 style={{textAlign:"center",marginTop:"20px"}}>Offer Zone's</h1>
                                    </div>
                                )}
                                {index===2&&(
                                    <div>
                                        <h1 style={{textAlign:"center"}}>Redmi Mobile's</h1>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mobile;
