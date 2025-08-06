import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import { Link } from 'react-router-dom'

function Tvproduct() {
    const[tv,settv]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/tvall")
        .then((res)=>res.json())
        .then((data)=>{
            if(Array.isArray(data)){
                settv(data)
            }
        })
    })
                const Del=(id)=>{
                    fetch(`http://localhost:4000/tvdelete/${id}`,{
                        method:"DELETE",
                        headers:{
                            "Content-type":"application/json"
                        },
                    })
                    .then((res)=>res.json())
                    .then((data)=>{
                        settv((pre)=>pre.filter((item)=>item._id !==id))
                    })

                }

  return (
    <div>
        
        <div>
            <Link to='/tvcreate'><h1 style={{textAlign:"center"}}>Create</h1></Link>
            
        </div>
        <div>
            <Sidenav>

            </Sidenav>
        </div>
        <table
               className="table"
               style={{
                 position: "relative",
                 left: '500px',
                 bottom: "400px",
                 width: "1200px",
               }}
             >
               <thead>
                 <tr>
                   <th scope="col">Image</th>
                   <th scope="col">Title</th>
                   <th scope="col">Price</th>
                   <th scope="col">Action</th>
                 </tr>
               </thead>
               <tbody>
                
                 {tv.map((item) => (
                    
                   <tr key={item._id}>
                     <td>
                       <img
                         src={item.img}
                         alt={item.title}
                         style={{ width: "100px", height: "100px", objectFit: "cover" }}
                       />
                     </td>
                     <td>{item.title}</td>
                     <td>{item.price}</td>
                     <td>
                   
                       <Link to={`/tvupdate/${item._id}`}>
                         <button style={{ marginRight: "10px" }}>Edit</button>
                       </Link>
                       <button onClick={() => Del(item._id)}>Delete</button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>

      
    </div>
  )
}

export default Tvproduct
