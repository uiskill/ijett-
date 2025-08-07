import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const EditorCheif = () => {
    return (
        <div>
            <Header />
            <section id="about" className="about section">

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                    <div className="row align-items-center">
                        <div className="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <img src="img/milind.png" alt="Founder Editor" className="img-fluid rounded-4" />
                        </div>
                        <div className="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="about-conten py-4">

                                <h2><strong>Editor in Chief</strong></h2>

                                <p>We would like to thank you for submitting the research papers in SF’s International Journal on Emerging Trends in Technology (IJETT), ISSN: 2455 - 0124 (Online), 2350 - 0808 (Print), is Peer - Reviewed, Open access International Journals.</p>

                                <p>IJETT is approved by National Science Library (NSL), National Institute of Science Communication and Information Resources (NISCAIR), Council of Scientific and Industrial Research, New Delhi, India.</p>
                                <p>
                                    We hope you found many opportunities to expand your knowledge in area of Engineering and technology. It is gratifying to know that we had far more requests for publication for this journal than could be accommodated in the agenda. We thank the technical committee for their hard work in selecting the best papers.
                                </p>
                                <p>As Editor in chief I would like to express my appreciation to all the editorial committee members’ hard work.   We believe that you enjoy these proceedings and use them to move forward to promote the new technological advancements in the area of Engineering and Technology, as we have to move for the next generation technology arena thought the world. </p>

                                <hr />
                                <p className="text-right">    <strong> Prof. (Dr) Milind M. Patil,<br />
                                    Editor in Chief SF’s IJETT</strong>  </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </div>
    )
}

export default EditorCheif