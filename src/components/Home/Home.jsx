import React from 'react'
import Products from '../Products/Products'
import Category from '../Category/Category'
import MainSlider from './../mainSlider/mainSlider';
import {Helmet} from "react-helmet";

export default function Home() {
  return (
  
    <div>
           <Helmet>
                <title>Home</title>
            </Helmet>
    <MainSlider/>
    <Category/>
    <Products/>
  
    </div>
  )
}
