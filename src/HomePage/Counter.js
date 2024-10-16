import React, { useEffect, useRef } from 'react';
import Odometer from 'odometer';
import projectComp from '../icons/project-management_1087927.png'
import likeImg from '../icons/like.png'
import trophyImg from '../icons/trophy.png'
import teamImg from '../icons/teams.png'

export default function Counter() {
  const projectsRef = useRef(null);
  const clientsRef = useRef(null);
  const awardsRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const projectOdometer = new Odometer({
      el: projectsRef.current,
      value: 0, // Start value
    });
    const clientsOdometer = new Odometer({
      el: clientsRef.current,
      value: 0,
    });
    const awardsOdometer = new Odometer({
      el: awardsRef.current,
      value: 0,
    });
    const teamOdometer = new Odometer({
      el: teamRef.current,
      value: 0,
    });

    // Update the values after mounting (you can delay it if needed)
    setTimeout(() => {
      projectOdometer.update(3569);
      clientsOdometer.update(4269);
      awardsOdometer.update(6421);
      teamOdometer.update(3351);
    }, 100); // Delay by 1 second for animation effect
  }, []);

  return (
    <div className="counter-area three ptb-100">
      <div className="container">
        <div className="counter-wrap">
          <div className="counter-shape">
            <img src="assets/img/counter-shape3.png" alt="Shape" />
            <img src="assets/img/counter-shape4.png" alt="Shape" />
          </div>
          <div className="row">
            <div className="col-6 col-sm-6 col-lg-3">
              <div className="counter-item">
                <img
                  src={projectComp}
                  alt="Icon"
                  style={{
                    position: "relative",
                    top: '0px',
                    left: '0px',
                    height: 54.67,
                    width: 55,
                    filter: 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                    marginBottom: 13
                  }}
                />
                <h3>
                  <span ref={projectsRef} className="odometer">0</span>
                </h3>
                <p>Projects Completed</p>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-lg-3">
              <div className="counter-item">
                <img
                  src={likeImg}
                  alt="Icon"
                  style={{
                    position: "relative",
                    top: '0px',
                    left: '0px',
                    height: 54.67,
                    width: 55,
                    filter: 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                    marginBottom: 13
                  }}
                />
                <h3>
                  <span ref={clientsRef} className="odometer">0</span>
                </h3>
                <p>Satisfied Clients</p>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-lg-3">
              <div className="counter-item">
                <img
                  src={trophyImg}
                  alt="Icon"
                  style={{
                    position: "relative",
                    top: '0px',
                    left: '0px',
                    height: 54.67,
                    width: 55,
                    filter: 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                    marginBottom: 13
                  }}
                />
                <h3>
                  <span ref={awardsRef} className="odometer">0</span>
                </h3>
                <p>International Awards</p>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-lg-3">
              <div className="counter-item right-border">
                <img
                  src={teamImg}
                  alt="Icon"
                  style={{
                    position: "relative",
                    top: '0px',
                    left: '0px',
                    height: 54.67,
                    width: 55,
                    filter: 'invert(33%) sepia(99%) saturate(4590%) hue-rotate(226deg) brightness(103%) contrast(98%)',
                    marginBottom: 13
                  }}
                />
                <h3>
                  <span ref={teamRef} className="odometer">0</span>
                </h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
