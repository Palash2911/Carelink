import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import aboutImg1 from '../../assets/images/about_us_img.jpg';
import aboutImg2 from '../../assets/images/about_us_img.jpg';
import aboutImg3 from '../../assets/images/about_us_img.jpg';
import aboutImg4 from '../../assets/images/about_us_img.jpg';
import aboutImg5 from '../../assets/images/about_us_img.jpg';
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
                            <img src={aboutImg1} alt="Slide 1" />
                        </div>
                        <div className="aboutImg">
                            <img src={aboutImg2} alt="Slide 2" />
                        </div>
                        <div className="aboutImg">
                            <img src={aboutImg3} alt="Slide 3" />
                        </div>
                        <div className="aboutImg">
                            <img src={aboutImg4} alt="Slide 4" />
                        </div>
                        <div className="aboutImg">
                            <img src={aboutImg5} alt="Slide 5" />
                        </div>
                    </Carousel>

                </div>
            </div>
        </section>
    );
}

export default About;
