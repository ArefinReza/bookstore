import React from 'react'
import Navbar from '../components/navbar'
import Footer from './Footer'
import { useForm } from "react-hook-form"
function Contactus() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

  return (
    <>
    <Navbar />
    <div className='flex h-screen items-center justify-center '>
    <div className='w-[600px]'>
        <h3 className="font-bold text-lg py-4">Contact Us</h3>
        <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className=''>
                <span>Name</span> <br />
                <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-2 rounded-md outline-none'
                {...register("name", { required: true })}/>
                                <br />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className=''>
                <span>Email</span> <br />
                <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-2 rounded-md outline-none' 
                {...register("email", { required: true })}/>
                <br />
                {errors.email && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className=''>
                <span>Massage</span> <br />
                <textarea type="text" placeholder='Enter Your Massages' className='w-80 px-3 py-2 rounded-md outline-none'
                {...register("massage", { required: true })}/>
                <br />
                {errors.massage && <span className='text-red-600'>This field is required</span>}
            </div>
            <button type='submit' className='bg-blue-500 p-3 rounded-md'>Submit</button>
        </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contactus