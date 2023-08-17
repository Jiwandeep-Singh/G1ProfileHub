import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (<>
    <div className="container mt-5 pt-5 text-center">
      <div className='pt-5'> 404</div>
      <h1>Page Not found</h1>
      <NavLink to="/"> <input type="button " className="btn btn-primary" value=' Go to homepage' /></NavLink>
    </div>
  </>

  )
}

export default ErrorPage