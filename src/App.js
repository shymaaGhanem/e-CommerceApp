import React, { useContext, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Brands from "./components/brands/brands";
import Signin from "./components/Signin/Signin";
import Cart from "./components/cart/cart";
import Category from "./components/Category/Category";
import toast, { CheckmarkIcon, Toaster } from 'react-hot-toast';
import NotFound from "./components/notFound/notFound";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";
import Details from './components/details/details';
import { userContext } from "./context/userToken";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import ResetPassword from "./components/resetPassword/resetPassword";
import Checkout from './components/checkout/checkout';
import Allorders from './components/allorders/allorders';

export default function App() {
  let {setToken}=useContext(userContext)

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRouter><Home /></ProtectedRouter> },
        { path: "signup", element: <Register /> },
        { path: "signin", element: <Signin /> },

        { path: "products", element:<ProtectedRouter><Products /></ProtectedRouter>},
        { path: "brands", element:<ProtectedRouter><Brands /></ProtectedRouter>  },
        { path: "cart", element: <ProtectedRouter><Cart /></ProtectedRouter> },
        { path: "forgotPassword", element:<ForgotPassword/>},
        { path: "resetPassword", element:<ResetPassword/>},
        { path: "details/:id", element: <ProtectedRouter><Details/></ProtectedRouter> },
        { path: "checkout", element: <ProtectedRouter><Checkout/></ProtectedRouter> },
        { path: "category", element:<ProtectedRouter><Category /></ProtectedRouter>  },
        { path: "allorders", element:<ProtectedRouter><Allorders/></ProtectedRouter>  },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  useEffect(()=>{
    if(localStorage.getItem('userToken') !==null){
    setToken(localStorage.getItem('userToken'))
    }
    },[])
    
  return (
    <div>
  
    <RouterProvider router={router} />
    <Toaster />

    </div>
  );
}
