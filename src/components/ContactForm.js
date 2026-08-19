"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import company from "@/config/company";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formType: "Homepage Lead",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
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

      toast.success("Thank you! Your request has been submitted.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-area">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="container">
        <div className="contact-inner-1">
          <div className="row">
            <div
              className="col-lg-8 wow animated fadeInLeft"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <img className="w-100" src={company.contactImg} alt="Contact" />
            </div>

            <div
              className="col-lg-4 wow animated fadeInRight"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0">
                <h6 className="bg-none color-base mb-3">
                  {company.contactCta.eyebrow}
                </h6>
                <h2 className="title">{company.contactCta.title}</h2>
                <p className="content">{company.contactCta.text}</p>

                <form className="mt-4" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input type="text" name="name" placeholder="Your Name" required />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input type="email" name="email" placeholder="Your Email" required />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input type="tel" name="phone" placeholder="Your Phone" required />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input
                          type="text"
                          name="interest"
                          placeholder="Buying or Selling?"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="single-input-inner style-border">
                        <textarea name="message" placeholder="Message" required />
                      </div>
                    </div>

                    <div className="col-lg-12 mb-4">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                        }}
                      >
                        <input
                          type="checkbox"
                          id="marketing_consent_home"
                          name="marketing_consent"
                          value="Agreed"
                          required
                          style={{
                            width: "18px",
                            height: "18px",
                            marginTop: "5px",
                            flexShrink: 0,
                            cursor: "pointer",
                          }}
                        />

                        <label
                          htmlFor="marketing_consent_home"
                          style={{
                            fontSize: "13px",
                            lineHeight: "1.6",
                            marginBottom: 0,
                          }}
                        >
                          By clicking &quot;Submit&quot; I agree to receive emails,
                          GENERAL COMMUNICATIONS &amp; MARKETING text messages, and
                          phone calls from Waypoint Assets Realty. I also agree to the{" "}
                          <a
                            href="/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#246bfd",
                              textDecoration: "underline",
                              fontWeight: "500",
                            }}
                          >
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#246bfd",
                              textDecoration: "underline",
                              fontWeight: "500",
                            }}
                          >
                            Privacy Policy
                          </a>
                          . Reply STOP for STOP and HELP for help for more information.
                          Message &amp; data rates may apply. Message frequency varies.
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-base mt-0 w-100 border-radius-5"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Now"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
