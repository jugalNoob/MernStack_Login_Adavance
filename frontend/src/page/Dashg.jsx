import axios from 'axios';
import React, { useEffect } from 'react';
function Dashg() {
    

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:9000/user", { withCredentials: true });
    
            console.log("response",response)
        } catch (error) {
    
        }
    }

useEffect(() => {
  getUser()
}, [])
  return (
    <div>
      
    </div>
  )
}

export default Dashg
