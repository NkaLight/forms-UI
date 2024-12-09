import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormsPage from "./Pages/Forms"
import Home from "./Pages/Home"
import PageNotFound from "./Pages/404Page"


/**
 * Handling Client-side Routing 
 */
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path='/Forms' element={<FormsPage />}/>

      <Route path="*" element={<PageNotFound />} />
    </Route>
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
