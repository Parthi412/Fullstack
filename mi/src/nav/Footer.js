import React from 'react'
import { Link } from 'react-router-dom'
import './Fotter.css'

function Footer() {
  return (
    <div>
        <div className='container-fluid charge'>
            <div className='row'>
                <div className='col-2'>
                    <h1 style={{color:"white"}}>Support</h1>
                   <Link><p>Online Service</p></Link> 
                    <br></br>
                    <Link> <p>Customer Support</p></Link> 
                    <br></br>
                   <Link><p>Shipping Fqp</p></Link>   
                    <br></br>
                    <Link><p>Warrenty</p></Link>  
                    <br></br>
                    <Link><p>Xiomi Extange</p></Link>  
                    <br></br>
                    <Link> <p>User Guid</p></Link> 
                    <br></br>
                    <Link><p>Laptop Driver</p></Link>  
                    <br></br> <Link><p>Mi Screen Protocted</p></Link> 
                    <br></br> <Link><p>Mi completed producted</p></Link> 
                    <br></br> <Link><p>Location</p></Link> 
                    <br></br>

                </div>
                  <div className='col-2' >
                    <h1 style={{color:"white"}}>Shop & Lern</h1>
                   <Link><p>Xiomi phone</p></Link> 
                    <br></br>
                    <Link> <p>Redmi phone</p></Link> 
                    <br></br>
                   <Link><p>Tv</p></Link>   
                    <br></br>
                    <Link><p>Laptop&Tabltes</p></Link>  
                    <br></br>
                    <Link><p>Audio</p></Link>  
                    <br></br>
                    <Link> <p>Lifestyle</p></Link> 
                    <br></br>
                    <Link><p>Smarthome</p></Link>  
                   

                </div>
                  <div className='col-2'>
                    <h1 style={{color:"white"}}>RETAIL STORE</h1>
                   <Link><p>Mi Home
</p></Link> 
                    <br></br>
                    <Link> <p>Mi Authorized Store
</p></Link> 
                    <br></br>
                   <Link><p>Mi Store Franchise
</p></Link>   
                    <br></br>
                </div>
                  <div className='col-2'>
                    <h1 style={{color:"white"}}>ABOUT US
</h1>
                   <Link><p>Xiaomi
</p></Link> 
                    <br></br>
                    <Link> <p>Privacy Policy</p></Link> 
                    <br></br>
                   <Link><p>User Agreement
</p></Link>   
                    <br></br>
                    <Link><p>Integrity & Compliance</p></Link>  
                    <br></br>
                    <Link><p>CSR and Disclosures
</p></Link>  
                    <br></br>
                    <Link> <p>E-Waste Management
</p></Link> 
                    <br></br>
                    <Link><p>In The Press
</p></Link>  
                    <br></br> <Link><p>Trust Center
</p></Link> 
                    <br></br> <Link><p>Culture</p></Link> 
                    <br></br> <Link><p>Smartphone Quality
</p></Link> 
                    <br></br>

                </div>
                <div className='col-4'>
                    <h5>Let's Stay touch</h5>
                    <input type='email' style={{padding:"10px",width:"340px",borderRadius:"10px"}}></input>
                    <br>
                    </br>
                    <br></br>
                    <br></br>
                    <div style={{border:"2px solid black"}}>
                        <h2>Get the Mi on Your hand</h2>
                        <img src='https://i03.appmifile.com/32_operator_in/22/11/2022/9b4d58f78a203b82a56bdd11692d4ba1.png?thumb=1&w=80&f=webp&q=85' alt='footer'></img>
                        <Link><a href='https://in.event.mi.com/in/install-mi-store'>Click here to download</a></Link>

                        
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
