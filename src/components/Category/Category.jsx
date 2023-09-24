import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Slider from "react-slick";

export default function Category() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoPlay:true,
    slidesToShow: 5,
    slidesToScroll: 2
  };
  
async function getCategory(){
return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
}

let{data,isLoading}=useQuery('category',getCategory)
console.log(data?.data.data)
  return (
    <div>  
    
     <Slider {...settings}>
    {data?.data.data.map((cat)=>{
    return  <img src={cat.image}  height={200}/>
  
    })}
     </Slider>

   
   
    
    
    </div>
  )
}
