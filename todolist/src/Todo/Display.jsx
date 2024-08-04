import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Display = () => {
  const [mydata,setMydata]=useState([])
  const getapi=async()=>{
    const res=await axios.get("http://127.0.0.1:8000/tableapi/")
     console.log(res.data);
    setMydata(res.data);

  }
  useEffect(()=>{
   getapi();
  },[]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/tableapi/${id}`);
      // Fetch the updated data after deletion
      alert("data delete")
      const response = await axios.get('http://127.0.0.1:8000/tableapi/');
      setMydata(response.data);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const Diisplay=mydata.map((key)=>{
    return(
      <>
      <tr k={key.id}>
        <td>{key.id}</td>
        <td> {key.name}</td>
        <td> {key.age}</td>
        <td>  {key.city}</td>
        <td> {key.sallary}</td>
        <button onClick={() => handleDelete(key.id)}>Delete</button>
      </tr>
     
      
      </>
    )
  })
  return (
    <div>
       <table width="100%" align="center" border="1px">
              <tr>
                     <th>id</th>
                     <th>Name</th>
                     <th>Age</th>
                     <th>City</th>
                     <th>Salary</th>
              </tr>
              {Diisplay}
        </table>
      


    </div>
  )
}

export default Display


// =====================

// import { useState, useEffect } from "react";
// import axios from "axios";




// const Display=()=>{

// const [myData, setdata]= useState([]);

// const loadData=()=>{
//        let apis = `http://127.0.0.1:8000/tableapi/`
//               axios.get(apis).then((res)=>{
//                      setdata(res.data);
//                      console.log(res);
//               });
// }
// useEffect(()=>{
//        loadData();

// }, []);

// const ans=myData.map((key)=>{
//        return(
//               <>
//               <tr>
//                      {/* <td>{key.EmployID}</td> */}
//                      <td>{key.name}</td>
//                      <td>{key.age}</td>
//                      <td>{key.city}</td>
//                      <td>{key.sallary}</td>
                   
//               </tr>
              
//               </>
//        );
// })



//        return(
//         <>
//        <center><h1>Display Records </h1></center> 
//         <table width="100%" align="center" border="1px">
//               <tr>
//                      <th>ID</th>
//                      <th>Name</th>
//                      <th>Address</th>
//                      <th>Salary</th>
//               </tr>
//               {ans}
//         </table>
    
//         </>
//        );
// }

// export default Display;