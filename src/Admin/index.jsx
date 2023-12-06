import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Navigation from '../Components/Navigation'

export default function Admin() {
  return (
    <Routes>
        <Route path='/' element={<Navigation/>}/>
        <Route path='*' element={<Navigate to={'/'} 
        replace='true'/> }/>
    </Routes>
  )
}
