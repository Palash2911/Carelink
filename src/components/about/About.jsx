import React from 'react'
import aboutImg from '../../assets/images/about_us_img.jpg';
import './about.css';

const About = () => {
    return (

        <>

            <section id='AboutUs'>
                <div className='row about-sec container-fluid'>
                    <div className="col-lg-6 col-md-12 ">
                        <div className="about-details">
                            <h1>About us</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quo velit earum natus error eos, accusantium iste molestias illo totam facere expedita aspernatur voluptates tempora? Natus, est inventore. Quos, aut possimus? Quia animi deserunt ab.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="aboutImg">
                            <img src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default About
