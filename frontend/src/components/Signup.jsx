import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios  from 'axios';
import toast from 'react-hot-toast';
function Signup() {
  const Navigate= useNavigate();
     const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm()
     
    //   taking data from backend
      const onSubmit = async (data) => {
  const userInfo = {
    name: data.name,
    email: data.email,
    password: data.password,
  };

  console.log(userInfo); // inspect payload

  try {
    const res = await axios.post("http://localhost:8000/user/signup", userInfo);
    console.log(res.data);
     localStorage.setItem("users",JSON.stringify(res.data.user));
    toast.success('Signup Successfully ');
    Navigate ('/');
  } 
 
  catch (err) {
    console.log("the error is:", err);
    toast.error("Signup failed: " + (err.response?.data?.message))
  }
};

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="  border-[2px] shadow-md  p-5 rounded-md  ">
                
                    <div className="">
                      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <div className=' flex flex-col gap-4'>
                            <div className='flex   justify-between'>
                                <h3 className="font-bold text-lg">Signup</h3>
                                {/* cross button  */}
                                <NavLink to='/' className=" btn btn-sm btn-circle">✕</NavLink>
                            </div>
                            <span>Name</span>
                            <input type='name' placeholder='enter your name' className="rounded  w-80 px-3  py-1 shadow-sm bg-gray-100 outline-none"   {...register("name", { required: true })}/>
                             {errors.name  && <span className='text-sm text-red-500'>This field is required</span>}
                            <span>Email</span>
                            <input type='email' placeholder='enter your email' className="rounded  w-80 px-3  py-1 shadow-sm bg-gray-100 outline-none"    {...register("email", { required: true })}/>
                          
                              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            <span>Password</span>
                            <input type='text' placeholder='enter your password' className="rounded  w-80 px-3  py-1 shadow-sm bg-gray-100 outline-none" {...register("password", { required: true })}/>
                             {errors.password  && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        {/* login BUTTON */}
                        <div className="flex justify-around mt-4 ext-xl">
                            <button className=' bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200'>Signup  </button>
                            <p onClick={() => document.getElementById("my_modal_3").showModal()}>Have Account?  <span  className='underline text-blue-500 cursor-pointer'>Login</span>

                            </p>
                        </div>
                        </form>
                        <Login/> 
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Signup
