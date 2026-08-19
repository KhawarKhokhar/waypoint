import Link from 'next/link';
import React from 'react';
import company from '@/config/company';

const Banner = () => {
  const { hero } = company;
  return (
    <div
      className="banner-area bg-relative banner-area-2 bg-cover mt-0"
      style={{ backgroundImage: `url(${company.hero.bg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pb-xl-5 align-self-center">
            <div className="banner-inner pe-xl-4 pb-5">
              <h6 className="bg-none text-white mb-4" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
                {hero.eyebrow}
              </h6>
              <h2 className="title text-white" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500">
                {hero.title}
              </h2>
              <p className="content pe-xl-4" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500">
                {hero.text}
              </p>
              <Link className="btn btn-base text_inner_white" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1500" href={hero.ctaLink}>
                {hero.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
