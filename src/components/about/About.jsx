import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import kerafly from '../../assets/images/kerafly.jpg'
import emocare from '../../assets/images/Emocare.jpg'
import minocare from '../../assets/images/minocare.jpg'
import rediban from '../../assets/images/rediiban.jpg'
import renewme from '../../assets/images/renewme.png'
import ktablet from '../../assets/images/kerafly_tablet.jpg'
import vclink from '../../assets/images/VC_link.png'
import './about.css';

const About = () => {
    return (
        <section id='AboutUs'>
            <div className='row about-sec container-fluid'>
                <div className="col-lg-6 col-md-12">
                    <div className="about-details">
                        <h1>About us</h1>
                        <p>Carelink Pharma, led by dynamic young entrepreneurs, brings fresh energy to the pharmaceutical sector. With deep industry knowledge, technical prowess, and a commitment to quality, we aim to elevate healthcare standards. Collaborating with top-tier manufacturers known for their expertise and facilities, Carelink Pharma ensures precision and adherence to global quality standards. Driven by innovation, Carelink Pharma strives to make a positive impact by delivering forward-thinking pharmaceutical solutions that meet patient and healthcare professional expectations worldwide.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                        <div className="aboutImg">
                            <img src={kerafly} alt="Slide 1" />
                        </div>
                        <div className="aboutImg">
                            <img src={emocare} alt="Slide 2" />
                        </div>
                        <div className="aboutImg">
                            <img src={minocare} alt="Slide 3" />
                        </div>
                        <div className="aboutImg">
                            <img src={rediban} alt="Slide 4" />
                        </div>
                        <div className="aboutImg">
                            <img src={renewme} alt="Slide 5" />
                        </div>
                        <div className="aboutImg">
                            <img src={ktablet} alt="Slide 6" />
                        </div>
                        <div className="aboutImg">
                            <img src={vclink} alt="Slide 7" />
                        </div>
                    </Carousel>

                </div>
            </div>
        </section>
    );
}

export default About;
