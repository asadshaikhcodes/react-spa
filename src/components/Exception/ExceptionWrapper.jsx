import React from 'react'
import { Outlet } from 'react-router-dom'

function ExceptionWrapper() {
  return (
    <div><Outlet/></div>
  )
}

export default ExceptionWrapper