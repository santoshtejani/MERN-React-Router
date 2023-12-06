import React from 'react'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export default function User() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/user' element={<h1> I am Dashboard- User </h1>}/>
    <Route path='*' element={<Navigate to={'/'}
    replace='true'/> }/>
</Routes>
</BrowserRouter>

    )
}
