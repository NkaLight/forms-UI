import { useState } from 'react'
import React from 'react'
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
    <>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forms" element={<FormsPage />} />
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
