 import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast';
 
 function Logout() {
        const[authuser,setAuthUser]= useAuth();
        const handelLogout = ()=>{
            try{
                   setAuthUser({...authuser, userdata:null});
                   localStorage.removeItem("user");
                   toast.success("Logout Successfully")
                    window.location.reload();
                } catch(err){
                    toast.err("error:" + err.message);
                }
            }
   return (
     <>
       <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handelLogout}>Logout</button>
       </div>
     </>
   )
 }
 
 export default Logout;
 