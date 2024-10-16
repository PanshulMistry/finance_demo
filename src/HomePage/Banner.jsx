import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Banner() {
  // Define Owl Carousel options
  const options = {
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 7000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
		animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1,
        dots: false, // Hide dots on mobile devices (width 0-599px)
      },
      600: {
        items: 1,
        dots: true, // Show dots on larger devices (width 600px and above)
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <div className="banner-area-three">
      <div className="banner-shape">
        <img src="./assets/img/banner/banner-shape2.png" alt="Shape" />
      </div>
      <OwlCarousel className="banner-slider owl-theme" {...options}>
        <div className="banner-item">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-content">
                  <span>Your Financial Status Is Not in Good Hands</span>
                  <h1>Financial Assistance With True Purpose</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida. Risus commodo
                  </p>
                  <div className="banner-btn-area">
                    <a className="common-btn three" href="contact.html">
                      Contact Us
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="banner-slider-img">
                  <img src="./assets/img/banner/banner-main5.png" alt="Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-item">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-content">
                  <span>Your Financial Status Is Good Hands</span>
                  <h1>Your Financial Status Is Good Hands</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida. Risus commodo
                  </p>
                  <div className="banner-btn-area">
                    <a className="common-btn three" href="contact.html">
                      Contact Us
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="banner-slider-img">
                  <img src="./assets/img/banner/banner-main5.png" alt="Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
