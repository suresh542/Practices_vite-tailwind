import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import HookPracties from './Practies/HookPracties'
import About from './About/About'
import FormValidation from './Practies/FormValidation'
import CurdJS from './Practies/CurdJS'

export default function PageRoute() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/hookpracties" element={<HookPracties/>} />
            <Route path="/formvalidation" element={<FormValidation/>} />
            <Route path="/curdjavascript" element={<CurdJS/>} />
        </Routes>
    </div>
  )
}
