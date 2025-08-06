import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Nav from './Nav';
import './Cour.css'
import { Navigation } from 'swiper/modules';
function Home() {
  return (
  <div>
      <Nav/>
      <hr></hr>
      <section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
             <SwiperSlide>
            <div style={{
                backgroundImage: `url("https://i03.appmifile.com/428_operator_in/09/07/2025/8ae04d0964bd83836d8e7e1c670f69fd.png?thumb=1&w=2560&f=webp&q=85")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
                width: '100%'
              }}
            >
              <h1 style={{textAlign:'center',color:"white",position:"relative",right:"150px",top:"200px"}}> Xiamomi 15 Ultra
              </h1>
              <p  style={{textAlign:'center',color:"white",position:"relative",right:"150px",top:"200px"}}>Flaship licka imaginay</p>
              <button className='btn btn-dark' style={{borderRadius:"20px",padding:"15px",position:"relative",top:"200px",left:"750px"}}>Lern More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div  style={{
                backgroundImage: `url("https://i03.appmifile.com/249_operator_in/21/05/2025/c454ab6e3ec9c58f58d35ca789ae4d11.png?thumb=1&w=2560&f=webp&q=85")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
                width: '100%'
              }}
            >
              <h1 style={{textAlign:'center',color:"white",position:"relative",right:"250px",top:"200px"}}> Redmi Watch Move
              </h1>
              <h3 style={{textAlign:'center',color:"white",position:"relative",right:"250px",top:"200px"}}>18 Battry,Clear+vaccncy</h3>
              <button className='btn btn-light' style={{position:"relative",left:"650px",top:"250px"}}> By now</button>
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

                                                                   
                                          <SwiperSlide>
                                              <div    style={{
                backgroundImage: `url("https://i03.appmifile.com/905_operator_in/20/12/2024/72f64734342cc86a401de2ca7b0f8941.jpg?thumb=1&w=2560&f=webp&q=85")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
                width: '100%'
              }}
            >
              <h1 style={{textAlign:'center',color:"black",position:"relative",right:"250px",top:"200px",}}> Xiamomi QLED  A PRO
                  <br>
                  </br>
                  2025
              </h1>
              <h4  style={{textAlign:'center',color:"black",position:"relative",right:"250px",top:"200px"}}>Big speaker big Energy</h4>
            </div>
                                              
                                          </SwiperSlide>
                                      </Swiper>
          
       
      </section>
      <br>
      </br>
      <br></br>
      <section>
     
      </section>
      <section>
 <div className='container'>
  <div className='row'>
    <div className='col'>
      <br>
      </br>
      <br>
      </br>
      <h1 style={{fontWeight:"bolder"}}>Xiaomi Exclusive Offerings</h1>
    </div>
  </div>
 </div>
 <div className='container'>
  <div className='row'>
    <div className='col-4'>
      <div class="card but">
        <img src='https://i02.appmifile.com/38_operatorx_operatorx_xm/27/11/2024/f7184560e02644c9c4cf5d23b0618c6c.png?thumb=1&f=webp&q=85' alt='game'></img>
  <div class="card-body">
  <h2 style={{fontWeight:"bolder",textAlign:"center"}}>Exclusive Bundels</h2>
    <button className='btn btn-dark lern' style={{textAlign:"center"}}>Learn More</button>

  </div>
</div>
    </div>
    <div className='col-4'>
    <div class="card but">
    <img src='https://i03.appmifile.com/823_operator_in/16/06/2025/e5ae94971baf9c77036f348a6afea1e3.jpg?thumb=1&f=webp&q=85' alt='game'></img>
   <div class="card-body">
   <h2 style={{fontWeight:"bolder",textAlign:"center"}}>Spcial Rewards</h2>
    <button className='btn btn-dark lern' style={{textAlign:"center"}}>Learn More</button>

  </div>
</div>
    </div>
      <div className='col-4'>
      <div class="card but">
        <img src='https://i02.appmifile.com/500_operatorx_operatorx_xm/27/11/2024/9ea7b5fd29f11b0100e9a0b6d3eeebe8.png?thumb=1&f=webp&q=85' alt='game'></img>
  <div class="card-body">
  <h2 style={{fontWeight:"bolder",textAlign:"center"}}>Get the Xiamomi Store</h2>
  <button className='btn btn-dark lern'>Learn More</button>
  </div>
</div>
    </div>
  </div>
 </div>
 <br>
      </br>
      <br>
      </br>
      </section>

      <section>
 <div className='container-fluid'>
<div className='row'>
  <div className='col'>
    <h1 style={{fontWeight:"bolder"}}>New Launches </h1>
  </div>
</div>
<div className='row'>
  <div className='col-12'>
    
    <div style={{height:"600px",width:"100%",backgroundColor:"gray",}} className='watch'>
      <h1 style={{color:"white",position:'relative',top:"20px",fontSize:"40px"}}>Redmi Watch Move</h1> <br>
      </br>
      <p style={{color:"white",position:'relative',top:"-11px",fontSize:"20px"}}> your Next Big Move</p>

      <h3 style={{textDecoration:"line-through",color:"white",position:"relative",top:"450px",left:"150px",width:"300px"}}>$3999</h3>
      <h1 className='lig' style={{color:'black',position:"relative",top:"390px",fontSize:"40px"}}>$1,999</h1>
    </div>
  </div>

</div>
 </div>
 </section>
 <section>
  <div>
    <h1 style={{textAlign:"center"}} className='offer'>Upcoming Offers!!!</h1>
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img style={{height:"800px"}} src='https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-13-pro-plus-5g/pc/box/bg03.jpg' alt='game'></img></SwiperSlide>
        <SwiperSlide><img style={{height:"800px"}} src='https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-13-pro-plus-5g/pc/56b5ea2f058b5c33f5d5a6c6d09ca5c0.jpg' alt='game'></img></SwiperSlide>
        <SwiperSlide><img style={{height:"800px"}} src='https://i02.appmifile.com/529_operator_global/03/03/2025/9324fb89f38cf66e05c4a733e84deb37.jpg?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
        <SwiperSlide><img style={{height:"800px"}} src='https://i03.appmifile.com/863_operator_in/02/06/2025/7143eae2ae4b02fa93663d4bfbdf4147.png?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
        <SwiperSlide><img style={{height:"800px"}} src='https://i03.appmifile.com/55_operator_in/04/04/2025/1e11c8a3ec194a851475a9da6168d359.png?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
        <SwiperSlide><img style={{height:"800px"}} src='https://i03.appmifile.com/884_operator_in/04/11/2024/69aba3a4a5d706db1a458b659e7ce39a.png?thumb=1&w=2560&f=webp&q=85' alt='game'></img></SwiperSlide>
      </Swiper>
    </div>
   
  </div>

 </section>
 <br>
 </br>
<br></br>
<br>
</br>
<br>
</br>
<section>
  <div className='container'>
    <div className='row'>
      <h1 style={{textAlign:"center"}}>Our Service</h1>
    </div>
    <div className='row'>
      <div className='col service'>
        <img src='https://media.istockphoto.com/id/2080702525/photo/operator-woman-with-headset-having-conversation-with-client-showing-excellent-communication.jpg?s=612x612&w=0&k=20&c=WcFVvJTN9zKZYqT26EXkG6zWUu_uUcTp_FkGLE9Auas=' alt='he'></img>
       <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lorem et tellus posuere, sed luctus turpis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vulputate magna non risus mattis, a blandit eros congue. Nulla facilisi. Suspendisse potenti. Aliquam erat volutpat. Mauris venenatis nisi in dui viverra, vel accumsan libero fringilla. Cras finibus quam ut mauris malesuada, nec varius tortor cursus.
</p>
      </div>
        <div className='col mt-5 service'>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lorem et tellus posuere, sed luctus turpis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vulputate magna non risus mattis, a blandit eros congue. Nulla facilisi. Suspendisse potenti. Aliquam erat volutpat. Mauris venenatis nisi in dui viverra, vel accumsan libero fringilla. Cras finibus quam ut mauris malesuada, nec varius tortor cursus.
</p>
      </div>
      

    </div>
    <div className='row'>
      <div className='col'>
        <img style={{width:"630px",float:"right"}} src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/201507/mobile-manufacturing-india__660_062915015318.jpg?size=1280:720' alt='ga'></img>
      </div>
      
    </div>

  </div>
</section>
<br>
</br>
<br>
</br>
<br></br>
<section>

</section>



</div>
  )
}

export default Home
