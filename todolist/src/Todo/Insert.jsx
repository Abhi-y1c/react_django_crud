// import React, { useState } from 'react'

// const Insert = () => {

// const [input,setInput]=useState({});
//  const handlechange=(e)=>{
//     setInput({...input,[e.target.name]:e.target.value})
//  }
//  const handleSubmit=()=>{

//   let api=`http://127.0.0.1:8000/tableapi/`;
//               axios.post(api, input).then((res)=>{
//                      alert("Data save !!")
                     
//               })
//   setInput({
//     name:"",
//     age:"",
//     city:"",
//     sallary:""

//   })
//  }
//   return (
//     <div>
//        <div class="container">
//         <form class="simple-form">
//             <h2 style={{fontSize:"24px"}}>Simple Form</h2>
//             <label for="name">Name:</label>
//             <input type="text" id="name" name="name" value={input.name} onChange={handlechange} required   />
            
//             <label for="age">Age:</label>
//             <input type="number" id="age" name="age" value={input.age} onChange={handlechange} required />
            
//             <label for="city">City:</label>
//             <input type="text" id="city" name="city" value={input.city} onChange={handlechange} required />
            
//             <label for="city">Sallary:</label>
//             <input type="text" id="sallary" name="sallary" value={input.sallary} onChange={handlechange} required />
            
//             <button type="submit" onClick={handleSubmit}>Submit</button>
//         </form>
//     </div>
//     </div>
//   )
// }

// export default Insert


import { useState } from "react";
import axios from "axios";


const Insert=()=>
{
       const[input, setInput]=useState({});

       const handlechange=(e)=>{
              let name=e.target.name;
              let value=e.target.value;

              setInput(values=>({...values, [name]:value}));

       }

       const handleSumit=()=>{
              // let api=`http://127.0.0.1:8000/tableapi/`;
              const res=axios.post("http://127.0.0.1:8000/tableapi/",input)
              console.log(res.data);
              alert("Data Insert !!")
              // axios.post(api, input).then((res)=>{
                    //  alert("Data save !!")

              //        const res=axios.post("http://127.0.0.1:8000/tableapi/",input)
              //        console.log(res.data);
              //       // setMydata(res.data);
                     
              // })

              setInput({
                     
                     name:"",
                    age:"",
                    city:"",
                    sallary:""
                
              })
       }


       

       return(
        <>

      <div className="container">
        <h1>Insert Record</h1>
        <form class="simple-form">
        <input type="text" placeholder="abhi"  name="name" value={input.name} onChange={handlechange} required   /><br/><br/>
            
         
        <input type="number"   name="age" value={input.age} onChange={handlechange} required /><br/><br/>
            
          
          <input type="text"  name="city" value={input.city} onChange={handlechange} required /><br/><br/>
            
           
          <input type="text"  name="sallary" value={input.sallary} onChange={handlechange} required /><br/>
            
            <button type="submit" onClick={handleSumit}>Submit</button>
          </form>
       </div>
       
         </>
       );
}

export default Insert;