import React, { useState } from "react";
import {useFormik}from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
let navigate=useNavigate()
const [errMessage,setErr]=useState(null)
const [isLoading,setLoading]=useState(false)

const schemaValidation = Yup.object({
name:Yup.string().min(3,'min lenght is 3char').max(15,'max lenght is 15 char').required('name is required input'),
email:Yup.string().required('email is required').email('enter avalid email'),
phone:Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/i,'enter avalid phone number'),
password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{4,}$/i,'enter avalid password'),
rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password')],'not matched password'),
})

async function signUp(values)
{
  setLoading(true)
// console.log(values)
let {data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values).catch((err)=>{
setErr(err.response.data.message)
setLoading(false)
})


if(data.message == 'success'){
setErr(null)
  setLoading(false)
formik.resetForm() 
navigate('/signin')
}
// console.log(response)
}

// function  validate(values){
// let errors={}
// if(!values.name){
//  errors.name ='Name is required'
// }else if(values.name.length <3){
// errors.name='name minlenght is 3'
// }

// if(!values.phone){
// errors.phone='phone is required'
// }else if((!/^01[0125][0-9]{8}$/i.test(values.phone))){
// errors.phone='enter a valid phone number'
// }
// if(!values.email){
// errors.email='email is required'
// }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//   errors.email = 'Invalid email address';
// }

// if(!values.password){
// errors.password='password is required'
// }else if(!/^[A-Z][a-z0-9]{4,}$/i.test(values.password)){
// errors.password='enter avalid password'
// }

// if(!values.rePassword){
// errors.rePassword='repassword is required'
// }else if(values.rePassword !== values.password){
// errors.rePassword='not matched password'
// }

// return errors
// }



let formik=useFormik({
initialValues:{
name:'',
email:'',
password:'',
rePassword:'',
phone:''
},
validationSchema:schemaValidation,
onSubmit:signUp
})

  return (
    <div className="w-75 mx-auto my-5">
      <h2 className="text-main fw-bold mb-3">Register Form</h2>
      {
        errMessage !== null?
        <p className="alert alert-danger">{errMessage}</p>
        :
        '' 
      }
      
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} type="text" id="name" className="form-control" />
        {formik.errors.name&& formik.touched.name?
        <div className="alert alert-danger">{formik.errors.name}</div>:
        null
        }
        </div>
        <div className="mb-3">
          <label htmlFor="email">email</label>
          <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} type="email" id="email" className="form-control" />
          {formik.errors.email&& formik.touched.email?
        <div className="alert alert-danger">{formik.errors.email}</div>:
        null
        }
        </div>
        <div className="mb-3">
          <label htmlFor="phone">phone</label>
          <input onBlur={formik.handleBlur} value={formik.values.phone} onChange={formik.handleChange} type="tel" id="phone" className="form-control" />
          {formik.errors.phone&& formik.touched.phone?
        <div className="alert alert-danger">{formik.errors.phone}</div>:
        null
        }
        </div>
        <div className="mb-3">
          <label htmlFor="password">password</label>
          <input onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} type="password" id="password" className="form-control" />
          {formik.errors.password&& formik.touched.password?
        <div className="alert alert-danger">{formik.errors.password}</div>:
        null
        }
        </div>
        <div className="mb-3">
          <label htmlFor="rePassword">rePassword</label>
          <input onBlur={formik.handleBlur} value={formik.values.rePassword} onChange={formik.handleChange} type="password" id="rePassword" className="form-control" />
          {formik.errors.rePassword&& formik.touched.rePassword?
        <div className="alert alert-danger">{formik.errors.rePassword}</div>:
        null
        }
        
        </div>
        {isLoading?
        <button className="btn bg-main text-light d-block ms-auto"><i className="fa-solid fa-spinner fa-spin"></i></button>
        :
        <button disabled={!(formik.isValid&&formik.dirty)} type="submit" className="btn bg-main text-light float-end">
          Register
        </button>
        }
        
      </form>
    </div>
  );
}
