import React from 'react'

export default function Sidebar() {
  return (
    <div id="myModalRight" className="modal fade modal-right" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src="assets/img/logo-five.png" alt="Logo"/>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h2>About Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <div className="image-area">
                            <h2>Instagram</h2>
                            <div className="row">
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src="assets/img/instagram1.jpg" alt="Instagram"/>
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src="assets/img/instagram2.jpg" alt="Instagram"/>
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src="assets/img/instagram3.jpg" alt="Instagram"/>
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src="assets/img/instagram4.jpg" alt="Instagram"/>
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src="assets/img/instagram5.jpg" alt="Instagram"/>
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a href="#">
                                        <img src="assets/img/instagram6.jpg" alt="Instagram"/>
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="social-area">
                            <h3>Our Social Contact</h3>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin' ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className='bx bxl-instagram' ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
