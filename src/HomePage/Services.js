import React, { useState } from 'react'
import financialPlan from '../icons/graph.png'
import cashInvest from '../icons/growth.png'
import consultingImg from '../icons/consulting.png'
import eduCostImg from '../icons/education-cost.png'
import loanImg from '../icons/loan.png'
import investmentImg from '../icons/investment1.png'

export default function Services() {
    const [activeTab, setActiveTab] = useState('pills-home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="provide-area pt-100 pb-70">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">Services</span>
                    <h2>Get Exceptional Finon Services For Growth</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus commodo</p>
                </div>
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'pills-home' ? 'active' : ''}`}
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            href="#pills-home"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected={activeTab === 'pills-home'}
                            onClick={() => handleTabClick('pills-home')}
                        >
                            <div className="provide-nav">
                                <img
                                    src={financialPlan}
                                    alt="Icon"
                                    style={{
                                        position: "relative",
                                        top: '0px',
                                        left: '0px',
                                        height: 44.67,
                                        width: 45,
                                        filter: activeTab === 'pills-home'
                                            ? 'invert(100%)' // Change to white
                                            : 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                                        marginBottom: 10
                                    }}
                                />
                                <h3>Financial Planning</h3>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'pills-profile' ? 'active' : ''}`}
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            href="#pills-profile"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected={activeTab === 'pills-profile'}
                            onClick={() => handleTabClick('pills-profile')}
                        >
                            <div className="provide-nav">
                                <img
                                    src={cashInvest}
                                    alt="Icon"
                                    style={{
                                        position: "relative",
                                        top: '0px',
                                        left: '0px',
                                        height: 44.67,
                                        width: 45,
                                        filter: activeTab === 'pills-profile'
                                            ? 'invert(100%)' // Change to white
                                            : 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                                        marginBottom: 10
                                    }}
                                />
                                <h3>Cash Investment</h3>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'pills-contact' ? 'active' : ''}`}
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            href="#pills-contact"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected={activeTab === 'pills-contact'}
                            onClick={() => handleTabClick('pills-contact')}
                        >
                            <div className="provide-nav">
                                <img
                                    src={consultingImg}
                                    alt="Icon"
                                    style={{
                                        position: "relative",
                                        top: '0px',
                                        left: '0px',
                                        height: 44.67,
                                        width: 45,
                                        filter: activeTab === 'pills-contact'
                                            ? 'invert(100%)' // Change to white
                                            : 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                                        marginBottom: 10
                                    }}
                                />
                                <h3>Consultancy</h3>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'pills-loans' ? 'active' : ''}`}
                            id="pills-loans-tab"
                            data-bs-toggle="pill"
                            href="#pills-loans"
                            role="tab"
                            aria-controls="pills-loans"
                            aria-selected={activeTab === 'pills-loans'}
                            onClick={() => handleTabClick('pills-loans')}
                        >
                            <div className="provide-nav">
                                <img
                                    src={eduCostImg}
                                    alt="Icon"
                                    style={{
                                        position: "relative",
                                        top: '0px',
                                        left: '0px',
                                        height: 44.67,
                                        width: 45,
                                        filter: activeTab === 'pills-loans'
                                            ? 'invert(100%)' // Change to white
                                            : 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                                        marginBottom: 10
                                    }}
                                />
                                <h3>Education Loans</h3>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'pills-house' ? 'active' : ''}`}
                            id="pills-house-tab"
                            data-bs-toggle="pill"
                            href="#pills-house"
                            role="tab"
                            aria-controls="pills-house"
                            aria-selected={activeTab === 'pills-house'}
                            onClick={() => handleTabClick('pills-house')}
                        >
                            <div className="provide-nav">
                                <img
                                    src={loanImg}
                                    alt="Icon"
                                    style={{
                                        position: "relative",
                                        top: '0px',
                                        left: '0px',
                                        height: 44.67,
                                        width: 45,
                                        filter: activeTab === 'pills-house'
                                            ? 'invert(100%)' // Change to white
                                            : 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                                        marginBottom: 10
                                    }}
                                />
                                <h3>House Loans</h3>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className={`nav-link ${activeTab === 'pills-invest' ? 'active' : ''}`}
                            id="pills-invest-tab"
                            data-bs-toggle="pill"
                            href="#pills-invest"
                            role="tab"
                            aria-controls="pills-invest"
                            aria-selected={activeTab === 'pills-invest'}
                            onClick={() => handleTabClick('pills-invest')}
                        >
                            <div className="provide-nav">
                                <img
                                    src={investmentImg}
                                    alt="Icon"
                                    style={{
                                        position: "relative",
                                        top: '0px',
                                        left: '0px',
                                        height: 44.67,
                                        width: 45,
                                        filter: activeTab === 'pills-invest'
                                            ? 'invert(100%)' // Change to white
                                            : 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                                        marginBottom: 10
                                    }}
                                />
                                <h3>Invest Planning</h3>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="provide-left">
                                    <h2>Financial Planning</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Cash Advanced</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Secured Loans</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Credit Facilities</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                    </ul>
                                    <a className="common-btn three" href="#">
                                        Learn More
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="provide-right">
                                    <img src="assets/img/provide-main.png" alt="Provide" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="provide-left">
                                    <h2>Cash Investment</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Cash Advanced</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Secured Loans</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Credit Facilities</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                    </ul>
                                    <a className="common-btn three" href="#">
                                        Learn More
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="provide-right">
                                    <img src="assets/img/provide-main.png" alt="Provide" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="provide-left">
                                    <h2>Consultancy</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Cash Advanced</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Secured Loans</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Credit Facilities</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                    </ul>
                                    <a className="common-btn three" href="#">
                                        Learn More
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="provide-right">
                                    <img src="assets/img/provide-main.png" alt="Provide" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-loans" role="tabpanel" aria-labelledby="pills-loans-tab">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="provide-left">
                                    <h2>Education Loans</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Cash Advanced</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Secured Loans</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Credit Facilities</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                    </ul>
                                    <a className="common-btn three" href="#">
                                        Learn More
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="provide-right">
                                    <img src="assets/img/provide-main.png" alt="Provide" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-house" role="tabpanel" aria-labelledby="pills-house-tab">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="provide-left">
                                    <h2>House Loans</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Cash Advanced</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Secured Loans</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Credit Facilities</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                    </ul>
                                    <a className="common-btn three" href="#">
                                        Learn More
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="provide-right">
                                    <img src="assets/img/provide-main.png" alt="Provide" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-invest" role="tabpanel" aria-labelledby="pills-invest-tab">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="provide-left">
                                    <h2>Invest Planning</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <ul>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Cash Advanced</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Secured Loans</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                        <li>
                                            <i className='bx bx-check'></i>
                                            <h3>Credit Facilities</h3>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                        </li>
                                    </ul>
                                    <a className="common-btn three" href="#">
                                        Learn More
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="provide-right">
                                    <img src="assets/img/provide-main.png" alt="Provide" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
