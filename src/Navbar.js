import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar-area sticky-top">
            {/* <!-- Menu For Mobile Device --> */}
            <div className="mobile-nav">
                <a href="index.html" className="logo">
                    <img src="assets/img/logo-six.png" alt="Logo"/>
                </a>
            </div>

            {/* <!-- Menu For Desktop Device --> */}
            <div className="main-nav three">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/img/logo-five.png" alt="Logo"/>
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle active">Home <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Home Demo One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-2.html" className="nav-link">Home Demo Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-3.html" className="nav-link active">Home Demo Three</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Pages <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link dropdown-toggle">Users <i className="bx bx-chevron-down"></i></a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="sign-in.html" className="nav-link">Sign In</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="sign-up.html" className="nav-link">Sign Up</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="loan.html" className="nav-link">Loan</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="apply.html" className="nav-link">Apply Now</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="testimonials.html" className="nav-link">Testimonials</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="team.html" className="nav-link">Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="faq.html" className="nav-link">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="404.html" className="nav-link">404 Error Page</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="terms-conditions.html" className="nav-link">Terms & Conditions</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="about.html" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Services <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="services.html" className="nav-link">Services Style One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="services-2.html" className="nav-link">Services Style Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="service-details.html" className="nav-link">Service Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Projects <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="projects.html" className="nav-link">Projects Style One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="projects-2.html" className="nav-link">Projects Style Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="project-details.html" className="nav-link">Project Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Blog <i className="bx bx-chevron-down"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="blog.html" className="nav-link">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog-details.html" className="nav-link">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="contact.html" className="nav-link">Contact</a>
                                </li>
                            </ul>
                            <div className="side-nav">
                                <div className="language">
                                    <select>
                                        <option>English</option>
                                        <option>العربيّة</option>
                                        <option>Deutsch</option>
                                        <option>Português</option>
                                    </select>
                                </div>
                                <div className="navbar-form">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search"/>
                                        <button type="submit" className="btn">
                                            <i className='bx bx-search-alt'></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="navbar-modal-btn">
                                    <button type="button" className="btn modal-btn" data-bs-toggle="modal" data-bs-target="#myModalRight">
                                        <i className='bx bx-menu-alt-right'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
  )
}
