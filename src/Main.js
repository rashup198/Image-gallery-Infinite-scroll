import React from 'react'
import { Routes,BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import Login from './Login'
import Error from './Error'

const Main = () => {
  return (
    <div>
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<App></App>}></Route>
        <Route path="*" element={<Error></Error>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Main
