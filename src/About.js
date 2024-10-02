import React from 'react'
import './icons/fonts-flaticon.css';
//Complete
export default function About() {
  return (
    <div className="about-area-two three pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="assets/img/about/about5.png" alt="About"/>
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
                                <li>
                                    <i className="flaticon-bar-chart"></i>
                                    <h3>Support On Raising Funds</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo </p>
                                </li>
                                <li>
                                    <i className="flaticon-consulting"></i>
                                    <h3>Outsourced Consult Business</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo </p>
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
