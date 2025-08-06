import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidenav from './Sidenav';


function Tabletcreate() {
  const handle = (e) => {
    e.preventDefault()
    const form = e.target
    const title = form.title.value.trim()
    const img = form.img.value.trim()
    const price = form.price.value.trim()

    if (!title || !img || !price) {
      toast.warn("All fields are required")
      return
    }

    const da = { title, img, price }

    fetch("http://localhost:4000/tablet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(da)
    })
      .then((res) => res.json())
      .then((dat) => {
        toast.success("Successfully Submitted")
        form.reset() // clear form after submission
      })
      .catch(() => toast.error("Something went wrong"))
  }

  return (
    <div>
    <section>
      <Sidenav></Sidenav>
    </section>
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
          
        </form>
        <ToastContainer></ToastContainer>
        
      </section>
    </div>
  )
}

export default Tabletcreate
