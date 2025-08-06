import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Tvupdatepro() {
  const { id } = useParams()
  const [tvup, settvup] = useState({
    title: '',
    img: '',
    price: ''
  })

  useEffect(() => {
    fetch(`http://localhost:4000/tvone/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          settvup(data)
        }
      })
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const img = form.img.value
    const price = form.price.value
    if (!title || !img || !price) {
      toast.warn("All fields are required")
      return
    }
    const updatedData = { title, img, price }

    fetch(`http://localhost:4000/tvupdate/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully updated")
      })
  }

  return (
    <div>
      <div>
      </div>
      <section>
        <h1 style={{ textAlign: "center" }}>Welcome to Update page</h1>
        <form
          style={{ width: "700px", position: "relative", left: "700px" }}
          onSubmit={handleSubmit}
        >
          <label>Title </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={tvup.title}
            style={{
              padding: "10px",
              width: "500px",
              marginTop: "20px",
              marginLeft: "50px"
            }}
          />
          <br />
          <label>Img</label>
          <input
            type="text"
            name="img"
            id="img"
            defaultValue={tvup.img}
            style={{
              padding: "10px",
              width: "500px",
              marginTop: "20px",
              marginLeft: "50px"
            }}
          />
          <br />
          <label>Price</label>
          <input
            type="text"
            name="price"
            id="price"
            defaultValue={tvup.price}
            style={{
              padding: "10px",
              width: "500px",
              marginTop: "20px",
              marginLeft: "50px"
            }}
          />
          <br />
          <button
            className="btn btn-primary"
            style={{
              position: "relative",
              left: "150px",
              padding: "20px",
              width: "300px"
            }}
          >
            Submit
          </button>
        </form>
      </section>
      <ToastContainer />
    </div>
  )
}

export default Tvupdatepro
