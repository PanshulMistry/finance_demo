import React from 'react'
// import './icons/owl.theme.default.min.css'
// import './icons/responsive.css'
// import './icons/responsive.scss'
// import './icons/style.css'
// import './icons/.style.scss'
;export default function Features() {
  return (
    <section className="features-area pt-100 pb-70">
            <div className="features-shape">
                <img src="assets/img/projects/project-shape4.png" alt="Shape"/>
            </div>
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">Core Features</span>
                    <h2>Why You Choose Our Company</h2>
                </div>
                <div className="row align-items-center">
                    
                    <div className="col-lg-6">
                        <div className="features-img">
                            <img src="assets/img/features-main.png" alt="Features"/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-sm-6 col-lg-6">
                                <div className="projects-item-two">
                                    <img src="assets/img/projects/project-shape3.png" alt="Shape"/>
                                    <i className="flaticon-goal icon"></i>
                                    <h3>
                                        <a href="project-details.html">Fast Executions</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                                    <a className="projects-btn" href="project-details.html">
                                        Read More
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="projects-item-two bottom-gap-top">
                                    <img src="assets/img/projects/project-shape3.png" alt="Shape"/>
                                    <i className="flaticon-support icon"></i>
                                    <h3>
                                        <a href="project-details.html">Guide & Support</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                                    <a className="projects-btn" href="project-details.html">
                                        Read More
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="projects-item-two bottom-gap-bottom">
                                    <img src="assets/img/projects/project-shape3.png" alt="Shape"/>
                                    <i className="flaticon-investment-insurance icon"></i>
                                    <h3>
                                        <a href="project-details.html">Financial Secure</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                                    <a className="projects-btn" href="project-details.html">
                                        Read More
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </div>
                            </div>
        
                            <div className="col-sm-6 col-lg-6">
                                <div className="projects-item-two">
                                    <img src="assets/img/projects/project-shape3.png" alt="Shape"/>
                                    <i className="flaticon-refinancing icon"></i>
                                    <h3>
                                        <a href="project-details.html">Refinancing</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor facilisis.</p>
                                    <a className="projects-btn" href="project-details.html">
                                        Read More
                                        <i className='bx bx-right-arrow-alt'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}
