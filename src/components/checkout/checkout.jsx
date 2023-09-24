import { useFormik } from "formik";
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";

export default function Checkout() {
let {onlinePayment,getLoggedUserCart}=useContext(cartContext)
async function onlinePay(values){
let {data}=await getLoggedUserCart()
// console.log(data._id)
let resp =await onlinePayment(data.data._id,values)

window.location.href=resp.data.session.url
}
let formik=useFormik({
initialValues:{
details:'',
phone:'',
city:''
},
onSubmit:onlinePay
})
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="mx-auto w-75 my-5">
        <h3>Online Payment</h3>
        <label>details:</label>
        <input
        onChange={formik.handleChange} onBlur={formik.handleBlur}
          id="details"
          name="details"
          type="text"
          className="form-control"
        />
        <label>phone:</label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} id="phone" name="phone" type="tel" className="form-control" />
        <label>city:</label>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} id="city" name="city" type="text" className="form-control" />
        <button className="btn bg-main text-light my-3">Pay</button>
      </form>
    </div>
  );
}
