import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Sidenav from './Sidenav';

function Tabletupdate() {
  const { id } = useParams();
  const [tab, settab] = useState({
    title: "",
    img: "",
    price: ""
  });

  useEffect(() => {
    fetch(`http://localhost:4000/onetablet/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          settab(data);
        }
      });
  }, [id]); 

  const handle = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;

    if (title === "" || img === "" || price === "") {
      toast.warn("All fields are required");
      return;
    }

    const up = { title, img, price };

    fetch(`http://localhost:4000/updateTablete/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(up)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update");
        }
        return res.json();
      })
      .then((data) => {
        toast.success("Successfully updated");
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.error(err);
      });
  };

  return (
    <div>
       <section>
            <Sidenav></Sidenav>
          </section>
      <section>
        <h1 style={{ textAlign: "center" }}>Welcome to Update page</h1>
        <form
          style={{ width: "600px", position: "relative", left: "700px" ,bottom:"550px"}}
          onSubmit={handle}
        >
         
          <label>title</label>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            id="title"
            defaultValue={tab.title}
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          />
          <br />
          <label>Img</label>
          <input
            type="text"
            placeholder="Image URL"
            name="img"
            id="img"
            defaultValue={tab.img}
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          />
          <br />
          <label>Price</label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            id="price"
            defaultValue={tab.price}
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          />
          <br />
          <br />
          <button
            className="btn btn-primary"
            style={{ position: "relative", left: "150px", padding: "20px", width: "300px" }}
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </section>
    </div>
  );
}

export default Tabletupdate;
