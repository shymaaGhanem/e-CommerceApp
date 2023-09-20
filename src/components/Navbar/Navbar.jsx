import React, { useContext } from 'react'
import img from './../../assets/img/freshcart-logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { CounterContext, counterContext } from '../../context/counterContext'
import { userContext } from '../../context/userToken'

export default function Navbar() {
let navigate =useNavigate()
  let {userToken,setToken}=useContext(userContext)
  
function logOut(){
localStorage.removeItem('userToken');
setToken(null);
navigate('/signin')
}

  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
        <Link className="navbar-brand" to="/">
        <img src={img} alt=''/>
        </Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
        {userToken !== null?
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
         
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="category">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="brands">Brands</Link>
          </li>
        </ul>:
        ''
        }  
        
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
         
            <li className="nav-item d-flex align-items-center">
              <i className='fa-brands fa-facebook mx-2'></i>
              <i className='fa-brands fa-twitter mx-2'></i>
              <i className='fa-brands fa-instagram mx-2'></i>
              <i className='fa-brands fa-google mx-2'></i>
            </li>
           
           {
            userToken == null?
            <>
             <li className="nav-item">
              <Link className="nav-link" to="signin">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="signup">Register</Link>
            </li>
            </>
            :
            
          <li className="nav-item">
            <Link onClick={()=>{logOut()}} className="nav-link" to="signin">Logout</Link>
          </li>
           }
           
          
          </ul>
       
        </div>
      </div>
    </nav>
    {/* break 8:30 */}
    
    </div>
  )
}
