import React from 'react';
import company from '@/config/company';

const TermsMain = () => {
  return (
    <div className="contact-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="contact-page-inner bg-gray">
          <div className="section-title mb-4 pb-2">
            <h6 className="bg-none color-base mb-3">Legal Information</h6>
            <h2 className="title">Terms & Conditions</h2>
            <p className="content mb-0">Last Updated: December 1, 2025</p>
          </div>

          <div className="mt-4">
            <h4 className="mb-3">
              Waypoint Assets Realty SMS Terms & Conditions
            </h4>

            <p className="content">
              By providing your mobile phone number and opting in to receive SMS
              messages from Waypoint Assets Realty, you agree to receive
              conversational text messages regarding your real estate inquiries,
              property offers, appointment scheduling, transaction updates, and
              responses to your questions.
            </p>

            <p className="content">
              <strong>Message Frequency:</strong> Message frequency varies.
            </p>

            <p className="content">
              <strong>Message and Data Rates:</strong> Message and data rates may
              apply.
            </p>

            <p className="content">
              <strong>Opt-Out:</strong> Reply STOP at any time to unsubscribe.
            </p>

            <p className="content">
              <strong>Help:</strong> Reply HELP for assistance or contact us at{' '}
              <a href="mailto:info@waypointassets.com">
                info@waypointassets.com
              </a>
              .
            </p>

            <p className="content">
              Your consent to receive SMS messages is not a condition of
              purchasing or selling property.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="mb-3">Contact Information</h4>

            <p className="content mb-2">
              <strong>Waypoint Assets Realty</strong>
            </p>

            <p className="content mb-2">
              <strong>Phone:</strong>{' '}
              <a href="tel:+12148965370">(214) 896-5370</a>
            </p>

            <p className="content mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@waypointassets.com">
                info@waypointassets.com
              </a>
            </p>

            <p className="content mb-2">
              <strong>Website:</strong>{' '}
              <a
                href="https://waypointassetsrealty.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                waypointassetsrealty.com
              </a>
            </p>

            <p className="content mb-0">
              <strong>Address:</strong> 30 N Gould St Ste R, Sheridan, WY 82801
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsMain;