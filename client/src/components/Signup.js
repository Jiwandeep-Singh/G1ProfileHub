import { React, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Registration.css'
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", work: "", phoneno: "", password: "", cpassword: ""
  }
  )

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
    // [name] will fetch dynamic value 
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, work, phoneno, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, work, phoneno, password, cpassword
      })
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("invalid Registration");
      console.log("invalid Registration")
    }
    else {
      window.alert("Registeration Successful")
      console.log("registration Successfull")

      navigate('/login')
    }
  }
  return (
    <>

      <div className="material-bg heading-font  ">
        <div className="container padding-text padding-signup pb-3 ">Home - Sign up</div>
      </div>
      {/* <!-- signup form --> */}
      <form method='POST'>
        <div className="container sign-up-form  mt-5 sign-up-font ps-md-5 pe-md-5 ">
          <div className="row justify-content-center pt-5 pb-5 ">Sign Up</div>
          <div className="row ">
            <div className="col-md mb-3 ps-md-5 pe-md-5"> <input type="text" className="form-control form-content-bg" placeholder="Name" name="name" onChange={handleInputs} value={user.name} /></div>
            <div className="col-md mb-3 pe-md-5"> <input type="email" className="form-control form-content-bg" placeholder="Email" name="email" onChange={handleInputs} value={user.email} /></div>
          </div>
          <div className="row ">
            <div className="col-md mb-3  ps-md-5 pe-md-5"> <input type="number" className="form-control form-content-bg" placeholder="Phone Number" name="phoneno" onChange={handleInputs} value={user.phoneno} /></div>
            <div className="col-md mb-3 pe-md-5"> <input type="text" className="form-control form-content-bg" placeholder="Profession" name="work" onChange={handleInputs} value={user.work} /></div>
          </div>

          <div className="row "> <div className="col-md mb-3  ps-md-5 pe-md-5"> <input type="text" className="form-control form-content-bg" placeholder="Password" name="password" onChange={handleInputs} value={user.password} /></div>
            <div className="col-md mb-3 pe-md-5"> <input type="text" className="form-control form-content-bg" placeholder="Confirm Password" name="cpassword" onChange={handleInputs} value={user.cpassword} /></div></div>

          {/* <!-- <div className="row mb-5">
                  <div className="col-md  ps-md-5 pe-md-5">
                  <input type="text" className="form-control form-content-bg " placeholder="work" name="work"></div>
                  <div className="col-md mb-3  pe-md-5"></div>
              </div> --> */}

          <div className="row justify-content-center mb-5"><button className="btn  button-size" type="submit" onClick={PostData}>Register</button></div>
        </div>
      </form>

      <div className="container text-center mt-4  ">
        <p className="login-here-font margin-bottom-form">Have an Account? Login  <NavLink to="/login" className="text-decoration-none"> Here </NavLink></p>
      </div>
    </>
  )
}

export default Signup