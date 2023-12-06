import React from 'react'
import { useState } from 'react'
import Admin from './Admin'
import Guest from './Guest'
import User from './User'

export default function App() {
  const [userRole, setUserRole] = useState('Admin')
  const ComponentByRoles = {
    'Admin': Admin,
    'User': User,
    'Guest': Guest 
  }

  const getComponent = (params)=> ComponentByRoles
  [params] || ComponentByRoles['Guest']
  const CurrentUser = getComponent(userRole)

  return (
    <>
      <CurrentUser/>
    </>
  )
}

