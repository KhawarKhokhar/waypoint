'use client';
import Link from 'next/link';
import React from 'react';
import { FaAngleLeft, FaAngleRight, FaPlus } from 'react-icons/fa';
import Slider from 'react-slick';
import company from '@/config/company';

const NextArrow = ({ className, onClick }) => <FaAngleRight className={className} onClick={onClick} />;
const PrevArrow = ({ className, onClick }) => <FaAngleLeft className={className} onClick={onClick} />;

const GalleryArea = () => {
  const { gallery } = company;
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
    ],
  };
  return (
    <div
      className="gallery-area bg-relative pd-top-120 pd-bottom-90"
      style={{ backgroundImage: 'url("assets/img/gallery-bg.svg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title style-white">
              <h6 className="bg-none color-base">{gallery.eyebrow}</h6>
              <h2 className="title">{gallery.title}</h2>
            </div>
          </div>
        </div>
        <div className="team-slider owl-carousel slider-control-round white slider-control-right-top">
          <Slider {...settings}>
            {gallery.items.map((g, i) => (
              <div className="item" key={i}>
                <div className="single-project-inner img-fit-container style-2">
                  <img src={g.img} alt="img" />
                  <div className="details">
                    <span>
                      <FaPlus />
                    </span>
                    <Link className="read-more-text" href="/services">
                      {g.title}
                    </Link>
                    <p>{g.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default GalleryArea;
