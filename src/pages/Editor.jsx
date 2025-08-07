import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Editor = () => {
    return (
        <div>
            <Header />
            <section id="about" className="about section">

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="img/amol.png" alt="Founder Editor" className="img-fluid rounded-4 border" /><br/>
                            <h4 className='text-center mt-4'><strong>Prof. Amol D. Potgantwar</strong></h4>
                        </div>


                         <div className="col-lg-6" >
                            <img src="img/yadav.png" alt="Founder Editor" className="img-fluid rounded-4 border" /><br/>
                    
                             <h4 className='text-center mt-4'><strong>Dr. Chandrmani Yadav</strong></h4>
                        </div>
                        <div className="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="about-conten py-4">

                                <h2><strong>Editors</strong></h2>

                                <p>SF’s International Journal on Emerging Trends in Technology (IJETT).</p>

                                <p>We would like to warmly welcome all the authors, students, research scholars from the SF’s International Journal on Emerging Trends in Technology (IJETT) and to say how glad we are to have such a rich collection of works.</p>
                                <p>
                                   More than 100 papers were submitted for the journal, out of which only 20 papers were selected after peer reviewing by the reviewers drawn from the technical committee depending on the subject matter of the paper, on the basis of originality, significance and clarity for the purpose of the research. Hopefully, the selected papers will inspire the students, scholars and scientist for further interesting research work.                       The papers you will read during this Issue represent a careful selection of the current researches in theories and applications of Engineering and Technology.The success of this journal was possible only because due the enthusiasm and best efforts of many people, to whom we are very much grateful.
                                </p>
                                <p>We would like to thank all authors, students, researchers for their submissions and also the reviewers for their continued interest, energy and supports. </p>

                                <hr />
                               
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </div>
    )
}

export default Editor