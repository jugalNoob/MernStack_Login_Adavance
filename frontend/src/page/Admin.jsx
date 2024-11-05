import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style/admin.css";


function Admin() {

    const [get , setGet]=useState([])

    const Admindata =async()=>{

        try {
            const response = await axios.get("http://localhost:9000/Admin", { withCredentials: true });
    
            console.log("response",response.data.getuser)
            
            setGet(response.data.getuser)

        } catch (error) {
    
            console.log("error" , error)
        }
    }
    

    useEffect(()=>{
        Admindata()
    },[])
  return (
    <div>

    <div className="admin_back">

 
   
   <div className="display">
   {
    get.map((user)=>{
         {/* console.log(user)  // to check user data in console */}

       
        return(

<div className="flex_one">
            <div key={user._id}>
            <h2>{user._id}</h2>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                <h2>{user.date}</h2>
            </div>
            </div>
        
            
        )  // map end
      
    })
    
    
   }
   
   </div>
    </div>
    </div>
  )
}

export default Admin
