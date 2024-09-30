import React from 'react';
// import bannerImage from './assets/img/banner/banner-main5.png'; // Import the banner image
// import bannerShape from './assets/img/banner/banner-shape2.png'; // Import the shape image

export default function Banner() {
  const script = document.createElement('script');
    script.src = './assets/js/owl.carousel.min.js'; // Or CDN link
    script.async = true;
    document.body.appendChild(script);
  return (
    
    <div className="banner-area-three">
      <div className="banner-shape">
        {/* Use imported image here */}
        <img src="./assets/img/banner/banner-shape2.png" alt="Shape" />
      </div>
      <div className="banner-slider owl-theme owl-carousel">

        <div className="banner-item">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-content">
                  <span>Your Financial Status Is Good Hands</span>
                  <h1>Financial Assistance With True Purpose</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus commodo</p>
                  <div className="banner-btn-area">
                    <a className="common-btn three" href="contact.html">
                      Contact Us
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="banner-slider-img">
                  {/* Use the imported banner image */}
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus commodo</p>
                  <div className="banner-btn-area">
                    <a className="common-btn three" href="contact.html">
                      Contact Us
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="banner-slider-img">
                  {/* Use the imported banner image here as well */}
                  <img src="./assets/img/banner/banner-main5.png" alt="Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
