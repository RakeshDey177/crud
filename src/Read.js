import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState();

  function getData () {
    axios
      .get("https://64c39d0467cfdca3b65ffd7a.mockapi.io/crud-operation")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function editData(id,name,email){
    localStorage.setItem("id",id)
    localStorage.setItem("name",name,)
    localStorage.setItem("email",email);
  }


  function deleteData(id){

    axios.delete(`https://64c39d0467cfdca3b65ffd7a.mockapi.io/crud-operation/${id}`).then(()=>{
        getData();
    })

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Your Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data?.map((ele,id) => {
          return (
            <>
            <tbody >
              <tr key={id}>
                <th scope="row">{ele.id}</th>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>
                <NavLink to="/update">
                <button type="button" className="btn btn-primary" onClick={()=>editData(ele.id,ele.name,ele.email)}>
                    Edit
                  </button>
                </NavLink>
                </td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={()=>deleteData(ele.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
