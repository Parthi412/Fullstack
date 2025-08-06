import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidenav from './Sidenav'
function Tabletproduct() {
    const[tablet,settablet]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/alltablet").then((res)=>res.json())
        .then((data)=>{
            if(Array.isArray(data)){
              settablet(data)
            }
        })
    },[])
    const Del=(id)=>{
        fetch(`http://localhost:4000/deleteTablete/${id}`,{
          method:"DELETE",
          headers: {
        "Content-Type": "application/json",
      },
        })
        .then((res)=>res.json())
        .then(()=>{
            settablet((pre)=>pre.filter((item)=>item._id!==id))
        })
        }
  return (
    <div>
        <div style={{ padding: "20px" }}>
                <Link style={{ textDecoration: "none", marginRight: "20px" }} to="/tabcreate">
                  <h1 style={{ textAlign:"center"}}>Create</h1>
                </Link> 
              </div>
              <Sidenav></Sidenav>
      <table
        className="table"
        style={{
          position: "relative",
          left: '500px',
          bottom: "500px",
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
          {tablet.map((item) => (
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
            
                <Link to={`/tableteupdate/${item._id}`}>
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

export default Tabletproduct
