import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <main className="main">


    <section id="courses-hero" className="courses-hero section light-background">

      <div className="hero-content">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="hero-text">
                <h1>IJETT, International Journal on Emerging Trends in Technology</h1>
                <p>Discover thousands of high-quality courses designed by industry professionals. Learn at your own pace, gain in-demand skills, and advance your career from anywhere in the world.</p>

                

                <div className="hero-buttons">
                  <a href="#courses" className="btn btn-primary black">Contact Us</a>
           
                </div>

               
              </div>
            </div>

            <div className="col-lg-6" >
              <div className="hero-image">
                <div className="main-image">
                  <img src="assets/img/education/courses-13.webp" alt="Online Learning" className="img-fluid"/>
                </div>

                <div className="floating-cards">
                  <div className="course-card" >
                    <div className="card-icon">
                      <i className="bi bi-code-slash"></i>
                    </div>
                    <div className="card-content">
                      <h6>Issues</h6>
                      <span>20+</span>
                    </div>
                  </div>

                  <div className="course-card" >
                    <div className="card-icon">
                      <i className="bi bi-palette"></i>
                    </div>
                    <div className="card-content">
                      <h6>Papers</h6>
                      <span>1000+</span>
                    </div>
                  </div>

                  <div className="course-card" >
                    <div className="card-icon">
                      <i className="bi bi-graph-up"></i>
                    </div>
                    <div className="card-content">
                      <h6>Journals</h6>
                      <span>500+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

    </section>



    


    <section id="cta" className="cta section py-5 ">

      <div className="container py-5 " >

        <div className="row align-items-center py-5 ">

          <div className="col-lg-8" >
            <div className="cta-content">
              <h2>About IJETT</h2>
              <p>The International Journal on Emerging Trends in Technology (IJETT), ISSN: 2455-0124 (ONLINE), 2350-0808 (PRINT), IF: 0.456 , is an International Peer-Reviewed, online journal published by Sandip Foundation for the enhancement of research in various disciplines of Engineering and Technology.The aim and scope of the journal is to provide an academic medium and an important reference for the advancement and dissemination of research results that support high-level learning, teaching and research in the fields of Engineering and Technology. IJETT bring together Scientists, Academician, Field of Engineering and Technology.</p>

              

             

            </div>
          </div>

          <div className="col-lg-4" >
            <div className="cta-image">
              <img src="img/homepageImage_en_US.png" alt="Online Learning Platform" className="img-fluid"/>
              
            </div>
          </div>

        </div>

      </div>

    </section>

  </main>
<Footer/>
    </div>
  )
}

export default Home
