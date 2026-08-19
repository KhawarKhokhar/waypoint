import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import company from '@/config/company';

const AboutArea = () => {
  const { about } = company;
  return (
    <div className="about-area pd-top-120 pd-bottom-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
              <img className="main-img m-md-4" src={about.img} alt="img" />
            </div>
          </div>
          <div className="col-lg-6 align-self-center" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
            <div className="section-title mt-5 mt-lg-0 mb-0 ps-lg-4">
              <h6 className="bg-none color-base mb-3">{about.eyebrow}</h6>
              <h2 className="title">{about.title}</h2>
              <p className="content mb-3">{about.text}</p>
              <p className="content mb-4">{about.mission}</p>
              <div className="row">
                <div className="col-md-3">
                  <img src={about.badge} alt="img" />
                </div>
                <div className="col-md-9 align-self-center">
                  <ul className="single-list-inner style-check style-heading style-check mb-3">
                    {about.points.map((p, i) => (
                      <li key={i}>
                        <FaCheckCircle /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-4 mb-4">
                <strong>{about.strong}</strong>
              </p>
              <Link className="btn btn-base mt-0 me-3" href="/contact">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
