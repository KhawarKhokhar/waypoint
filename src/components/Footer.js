import Link from 'next/link';
import React from 'react';
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaRegClock,
  FaTwitter,
} from 'react-icons/fa';
import company from '@/config/company';

const Footer = () => {
  return (
    <>
      <footer className="footer-area footer-area_5 bg-black mt-0">
        <div className="container">
          <div className="footer-top-2 bg-base p-5 border-radius-bottom-20">
            <div className="row">
              <div className="col-lg-4">
                <div className="media">
                  <div className="media-left me-3">
                    <FaEnvelope className="text-white" size={34} />
                  </div>
                  <div className="media-body">
                    <h5 className="text-white">Contact Info</h5>
                    <p className="text-white mb-0">{company.email}</p>
                    <p className="text-white mb-0">{company.phone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="media">
                  <div className="media-left me-3">
                    <FaRegClock className="text-white" size={34} />
                  </div>
                  <div className="media-body">
                    <h5 className="text-white">Opening Hours</h5>
                    <p className="text-white mb-0">{company.hours.weekdays}</p>
                    <p className="text-white mb-0">{company.hours.weekend}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="media">
                  <div className="media-left me-3">
                    <FaMapMarkerAlt className="text-white" size={34} />
                  </div>
                  <div className="media-body">
                    <h5 className="text-white">Office</h5>
                    <p className="text-white mb-0">{company.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pd-top-100">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src={company.logoWhite} alt={company.name} />
                </div>
                <div className="details">
                  <p>{company.tagline}</p>
                  <ul className="social-media mt-4">
                    <li>
                      <Link href={company.social.facebook}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href={company.social.twitter}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href={company.social.instagram}>
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href={company.social.linkedin}>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_nav_menu ps-xl-5">
                <h4 className="widget-title">Quick Links</h4>
                <ul>
                  <li>
                    <Link href="/">
                      <FaChevronRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <FaChevronRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <FaChevronRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <FaChevronRight /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy">
                      <FaChevronRight /> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms">
                      <FaChevronRight /> Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Services</h4>
                <ul>
                  {company.services.items.slice(0, 6).map((s, i) => (
                    <li key={i}>
                      <Link href="/services">
                        <FaChevronRight /> {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-base">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>
                  © {company.name} {company.year} | All Rights Reserved
                </p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms and Conditions</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
