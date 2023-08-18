import React from 'react'
import image from '../../assets/images/title-img.jpg';
import one from '../../assets/images/one.png';
import two from '../../assets/images/two.png';
import three from '../../assets/images/three.png';
import four from '../../assets/images/four.png';
import blankImg from '../../assets/images/blank1.png';

import './vision.css';

const Vision = () => {
    return (
        <>
            <section id="Vision">
                <div className='row container-fluid'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='image'>
                            <img className='title-image' src={image} alt="" />
                            <img className='blank-img' src={blankImg} alt="" />
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='description'>
                            <h1>Vision</h1>
                            <p>Transforming dermatological care through innovation and improving lives with exceptional skincare solutions</p>
                            <h1 className='mission_head'>Mission</h1>
                            <ul className='mission_list'>
                                <li className='mission'>Unleash the power of healthy skin through innovative skincare solutions.</li>
                                <li className='mission'>Revolutionize dermatology care with groundbreaking approaches and technologies</li>
                                <li className='mission'>Enhance lives by providing effective, reliable solutions for skin conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Teams">
                <h1 className='feature-head'>Unified Healthcare With Human Centric Approach</h1>
                <div className="row container-fluid">
                    <div className="col-lg-3 col-md-3 col-sm-6 features">
                        <div className="icon_div">
                            <img src={one} alt="" />
                        </div>
                        <h3>Team</h3>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 features">
                        <div className="icon_div">
                            <img src={two} alt="" />
                        </div>
                        <h3>Mentors</h3>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 features">
                        <div className="icon_div">
                            <img src={three} alt="" />
                        </div>
                        <h3>Mission</h3>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 features">
                        <div className="icon_div">
                            <img src={four} alt="" />
                        </div>
                        <h3>Company usp</h3>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Vision
