import React, { useEffect } from 'react';
// import 'nice-select2/dist/css/nice-select2.css'; // Import Nice Select2 CSS
// import niceSelect from 'nice-select2'; // Import Nice Select2 JS

export default function GetInTouch() {
  useEffect(() => {
    // Initialize Nice Select2
    const $ = window.$; // Ensure jQuery is available
    $('select').niceSelect(); // Apply Nice Select2 to all select elements

    // Cleanup function to destroy the plugin on component unmount
    return () => {
      $('select').niceSelect('destroy');
    };
  }, []);

  return (
    <section className="touch-area three">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 p-0">
            <div className="touch-content ptb-100">
              <div className="touch-shape">
                <img src="assets/img/touch-shape3.png" alt="Shape" />
                <img src="assets/img/touch-shape4.png" alt="Shape" />
              </div>
              <div className="touch-wrap">
                <div className="section-title three">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Request A Call-Back</h2>
                </div>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select>
                          <option>Terms of Use</option>
                          <option>Some option</option>
                          <option>Another option</option>
                          <option>Potato</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea id="your-message" className="form-control" rows="6" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn common-btn">
                        Send Message
                        <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="touch-img">
              <img src="assets/img/touch-main2.png" alt="Touch" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
