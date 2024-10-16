import React from 'react'
import '../icons/fonts-flaticon.css';
import barImg from '../icons/bar-chart.png';
import consultingImg from '../icons/consulting.png';
//Complete
//Complete
export default function About() {
    return (
        <div className="about-area-two three pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="assets/img/about/about5.png" alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title three">
                                <span className="sub-title">About Company</span>
                                <h2>We Help Our Clients To Achieve Their Desire Goals</h2>
                            </div>
                            <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra </p>
                            <ul>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px', marginLeft: '-90px' }}>
                                    <img
                                        src={barImg}
                                        alt="Icon"
                                        style={{
                                            position: "absolute",
                                            top: '0px', // Adjust the top position as needed
                                            left: '82px', // Move slightly to the left of the circle
                                            height: 49.67,
                                            width: 50,
                                            filter: 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'inline-block',
                                            height: 60,
                                            width: 60,
                                            minWidth: 60,
                                            backgroundColor: '#CCDAFE',
                                            borderRadius: '50%',
                                            marginRight: 30,

                                        }}
                                    ></span>
                                    <div>
                                        <h3>Support On Raising Funds</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                        </p>
                                    </div>
                                </li>

                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px', marginLeft: "-90px" }}>
                                    <img
                                        src={consultingImg}
                                        alt="Icon"
                                        style={{
                                            position: "absolute",
                                            top: '3px', // Adjust the top position as needed
                                            left: '83px', // Move slightly to the left of the circle
                                            height: 47.67,
                                            width: 50,
                                            filter: 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                                        }}
                                    />
                                    <span
                                        style={{
                                            display: 'inline-block',
                                            height: 60,
                                            width: 60,
                                            minWidth: 60, // Ensures it doesn't shrink
                                            backgroundColor: '#CCDAFE',
                                            borderRadius: '50%',
                                            marginRight: 30
                                        }}
                                    ></span>
                                    <div>
                                        <h3>Outsourced Consult Business</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <a className="common-btn three" href="about.html">
                                Read More
                                <span></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
