import React, { useEffect, useState } from 'react'
import '../Home.css'
import img1 from '../images/asasas.png'
import img2 from '../images/science.jpg'
import img3 from '../images/mathematics.jpg'
import img4 from '../images/image 3.png'
import img5 from '../images/image 6.png'
import img6 from '../images/image 7.png'
import img7 from '../images/english.jpg'
import img8 from '../images/Ellipse 4.png'
import img9 from '../images/Ellipse 5.png'
import img10 from '../images/image 9.png'
import img11 from '../images/image 10.png'
import imgpdf from '../images/img-pdf.png'
import img13 from '../images/image 13.png'
import img14 from '../images/image 14.png'
import logo from '../images/logo.jpg'


const Home = () => {

  const [userName, setuserName] = useState();
  const [show, setshow] = useState(false);
  const homePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: { "Content-Type": "application/json" },

      })
      const data = await res.json();
      // console.log(data)

      setuserName(data.name)
      setshow(true)
      // console.log(userName)

    }
    catch (err) {
      console.log(err)

    }
  }
  useEffect(() => { homePage() }, [])


  return (
    <>


      <section >
        <div className="container pt-5">
          <div className="text-center  justify-content-center  pt-5">
            <h4 className="lessons  pt-5">{userName}</h4>
            <p className="lessons">{show ? "WELCOME BACK" : "WELCOME "} </p>
          </div>


        </div>
      </section>


      <div className=" container  container-fluid">
        <div className="row rowA  ">
          <div className="col-xl  ps-4">
            <div className="row content1 mt-4">Learn from home <br />with the best online tutors
            </div>
            <div className="row content1A pt-4"> Language learning on your schedule, with teachers you can trust.</div>
            <div className="row pt-4"><button type="button" className="btn btn-primary btn-sm button1">Try free lesson</button></div>
          </div>
          <div className="col-xl ">
            <img src={img1} className="  img-set-size   rounded mx-auto d-block    pt-5 mt-4 " alt="" />
          </div>
        </div>
      </div>



      {/* <!-- lessons Categories --> */}
      <section >
        <div className="container ">
          <div className="text-center  justify-content-center">
            <h4 className="lessons">Subjects</h4>
            <p className="lessons-para">Lorem ipsum dolor sit amet, consectetur. </p>
          </div>

          <div className="container row  pb-5 ">
            {/* <!-- lesson 1 --> */}
            <div className="col-md lessons-bg text-center me-md-5 ms-md-5 my-4 ">
              <img src={img2} className="img-fluid mt-4" alt="..." />
              <h5 className="title mt-4 mb-4">Science</h5>
            </div>
            {/* <!-- lesson 2 --> */}
            <div className="col-md lessons-bg text-center  me-md-5 ms-md-5 my-4">  <img src={img3} className="img-fluid mt-4" alt="..." />
              <h5 className="title  mt-4 mb-4">Mathematics</h5>
            </div>
            {/* <!-- lesson 3 --> */}
            <div className="col-md  lessons-bg text-center  me-md-5 ms-md-5 my-4 ">   <img src={img7} className="img-fluid mt-4" alt="..." />
              <h5 className="title  mt-4 mb-4">English</h5>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="resources mt-5">
          <div className="container">
            <h3 className="row justify-content-center pt-5 pb-5">
              Here's how it works
            </h3>
            <div className="row pb-5">
              {/* <!-- resource 1 --> */}
              <div className="col-md border border-white mb-md-4 text-center my-4 me-md-5 ms-md-5 resource-sm">
                <img src={img4} className="img-fluid mb-3 mt-1" alt="" />
                <h4 className="text-center">Find a Lesson </h4>
                <p className="text-center pb-3 ">Choose your lesson from the various category</p>
              </div>


              {/* <!-- resource 2 --> */}
              <div className="col-md  border border-white mb-md-4 text-center my-4 me-md-5 resource-sm">
                <img src={img5} className="img-fluid" alt="" />
                <h4 className="text-center"> Book a lesson</h4>
                <p className="test-center pb-3">Select a lesson time and add it to their calendar.</p>
              </div>


              {/* <!-- resource 3--> */}
              <div className="col-md  border border-white mb-md-4 text-center my-4 me-md-5 resource-sm">
                <img src={img6} className="img-fluid" alt="" />
                <h4 className="text-center"> Start learning</h4>
                <p className="test-center pb-3">Simple as that, you’re learning
                  a language.</p>
              </div>
            </div>

          </div>

        </div>

      </section>



      {/* <!-- student reviews --> */}
      <section>
        <div className="resources ">
          <div className="container justify-content-center pb-5 ">
            <div className="row  ">
              <p className="student-text text-center"> WHAT STUDENT SAYS </p>
              <p className="text-center std-text-margin ">OUR TESTIMONIALS</p>
            </div>
            <div className="row text-center mt-5 ">

              {/* <!-- carousel --> */}
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner mb-5">
                  <div className="carousel-item active">
                    <div className="row">
                      {/* <!-- review 1 --> */}
                      <div className="col-md bg-white me-md-4 mb-5">
                        <div className="container text-start ">
                          <div className="row mt-5 mb-5">
                            <div className="col-4">
                              <img src={img8} alt="..." />
                            </div>
                            <div className="col text-dark student-review-margin"><img src={img10} alt="" />
                              <p>“I think Educrat is the best theme I ever seen this year.
                                Amazing design, easy to customize and a design.”</p>
                              <p>Albert</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- review 2 --> */}
                      <div className="col-md bg-white me-md-4 mb-5">
                        <div className="container text-start ">
                          <div className="row mt-5 mb-5">
                            <div className="col-4">
                              <img src={img9} alt="..." />
                            </div>
                            <div className="col text-dark student-review-margin"><img src={img10} alt="" />
                              <p>“I think Educrat is the best theme I ever seen this year.
                                Amazing design, easy to customize and a design.”</p>
                              <p>Albert</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="carousel-item">
                    {/* <!-- part 2 --> */}
                    <div className="row">
                      {/* <!-- review 1 --> */}
                      <div className="col-md bg-white me-md-4 mb-5">
                        <div className="container text-start ">
                          <div className="row mt-5 mb-5">
                            <div className="col-4">
                              <img src={img8} alt="..." />
                            </div>
                            <div className="col text-dark student-review-margin"><img src={img10} alt="" />
                              <p>“I think Educrat is the best theme I ever seen this year.
                                Amazing design, easy to customize and a design.”</p>
                              <p>Albert</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- review 2 --> */}
                      <div className="col-md bg-white me-md-4 mb-5">
                        <div className="container text-start ">
                          <div className="row mt-5 mb-5">
                            <div className="col-4">
                              <img src={img9} alt="..." />
                            </div>
                            <div className="col text-dark student-review-margin"><img src={img10} alt="" />
                              <p>“I think Educrat is the best theme I ever seen this year.
                                Amazing design, easy to customize and a design.”</p>
                              <p>Albert</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="carousel-item">
                    {/* <!-- part 3 --> */}
                    <div className="row">
                      {/* <!-- review 1 --> */}
                      <div className="col-md bg-white me-md-4 mb-5">
                        <div className="container text-start ">
                          <div className="row mt-5 mb-5">
                            <div className="col-4">
                              <img src={img8} alt="..." />
                            </div>
                            <div className="col text-dark student-review-margin"><img src={img10} alt="" />
                              <p>“I think Educrat is the best theme I ever seen this year.
                                Amazing design, easy to customize and a design.”</p>
                              <p>Albert</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- review 2 --> */}
                      <div className="col-md bg-white me-md-4 mb-5">
                        <div className="container text-start ">
                          <div className="row mt-5 mb-5">
                            <div className="col-4">
                              <img src={img9} alt="..." />
                            </div>
                            <div className="col text-dark student-review-margin"><img src={img10} alt="" />
                              <p>“I think Educrat is the best theme I ever seen this year.
                                Amazing design, easy to customize and a design.”</p>
                              <p>Albert</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </section>


      {/* <!-- why you choose --> */}
      <section >

        <div className="container mt-5 ">
          <div className="row text-center">
            <p className="student-text choose-m">WHY YOU CHOOSE</p>
            <p className="std-text-margin text-sm">SAFE,EFECTIVE,AFFORDABLE. FOR LANGUAGE LEARNERS JUST LIKE YOU</p>
          </div>

          <div className="row text-center">
            {/* <!-- image --> */}
            <div className="col-md">
              <img src={img11} className="img-fluid " alt="" />
            </div>
            {/* <!-- reasons --> */}
            <div className="col-md">
              <div className="container">
                <div className="row reasons-margin ">
                  <div className="row reasons-bg-color pt-3  ms-1  reasons-text">Affordable lessons</div>
                  <div className="row mt-3 reasons-bg-color pt-3 ms-1 reasons-text">Convenience &amp; flexibility</div>
                  <div className="row mt-3 reasons-bg-color pt-3 ms-1 reasons-text">Learning that goes where you go</div>
                  <div className="row mt-3  pt-3  reasons-text ms-1">Start Learning Today !</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>



      {/* <!-- Download Free Templates for your Business needs */}
      {/* Professionally made documents & templates available at just a click!  */}
      <section >
        <div className="material-bg-image" >
          <div className="container mt-5">
            <div className="row text-center">
              <p className="student-text template-m ">DOWNLOAD FREE TEMPLATES FOR YOUR BUSINESS NEEDS</p>
              <p className="std-text-margin">PROFESSIONALLY MADE DOCUMENTS &amp; TEMPLATES AVAILABLE AT JUST A CLICK!</p>
            </div>


          </div>
        </div>
      </section>

      <section>
        <div className="material-bg-image-2 template-m2 ">
          <div >
            <div className="container">
              {/* <!-- MATERIALS --> */}
              <div className="row text-center ms-5 me-5 ">
                {/* <!-- MATERIALS 1 --> */}
                <div className="col-md-2 ms-md-5 my-5 bg-white material-width">
                  <img src={imgpdf} className="img-fluid mb-4 pt-4" alt="" />
                  <p className="student-name">PDF Files</p>

                </div>

                {/* <!-- MATERIALS 2 --> */}
                <div className="col-md-2 ms-md-5 my-5   bg-white material-width">
                  <img src={img13} className="img-fluid mb-4 pt-4" alt="" />
                  <p className="student-name">Images</p>

                </div>

                {/* <!-- MATERIALS 3 --> */}
                <div className="col-md-2  ms-md-5 me-md-5 my-5 bg-white material-width" >
                  <img src={img14} className="img-fluid mb-4 pt-4" alt="" />
                  <p className="student-name">PDF Files</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}
      <footer>

        <div className="container mt-5">
          <div className="row text-center justify-content-center  pb-5" >
            <img src={logo} className="logo1" alt="" />
            <p className="pt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been  </p>

            <p className="f-margin">the industry's standard dummy text ever since the 1500s, when an</p>


            <p>All Rights are Reserved. Design and Developed by: <b> Jiwandeep Singh </b></p>
          </div>


        </div>


      </footer>



    </>
  )
}

export default Home