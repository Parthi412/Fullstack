import React, { useEffect, useState } from 'react';
import Sidenav from './Sidenav';
import './nav/Admin.css'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Update(){  
  const { id } = useParams()
  const [newItem, setNewItem] = useState({
    title: "",
    img: "",
    price: ""
  });

  useEffect(() => {
    fetch(`http://localhost:4000/onemobile/${id}`)
      .then((res) => res.json())
      .then((info) => setNewItem(info))
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    const title = form.title.value
    const img = form.img.value
    const price= form.price.value

    if (title === "" || img === "" || price === "") {
      toast.warn("All filed requried")
      return
    }
    const by = {
      title,
      img,
      price
    }
    fetch(`http://localhost:4000/upmobile/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify(by)

    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Sucefully submited")
      })
  }

  return (
    <div >
      <br>
      </br>
      <br>
      </br>
      <Sidenav></Sidenav>
      <section>
        <h1 style={{ textAlign: "center" }}>Welcome to Update page</h1>
        <form style={{ width: "700px", position: "relative", left: "700px",bottom:"550px" }} onSubmit={handleSubmit}  >
          <label >Title </label>
          <input type="text"  name="title" id='title'  defaultValue={newItem.title}style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }} ></input>
          <br></br>
          <p style={{ marginLeft: "40px", color: "red" }}></p>
          <label > Img</label>
          <input type="text"  name='img' id='img'  defaultValue={newItem.img} style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }} />
          <br></br>
          <p style={{ marginLeft: "40px", color: "red" }}></p>
          <label>price</label>
          <input type="text"  name='price' id='price' defaultValue={newItem.price} style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }} />
          <br></br>
          <p style={{ marginLeft: "40px", color: "red" }}></p>
          <br>
          </br>
          <button className='btn btn-primary' style={{ position: "relative", left: "150px", padding: "20px", width: "300px" }} >Submit</button>
        </form>
      </section>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Update;
