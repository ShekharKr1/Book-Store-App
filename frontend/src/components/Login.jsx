import React from 'react'
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form"
function Login() {
    const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className=''>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <NavLink to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</NavLink>
                        
                       
                        <div className=' flex flex-col gap-4'>
                         <h3 className="font-bold text-lg">Login</h3>
                            <span>Email</span>
                            <input type='email' placeholder='enter your email' className="rounded  w-80 px-3  py-1 shadow-sm bg-gray-100 outline-none"   {...register("email", { required: true })}/>
                              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            <span>Password</span>
                            <input type='password' placeholder='enter your password' className="rounded  w-80 px-3  py-1 shadow-sm bg-gray-100 outline-none" {...register("password", { required: true })}/>
                             {errors.password  && <span className='text-sm text-red-500'>This field is required</span>}
                          
                        </div>
                        {/* login BUTTON */}
                          <div className="flex justify-around mt-4">
                            <button className=' bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not registered?  <NavLink to='/signup' className='underline text-blue-500 cursor-pointer'>signup</NavLink></p>
                          </div>
                           </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login;
