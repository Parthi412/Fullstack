import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidenav from './Sidenav';

function Tvcreate() {
    const handle=(e)=>{
        e.preventDefault()
        const form=e.target
        const title=form.title.value
        const img=form.img.value
        const price=form.price.value
        if(title===""||img===""||price===""){
            toast.warn("All Filed requried")
            return
        }
        const tv={
            title,
            img,
            price
        }
      fetch("http://localhost:4000/tvproduct",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(tv)
      })
      .then((res)=>res.json())
      .then((data)=>{
        toast.success("Suceflly submited")
                form.reset() 

      })
    }
    

    
  return (
    <div>
        <div>
            <Sidenav></Sidenav>
        </div>
        
        <form style={{ width: "600px", position: "relative", left: "700px",bottom:"400px" }} onSubmit={handle}>

          <input
            type="text"
            placeholder="Enter your name"
            name="title"
            id="title"
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          /><br />

          <input
            type="text"
            placeholder="Image"
            name="img"
            id="img"
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          /><br />

          <input
            type="text"
            placeholder="Price"
            name="price"
            id="price"
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          /><br /><br />

          <button
            className="btn btn-primary"
            style={{ position: "relative", left: "150px", padding: "20px", width: "300px" }}>
            Submit
          </button>
          <ToastContainer></ToastContainer>
        </form>

    </div>
  )
}

export default Tvcreate
