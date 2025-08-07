import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Download = () => {
    return (
        <div>
            <Header />
            <section id="about" className="about section">

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                    <div className="row align-items-center">
                      
                        <div className="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="about-conten py-4">

                                <h2><strong>Downloads</strong></h2>

                              <p><a class="btn-getstarted btn bg-primary" href="img/IJETT_TEMPLATE.doc"  target="_blank" data-discover="true">IJETT TEMPLATE.doc</a></p>
                              <p> <a class="btn-getstarted btn bg-primary" href="img/IJETT_COPYRIGHTFORM.pdf" target="_blank" data-discover="true">IJETT COPYRIGHTFORM.pdf</a></p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </div>
    )
}

export default Download