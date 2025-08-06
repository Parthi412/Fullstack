import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidenav from '../Sidenav';

function ProductList() {
  const [newItem, setNewItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allmobile")
      .then((res) => res.json())
      .then((info) => setNewItem(info))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const del = (id) => {
    fetch(`http://localhost:4000/onedelete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((det) => {
        setNewItem((prevItems) => prevItems.filter((item) => item._id !== id));
      })
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <Link style={{ textDecoration: "none", marginRight: "20px" }} to='/cre'>
          <h1 style={{ textAlign:"center" }}>Create</h1>
        </Link>
      
      </div>
      <div style={{}}>
        <Sidenav />
      </div>
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
          {newItem.map((item) => (
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
                <Link to={`/update/${item._id}`}>
                  <button style={{ marginRight: "10px" }}>Edit</button>
                </Link>
                <button onClick={() => del(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
