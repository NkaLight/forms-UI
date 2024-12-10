import { useState } from 'react'
import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useParams, useNavigate } from "react-router-dom"
import './App.css'
import FormsPage from "./Pages/Forms"
import Home from "./Pages/Home"
import PageNotFound from "./Pages/404Page"
import Form1 from './Pages/Form-1'

/**Handle dynamically loading Forms */
const DynamForm = () =>{
  const {id} = useParams();
  const nav = useNavigate();



  /* I could not get this to work somehow vite does not allow for variable imports
  const Form = React.lazy(()=>{
    console.log(`./Pages/Form-${id}.jsx`)
    import(`./Pages/Form-${id}.jsx`).catch(()=>{
      nav('/404');
      return new Promise();
    })
  })*/

  /**Alternatively get all Form components then map them out as shown below*/
  const FormComponents = {
    1: Form1,
    2: Form1,
  }
  
  //Choose a specific form from url param
  const SelectedForm = FormComponents[id] || PageNotFound

  return(
    <div>
      <SelectedForm/>
    </div>
  )
}

/**
 * Handling Client-side Routing 
 */
const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forms" element={<FormsPage />} />
      <Route path="/forms/:id" element={<DynamForm/>} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />

    </>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  );
}

export default App
