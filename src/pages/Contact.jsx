import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <section id="about" className="about section">
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
       

            <div className="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="about-conten py-4">
                <h2><strong>Sandip Foundation's</strong></h2>
                  <div class="container">

        <h2><strong>International Journal on Emerging Trends in Technology (IJETT)</strong></h2>

        <p><strong>ISSN:</strong> 2455-0124 (Online), 2350-0808 (Print)</p>
        <p><strong>Impact Factor:</strong> 0.456</p>
        <p><strong>Website:</strong> <a href="http://www.ijett.in" target="_blank">www.ijett.in</a></p>
        <p><strong>Publication Charges:</strong> None (No Publication Charges)</p>
<hr/>

<div className='flex row'>
       <div class="contact-block card p-4 col-sm-6">
            <h3><strong>Postal Address:</strong></h3>
            <p>
                Sandip Foundation’s<br/>
                International Journal on Emerging Trends in Technology (IJETT)<br/>
                Mahiravani, Trambak Road,<br/>
                Nasik – 422213,<br/>
                Maharashtra, India.
            </p>
            <p><strong>Website:</strong> <a href="http://www.sandipfoundation.org" target="_blank">www.sandipfoundation.org</a></p>
            <p><strong>Toll Free No:</strong> 1800 233 2714</p>
            <p><strong>Phone:</strong> (02594) 222551, 222552, 222553, 222554</p>
            <p><strong>Fax:</strong> (02594) 222555</p>
        </div>
            <div class="contact-block card p-4 col-sm-6">
            <h3><strong>Contact IJETT:</strong></h3>
            <p><strong>Prof. Dr. Omkar S. Vaidy</strong><br/>
            Editorial Support Team<br/>
            Email: <a href="mailto:editor.ijett@sandipfoundation.org">editor.ijett@sandipfoundation.org</a><br/>
            Phone: +91-9403163046</p>
        </div>

     </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
