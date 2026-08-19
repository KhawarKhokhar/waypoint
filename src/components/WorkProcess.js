import React from 'react';
import company from '@/config/company';

const WorkProcess = () => {
  const { process } = company;
  return (
    <div className="work-process-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="section-title text-center pb-5">
          <h6 className="color-base mb-3 bg-none">{process.eyebrow}</h6>
          <h2 className="title">{process.title}</h2>
        </div>
        <div className="row">
          {process.steps.map((step, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="single-work-process-inner-4 text-center">
                <h5>{step.title}</h5>
                <div className="thumb">
                  <img src={step.icon} alt="img" />
                </div>
                <span className="count">{`0${i + 1}`}</span>
                <p className="wp-step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
