import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div className='navbar'>
      <Link to="Home">Home</Link>
      <Link to="Insert">Insert</Link>
      <Link to="Display">Display</Link>
      <Link to="Home">Update/Delete</Link>
      </div>

      <Outlet/>
    </div>

  )
}

export default Layout
