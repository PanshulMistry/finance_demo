import React from 'react'

export default function Header() {
  return (
    <div className="header-area three">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="left">
                            <ul>
                                <li>
                                    <i className='bx bx-location-plus'></i>
                                    <a href="#">
                                        504 White St . Dawsonville, New York
                                    </a>    
                                </li>
                                <li>
                                    <i className='bx bx-mail-send'></i>
                                    <a href="mailto:hello@finon.com">hello@finon.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="right">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.pinterest.com/" target="_blank">
                                        <i className='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        // <!-- End Header -->
  )
}
