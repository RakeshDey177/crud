import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Update = () => {

    const [id,setId] =useState(0);
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");

    const navigate=useNavigate();

    function handleUpdate(e){
        e.preventDefault();
        axios.put(`https://64c39d0467cfdca3b65ffd7a.mockapi.io/crud-operation/${id}`,{
            name:name,
            email:email
        }).then(()=>{
            navigate("/read");
        })

    }

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])

  return (
    <>
      <div>
        <form className="ms-3 me-3 container-fluid">
        <h2>Update Data</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
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
              value={name }
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
        
          <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </>
  )
}

export default Update