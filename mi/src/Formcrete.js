import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Sidenav from './Sidenav';
import './nav/Admin.css';
function Formcrete() {
  const handle=(e)=>{
    e.preventDefault()
    const form=e.target
    const title=form.title.value
    const img=form.img.value
    const price=form.price.value
    if(title===""||img===""||price===""){
      toast.warn("All filed requried")
      return
    }
    const by={
      title,
      img,
      price,
    }
    fetch("http://localhost:4000/mobile",{
      method:"POST",
      headers:{
    "Content-Type": "application/json"

      },
      body:JSON.stringify(by)
     
      })
      .then((res)=>res.json())
      .then((data)=>{
      toast.success("Sucefully submited")
    })
  }

  return (
    <div>
      <div style={{}}>
        <Sidenav />
      </div>

      <section>
        <h1 style={{ textAlign: "center", position: "relative", bottom: "50px" }}>
          Welcome to Create Page
        </h1>

        <form style={{ width: "600px", position: "relative", left: "700px",bottom:"550px" }} onSubmit={handle}>

          <input
            type="text"
            placeholder="Enter your name"
            name="title"
            id="title"
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          />
          <br />
          <p style={{ marginLeft: "40px", color: "red" }}></p>
          <input
            type="text"
            placeholder="Image"
            name="img"
            id="img"
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          />
          <br />
          <p style={{ marginLeft: "40px", color: "red" }}></p>

          <input
            type="text"
            placeholder="price"
            name="price"
            id="price"
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          />
          <br />
          <p style={{ marginLeft: "40px", color: "red" }}></p>
          <br />

          <button
            className="btn btn-primary"
            style={{ position: "relative", left: "150px", padding: "20px", width: "300px" }}>
            Submit
          </button>
        </form>
      </section>
      <ToastContainer /> 
    </div>
  );
}

export default Formcrete;
