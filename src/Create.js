import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const navigate=useNavigate();

    const header ={"Access-Control-Allow-origin":"*"}
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("clickd");
        axios.post("https://64c39d0467cfdca3b65ffd7a.mockapi.io/crud-operation",
            {
                name:name,
                email:email,
                header,
            }
        ).then(()=>{
            navigate("/read");
        })
        
    }

  return (
    <>
      <div>
        <form className="ms-3 me-3 container-fluid">
        <h2>Create</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
        
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
        
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
