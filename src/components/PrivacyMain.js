import React from 'react';
import company from '@/config/company';

const PrivacyMain = () => {
  const { privacy } = company;
  return (
    <div className="contact-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="contact-page-inner bg-gray">
          <div className="section-title mb-4 pb-2">
            <h6 className="bg-none color-base mb-3">Legal Information</h6>
            <h2 className="title">Privacy Policy</h2>
            <p className="content mb-0">Last Updated: {privacy.updated}</p>
          </div>

          <p className="content">{privacy.intro}</p>

          {privacy.sections.map((s, i) => (
            <div className="mt-4" key={i}>
              <h4 className="mb-3">{s.title}</h4>
              {s.body && <p className="content">{s.body}</p>}
              {s.bullets && (
                <ul className="single-list-inner style-check style-heading mb-0">
                  {s.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
              {s.outro && <p className="content mt-3">{s.outro}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyMain;
