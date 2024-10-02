import React from 'react'

export default function Counter() {
  return (
    <div className="counter-area three ptb-100">
            <div className="container">
                <div className="counter-wrap">
                    <div className="counter-shape">
                        <img src="assets/img/counter-shape3.png" alt="Shape"/>
                        <img src="assets/img/counter-shape4.png" alt="Shape"/>
                    </div>
                    <div className="row">

                        <div className="col-6 col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="flaticon-project-management"></i>
                                <h3>
                                    <span className="odometer" data-count="3569">00</span>
                                </h3>
                                <p>Projects Completed</p>
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="flaticon-like"></i>
                                <h3>
                                    <span className="odometer" data-count="4269">00</span>
                                </h3>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="flaticon-trophy"></i>
                                <h3>
                                    <span className="odometer" data-count="6421">00</span>
                                </h3>
                                <p>International Awards</p>
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-lg-3">
                            <div className="counter-item right-border">
                                <i className="flaticon-team"></i>
                                <h3>
                                    <span className="odometer" data-count="3351">00</span>
                                </h3>
                                <p>Team Members</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}
