import React from 'react'
import OwlCarousel from 'react-owl-carousel'; // Import OwlCarousel component
import 'owl.carousel/dist/assets/owl.carousel.css'; // Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Owl Carousel default theme CSS

export default function Testimonials() {
    const options = {
        loop: true,
        margin: 10,
        nav: true,       // Navigation arrows enabled
        dots: false,     // Disable dots
        autoplay: true,
        autoplayTimeout: 5000, // Time interval between automatic slides (5 seconds)
        smartSpeed: 1200,
        navText: [
            '<i class="bx bx-left-arrow-alt"></i>',
            '<i class="bx bx-right-arrow-alt"></i>'
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
        <section className="testimonials-area-three pt-100 pb-70">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">Testimonials</span>
                    <h2>What Our Client's Say</h2>
                </div>
                <OwlCarousel className="testimonials-slider-three owl-theme" {...options}>
                    <div className="testimonials-item">
                        <div className="top">
                            <i className='bx bxs-quote-alt-left bx-flip-horizontal'></i>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacufacilisis opposed to using.</h2>
                        </div>
                        <div className="bottom">
                            <img src="assets/img/testimonials-thumb4.jpg" alt="Testimonials" />
                            <h3>Aliza Trupa</h3>
                            <span>CEO of Finance & Banking</span>
                        </div>
                    </div>

                    <div className="testimonials-item" >
                        <div className="top" >
                            <i className='bx bxs-quote-alt-left bx-flip-horizontal'></i>
                            <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</h2>
                        </div>
                        <div className="bottom">
                            <img src="assets/img/testimonials-thumb5.jpg" alt="Testimonials" />
                            <h3>Zerad Kahf</h3>
                            <span>Investment</span>
                        </div>
                    </div>

                    <div className="testimonials-item">
                        <div className="top" style={{height:250}}>
                            <i className='bx bxs-quote-alt-left bx-flip-horizontal'></i>
                            <h2>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</h2>
                        </div>
                        <div className="bottom">
                            <img src="assets/img/testimonials-thumb6.jpg" alt="Testimonials" />
                            <h3>Jackob Zami</h3>
                            <span>Consultant</span>
                        </div>
                    </div>

                    <div className="testimonials-item">
                        <div className="top">
                            <i className='bx bxs-quote-alt-left bx-flip-horizontal'></i>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacufacilisis.</h2>
                        </div>
                        <div className="bottom">
                            <img src="assets/img/testimonials-thumb3.jpg" alt="Testimonials" />
                            <h3>Tom Henry</h3>
                            <span>Engineer</span>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}
