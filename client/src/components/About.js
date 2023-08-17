import React, { useEffect, useState } from 'react'
import '../Registration.css'
import pic from '../images/Rectangle 16.png'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const [userData, setUserdata] = useState({});
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        credentials: "include"
      })
      const data = await res.json();
      //console.log(data)

      setUserdata(data)
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err)
      navigate('/login');
    }
  }
  useEffect(() => { callAboutPage() }, [])

  return (<>

    <div class="material-bg heading-font   ">
      <div class="container padding-text padding-signup pb-3 ">
        <div className="row  ">
          <div className='col d-flex justify-content-center align-items-center '><span class="material-symbols-outlined">Person</span> Profile</div>
        </div>
      </div>
    </div>

    <form method="GET">
      <div class="container sign-up-form  mt-5 sign-up-font ps-md-5 pe-md-5 ">
        <div className="row pt-5 pb-5">
          <div className="col-md-4 justify-content-center ">
            <img src={pic} alt="" class="img-fluid w-50" />
          </div>
          <div className="col-md-8 student-name justify-content-start " pt-5 pb-5>
            <div className="row float-end  pe-4"><button type="submit" class="btn btn-secondary btn-sm ">Edit Profile</button></div>
            <div className="row "> <p>{userData.name}</p></div>
            <div className="row ps-3"><p>  {userData.work} </p></div>
            <div className="row ps-3"><label >Ranking: <span>1/10</span></label></div> <br />
            <div className="row">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                  <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                </div>
              </nav> <br />
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <p> User ID: 54532422</p>
                  <p>Name:  {userData.name} </p>
                  <p>Email: {userData.email} </p>
                  <p>Phone no: {userData.phoneno}</p>
                  <p> Profession: {userData.work}</p>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <p>Experience: 2 years</p>
                  <p>Hourly rate: $1/hr</p>
                  <p>Total Project:24</p>
                  <p>Availability:2 Months</p>
                </div>

              </div>
            </div>
            <div className="row ">

            </div>
          </div>

        </div>

      </div>
    </form>
  </>

  )
}

export default About