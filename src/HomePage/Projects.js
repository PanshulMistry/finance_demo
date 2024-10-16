import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Import OwlCarousel component
import 'owl.carousel/dist/assets/owl.carousel.css'; // Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Owl Carousel default theme CSS

export default function Projects() {
  // Define OwlCarousel options with dots disabled
  const options = {
    loop: true,
    margin: 10,
    nav: true,       // Navigation arrows enabled
    dots: false,     // Disable dots
    autoplay: true,
    autoplayTimeout: 5000, // Time interval between automatic slides (5 seconds)
    smartSpeed: 1200,
    navText: [
        '<i class="bx bx-chevron-left"></i>',
        '<i class="bx bx-chevron-right"></i>'
      ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section className="projects-area-three pt-100 pb-70">
      <div className="container-fluid">
        <div className="section-title three">
          <span className="sub-title">Latest Projects</span>
          <h2>We Have Completed Latest Projects</h2>
        </div>

        {/* OwlCarousel component with dots disabled */}
        <OwlCarousel className="projects-slider-three owl-theme" {...options}>
          <div className="projects-item-three">
            <div className="top">
              <a href="project-details.html">
                <img src="assets/img/projects/projects5.png" alt="Projects" />
              </a>
            </div>
            <div className="bottom">
              <h3>
                <a href="project-details.html">Financial Planning</a>
              </h3>
            </div>
          </div>

          <div className="projects-item-three">
            <div className="top">
              <a href="project-details.html">
                <img src="assets/img/projects/projects6.png" alt="Projects" />
              </a>
            </div>
            <div className="bottom">
              <h3>
                <a href="project-details.html">Cash Investment</a>
              </h3>
            </div>
          </div>

          <div className="projects-item-three">
            <div className="top">
              <a href="project-details.html">
                <img src="assets/img/projects/projects7.png" alt="Projects" />
              </a>
            </div>
            <div className="bottom">
              <h3>
                <a href="project-details.html">Business Growth Analysis</a>
              </h3>
            </div>
          </div>

          <div className="projects-item-three">
            <div className="top">
              <a href="project-details.html">
                <img src="assets/img/projects/projects5.png" alt="Projects" />
              </a>
            </div>
            <div className="bottom">
              <h3>
                <a href="project-details.html">Financial Planning</a>
              </h3>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}
