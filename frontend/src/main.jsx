import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./Pages/Home";
import Privacy from './components/Privacy/Privacy';
import Term from './components/Term/Term';
import Refund from './components/Refund/Refund';
import Enroll from './components/Packagepage/Enroll';
import Form from './components/Packagepage/Form';
import Successpage from './components/Packagepage/Successpage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>} />
      <Route path='/Price' element={<Enroll/>} />
      <Route path='/Privacy' element={<Privacy/>} />
      <Route path='/Term' element={<Term/>} />
      <Route path='/Refund' element={<Refund/>} />
      <Route path='/Register' element={<Form/>} />
      <Route path='/Paymentsuccess' element={<Successpage/>} />
    </Route>
  )
)

ReactDOM.createRoot
  (document.getElementById('root')).
  render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
