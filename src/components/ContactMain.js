"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import company from "@/config/company";

const ContactMain = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formType: "Contact Page",
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      marketingConsent: formData.get("marketing_consent") === "Agreed",
    };

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      toast.success("Message submitted successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Message not submitted. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="contact-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="contact-page-inner bg-gray">
            <div className="section-title mb-4 pb-2">
              <h2 className="title">{company.contactPage.title}</h2>
              <p className="content mb-0">{company.contactPage.text}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      name="user_name"
                      type="text"
                      placeholder="Enter Your Name."
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      name="user_email"
                      type="email"
                      placeholder="Enter Your Email."
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      name="subject"
                      type="text"
                      placeholder="Enter Your Subject."
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="single-input-inner">
                    <textarea
                      name="message"
                      cols="1"
                      rows="5"
                      placeholder="Enter Your Message ..."
                      required
                    />
                  </div>
                </div>

                <div className="col-12 mb-4">
                  <div
                    className="consent-checkbox"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="marketing_consent_contact"
                      name="marketing_consent"
                      value="Agreed"
                      required
                      style={{
                        width: "18px",
                        height: "18px",
                        marginTop: "5px",
                        flexShrink: 0,
                      }}
                    />

                    <label
                      htmlFor="marketing_consent_contact"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                        cursor: "pointer",
                      }}
                    >
                      By clicking &quot;Submit&quot; I agree to receive emails,
                      GENERAL COMMUNICATIONS &amp; MARKETING text messages, and
                      phone calls from Waypoint Assests Realty. I also agree to the{" "}
                      <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          color: "#246bfd",
                          textDecoration: "underline",
                        }}
                      >
                        Privacy Policy
                      </a>
                      . Reply STOP for STOP and HELP for help for more information.
                      Message &amp; data rates may apply. Message frequency varies.
                    </label>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-base border-radius-5"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-page-list">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <FaPhoneAlt size={30} className="color-base" />
                </div>
                <div className="media-body">
                  <h5>Contact Us</h5>
                  <h6>{company.phone}</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <FaEnvelope size={30} className="color-base" />
                </div>
                <div className="media-body">
                  <h5>Your Email</h5>
                  <h6>{company.email}</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <FaMapMarkerAlt size={30} className="color-base" />
                </div>
                <div className="media-body">
                  <h5>Location</h5>
                  <h6>{company.address}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-g-map">
        <iframe src={company.mapEmbed} title="map" />
      </div>
    </>
  );
};

export default ContactMain;
