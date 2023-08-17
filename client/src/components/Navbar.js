import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpg'
import { UserContext } from '../App'
const RanderMenu = () => {
  const { state, dispatch } = useContext(UserContext);
  if (state) {
    return (<>
      <ul className="navbar-nav menu ps-3 mx-auto ">
        <li className="nav-item">
          <NavLink className="nav-link active me-4" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-4" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-4" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-4" to="/logout">Logout</NavLink>
        </li>
      </ul>
    </>
    )
  } else {

    return (<>
      <ul className="navbar-nav menu ps-3 mx-auto ">
        <li className="nav-item">
          <NavLink className="nav-link active me-4" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-4" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-4" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-4" to="/login">Login</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link active me-4" to="/signup">Signup</NavLink>
        </li>

      </ul>
    </>
    )
  }

}
const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  pb-3 row1 fixed-top ">
        <div className="container ">

          <div className="navbar-brand logo" >
            <img src={logo} alt="logo" width="100" />
          </div>


          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav menu ps-3 mx-auto ">
             <RanderMenu/>

            </ul>

          </div>
        </div>

      </nav>

    </>
  )
}

export default Navbar