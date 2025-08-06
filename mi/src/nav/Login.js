import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Nav from './Nav';


function Login() {
  const [user, setuser] = useState({
    name: "",
    mail: ""
  });
  const [errr, seterrr] = useState({});

  function handle(e) {
    e.preventDefault();
    const er = {};

    if (!user.name) er.name = "Please enter the name";
    if (!user.mail) er.mail = "Please enter the mail ID";

    seterrr(er);

    if (Object.keys(er).length === 0) {
      alert("Successfully submitted");
    }
  }

  function handlecahnge(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Nav></Nav>
    <div style={{ backgroundColor: "gray", height: "100vh", width: "99vw" }}>
      <div className='container'>
        <hr></hr>
        <div className='row'>
          <div className='col-lg'>
            <h1 style={{ color: "white" }}>
              <img
                style={{ width: "80px", borderRadius: "10px" }}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9yw8VfBRgD2-zuSV31rBt7WrwfpY0j7QJHQ&s'
                alt="logo"
              /> Xiaomi Account
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg five'>
            <div className='tt' style={{
              height: "700px",
              width: "500px",
              backgroundColor: "white",
              position: "relative",
              left: "350px"
            }}>
              <form onSubmit={handle}>
                <h1 style={{ textAlign: "center", position: "relative", top: "100px" }}>Welcome Back</h1>
                <input
                  name="name"
                  value={user.name}
                  onChange={handlecahnge}
                  placeholder='Enter User id'
                  style={{ width: "400px", height: "50px", position: "relative", top: "200px", left: "50px" }}
                />
                <p style={{ position: "relative", top: "200px", left: "50px", color: "red" }}>{errr.name}</p>
                <br /><br /><br />
                <input
                  name="mail"
                  value={user.mail}
                  onChange={handlecahnge}
                  placeholder='Enter User Mail id'
                  style={{ width: "400px", height: "50px", position: "relative", top: "200px", left: "50px" }}
                />
                <p style={{ position: "relative", top: "200px", left: "60px", color: "red" }}>{errr.mail}</p>
                <br />
                <button type="submit" className='btn btn-primary' style={{
                  position: "relative",
                  top: "200px",
                  left: "200px"
                }}>Sign In</button>
                <br />
                <Link><h6 style={{ position: "relative", top: "200px" }}>Forgot password</h6></Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
