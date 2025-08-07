import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const FounderEditors = () => {
  return (
    <div>
      <Header />
      <section id="about" className="about section">

        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          <div className="row align-items-center">
            <div className="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <img src="img/chairman-sir1.jpg" alt="Founder Editor" className="img-fluid rounded-4" />
            </div>
            <div className="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="about-conten py-4">

                <h2><strong>Founder Editor</strong></h2>
                <p className='text-justify'>Sandip Foundation is Promoting & Publishing, the International Journal on Emerging Trends in Technology (IJETT), ISSN: 2455-0124 (ONLINE), 2350-0808 (PRINT), IF: 0.456 is Peer - Reviewed, Open access International Journals. The aim and scope of the journal is to provide an important reference for the advancement and dissemination of research results that support high - level learning, teaching and research in the fields of Engineering and Technology.</p>

                <p className='text-justify'>IJETT has solicited & gathered technical research submission related to all aspects of research. We hope that the outcomes of this journal shall come in form of some good recommendations which may not only benefits the current engineering practices but may also guide the academia, industry & researchers for a long period to serve the mankind.</p>


                <p className='text-justify' >We are also grateful to all those who have contributed to the success of IJETT September 2014, Volume 1, Issue 1, Finally, we would like to wish you success in your technical & research life.</p>

<hr/>
<p className="text-right">    <strong> Dr. Sandip N. Jha,<br/>
Founder Editor SF’s IJETT</strong>  </p>
              </div>
            </div>
          </div>

        </div>

      </section>
      <Footer />
    </div>
  )
}

export default FounderEditors