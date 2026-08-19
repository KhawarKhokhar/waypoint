import Link from 'next/link';
import React from 'react';
import company from '@/config/company';

const ServiceArea = () => {
  const { services } = company;
  return (
    <div
      className="service-area bg-cover pd-top-120 pd-bottom-90"
      style={{ backgroundImage: 'url("assets/img/service-bg.svg")' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h6 className="bg-none color-base mb-3">{services.eyebrow}</h6>
              <h2 className="title">{services.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.items.map((s, i) => (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <div className="wp-service-card h-100">
                <div className="wp-img">
                  <img src={s.photo} alt={s.title} loading="lazy" />
                  <span className="wp-badge">
                    <img src={s.icon} alt="" />
                  </span>
                </div>
                <div className="wp-body">
                  <h5>
                    <Link href="/services">{s.title}</Link>
                  </h5>
                  <p className="mb-0">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
