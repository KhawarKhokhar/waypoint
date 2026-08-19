'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa';
import company from '@/config/company';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="navbar-area-wrap navbar-area-4 navbar-area_5">
        <img className="left-bg" src="assets/img/navbar-bg.svg" alt="img" />
        <div className="row">
          <div className="col-lg-2 col-xl-3 align-self-center">
            <div className="logo">
              <Link href="/">
                <img src={company.logo} alt={company.name} />
              </Link>
            </div>
          </div>
          <div className="col-lg-10 col-xl-9">
            <div className="navbar-top pe-3">
              <div className="row">
                <div className="col-lg-8">
                  <ul>
                    <li>
                      <FaPhoneAlt /> {company.phone}
                    </li>
                    <li>
                      <FaEnvelope /> {company.email}
                    </li>
                    <li>
                      <FaMapMarkerAlt /> {company.address}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <ul className="topbar-right">
                    <li>Follow On: </li>
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
                      <Link href={company.social.linkedin}>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link href={company.social.instagram}>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <nav className="navbar navbar-area navbar-area_5 navbar-area-2 navbar-expand-lg bg-white">
              <div className="container nav-container custom-container ps-lg-0">
                <div className="responsive-mobile-menu">
                  <button
                    onClick={() => setActive(!active)}
                    className={
                      active
                        ? 'menu toggle-btn d-block d-lg-none open'
                        : 'menu toggle-btn d-block d-lg-none'
                    }
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-left" />
                    <span className="icon-right" />
                  </button>
                </div>
                <div
                  className={
                    active
                      ? 'collapse navbar-collapse sopen'
                      : 'collapse navbar-collapse'
                  }
                  id="itech_main_menu"
                >
                  <ul className="navbar-nav menu-open">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center">
                  <Link className="btn btn-base" href="/contact">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
