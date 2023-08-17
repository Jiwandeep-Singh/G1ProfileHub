import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import '../Registration.css'

const Contact = () => {
  const [userData, setUserdata] = useState({ name: "", email: "", phoneno: "", message: "" });

  const contactPage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: { "Content-Type": "application/json" },

      })
      const data = await res.json();
      // console.log(data)

      setUserdata({ ...userData, name: data.name, email: data.email, phoneno: data.phoneno })
      console.log(userData)
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err)

    }
  }

  useEffect(() => { contactPage() }, [])

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(userData)
    setUserdata({ ...userData, [name]: value })

  }

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phoneno, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phoneno, message
      })
    });

    const data = await res.json();
    if (!data || res.status === 401) {
      alert("message not sent")
    } else {
      setUserdata({ ...userData, message: "" })

      alert("message sent successfully")

    }

  }

  return (

    <>

      <div class="material-bg heading-font  ">
        <div class="container padding-text padding-signup pb-3 ">
          <div className="row  ">
            <div className='col d-flex justify-content-center align-items-center '><span class="material-symbols-outlined">phone_iphone</span> +9154533-55345</div>
            <div className='col  d-flex justify-content-center align-items-center'><span class="material-symbols-outlined">mail</span> jiwan@gmail.com</div>
            <div className='col  d-flex justify-content-center align-items-center'><span class="material-symbols-outlined">location_on</span> Punjab</div>
          </div>
        </div>
      </div>
      {/* <!-- signup form --> */}
      <form method="POST">
        <div class="container sign-up-form  mt-5 sign-up-font ps-md-5 pe-md-5  ">
          <div class="row justify-content-center pt-5 pb-5 ">Get In Touch</div>
          <div class="row ">
            <div class="col-md mb-3 ps-md-5 pe-md-5"> <input type="text" class="form-control form-content-bg" value={userData.name} onChange={handleInputs} placeholder=" Your Name" name="name" /></div>
            <div class="col-md mb-3 pe-md-5"> <input type="email" class="form-control form-content-bg" value={userData.email} onChange={handleInputs} placeholder="Your Email" name="email" /></div>
          </div>
          <div class="row ">
            <div class="col-md mb-3  ps-md-5 pe-md-5"> <input type="number" class="form-control form-content-bg" value={userData.phoneno} onChange={handleInputs} placeholder=" Your Phone Number" name="phoneno" /></div>
            <div class="col-md mb-3 pe-md-5"></div>
          </div>
          <div class="row ">
            <div class="col-md mb-3  ps-md-5 pe-md-5">  <textarea class="form-control form-content-bg" id="exampleFormControlTextarea1" rows="3" onChange={handleInputs} value={userData.message} placeholder="message" name="message"></textarea></div>

          </div>




          <div class="row justify-content-center mb-5"><button class="btn  button-size" type="submit" onClick={contactForm}>Message</button></div>
        </div>
      </form>


    </>

  )
}

export default Contact