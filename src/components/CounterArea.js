import React from 'react';
import company from '@/config/company';

const CounterArea = () => {
  return (
    <div
      className="counter-area bg-relative bg-cover pd-top-110 pd-bottom-100"
      style={{ backgroundImage: 'url("assets/img/counter-bg.svg")' }}
    >
      <div className="container pd-bottom-90">
        <div className="row">
          {company.stats.map((s, i) => (
            <div
              className="col-lg-3 col-md-6 wow animated fadeInUp"
              data-aos="fade-up"
              data-aos-delay={`${(i + 1) * 100}`}
              data-aos-duration="1500"
              key={i}
            >
              <div className="single-counter-inner text-center">
                <div className="thumb">
                  <img src={s.icon} alt="img" />
                </div>
                <h2 className="text-white mt-4 mb-2">
                  <span className="counter">{s.value}</span>
                  {s.suffix}
                </h2>
                <p className="text-white">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
