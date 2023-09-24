import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './context/userToken';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import CartContextProvider from './context/cartContext';
let queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CartContextProvider>
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
    <App/>
    </UserContextProvider>
    {/* <ReactQueryDevtools position='bottom-right' initialIsOpen="false"></ReactQueryDevtools> */}
  </QueryClientProvider>
  </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
