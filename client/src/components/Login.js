import { React, useContext, useState } from 'react'
import loginImg from '../images/Rectangle60.png'
import { NavLink, useNavigate } from 'react-router-dom'
import '../signup.css'
import { UserContext } from '../App'


const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid Login");
      console.log("invalid Login")
    }
    else {
      dispatch({ type: "USER", payload: true })
      window.alert("login Successful")
      console.log("login Successfull")

      navigate('/')
    }

  }

  return (
    <>
      <div className="material-bg heading-font  ">
        <div className="container padding-text padding-signup pb-3 ">Home - Login</div>
      </div>


      {/* <!-- Login form --> */}

      <div className="container-fluid">
        <div className="row margin-bottom-form">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className=" sign-up-form  mt-5 sign-up-font    ">
              <table>
                <div className="row ">
                  <td className="col-lg-5 "><img src={loginImg} className="login-img  " alt="" /></td>
                  <td className="col-lg mt-5 ">
                    <div className="container ">
                      <div className="row ">
                        <div className="col text-center pt-4">Login</div>
                        <form method="POST">
                          <div className="row mb-3 ps-4 pe-4">
                            <input type="text" className="form-control form-content-bg mt-5 pt-2 pb-2 " placeholder="Username" name="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                          <div className="row mb-3 ps-4 pe-4"> <input type="text" className="form-control form-content-bg pt-2 pb-2" placeholder="Password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} /></div>

                          {/* <a href="" className="text-end login-text pe-md-5">Forgot Password?</a> */}
                          <div className="row justify-content-center pt-5"><button className="btn  button-size" type="submit" onClick={loginUser}>Login </button></div>
                        </form>
                        <p className="login-here-font  text-center login-text pt-5">Create a account. Signup <NavLink to="/signup" className="text-decoration-none text-dark"> Here </NavLink></p>

                      </div>
                    </div>

                  </td>
                </div>
              </table>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

      </div>
      {/* <span class="material-symbols-outlined">login</span> */}

    </>
  )
}

export default Login