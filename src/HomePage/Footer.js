import React from 'react'

export default function Footer() {
  return (
    <footer class="footer-area three pt-100 pb-70">
            <div class="container">
                <div class="row">
                    
                    <div class="col-sm-6 col-lg-4">
                        <div class="footer-item">
                            <div class="footer-logo">
                                <a class="logo" href="index.html">
                                    <img src="assets/img/logo-six.png" alt="Logo"/>
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                <ul>
                                    <li>
                                        <i class='bx bx-phone-call'></i>
                                        <span>Phone:</span>
                                        <a href="tel:882569756">882-569-756</a>
                                    </li>
                                    <li>
                                        <i class='bx bx-mail-send'></i>
                                        <span>Email:</span>
                                        <a href="/cdn-cgi/l/email-protection#dab2bfb6b6b59abcb3b4b5b4f4b9b5b7"><span class="__cf_email__" data-cfemail="4a222f2626250a2c2324252464292527">[email&#160;protected]</span></a>
                                    </li>
                                    <li>
                                        <i class='bx bx-current-location'></i>
                                        <span>Address:</span>
                                        <a href="#">4578 Marmora Road, UK</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-2">
                        <div class="footer-item">
                            <div class="footer-links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="projects.html">Projects</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <div class="col-sm-6 col-lg-3">
                        <div class="footer-item">
                            <h3>Newsletter</h3>
                            <div class="footer-newsletter">
                                <p>Accusamus et iusto odio quas molestias except.</p>
                                <form class="newsletter-form" data-toggle="validator">
                                    <input type="email" class="form-control" placeholder="Enter email address" name="EMAIL" required autocomplete="off"/>
            
                                    <button class="btn common-btn" type="submit">
                                        Subscribe
                                        <span></span>
                                    </button>
                                    <div id="validator-newsletter" class="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div> */}

                    <div class="col-sm-6 col-lg-3">
                        <div class="footer-item">
                            <div class="footer-links">
                                <h3>What We Do</h3>
                                <ul>
                                    <li>
                                        <a href="about.html">Financial Advice</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Planning Strategies</a>
                                    </li>
                                    <li>
                                        <a href="projects.html">Investment Trending</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Wealth Commitment</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Our Services</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">States Element</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
  )
}
