import React from 'react'
import { Outlet } from 'react-router-dom'

function AccountWrapper() {
  return (
    <div><Outlet/></div>
  )
}

export default AccountWrapper