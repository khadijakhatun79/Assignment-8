"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useState } from "react";
import "animate.css";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3500 }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[70vh]"
      >

        {/* 🌞 Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)"
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 text-white max-w-4xl mx-auto px-6 text-center">

              <h1
                className={`text-4xl md:text-6xl font-bold mb-4 
                animate__animated ${
                  activeIndex === 0 ? "animate__fadeInUp" : ""
                }`}
              >
                Summer Sale 50% OFF 🌞
              </h1>

              <p
                className={`mb-6 text-lg text-gray-200 animate__animated ${
                  activeIndex === 0 ? "animate__fadeInUp" : ""
                }`}
              >
                Grab your favorite summer essentials at half price!
              </p>

              <Link href="/all-product">
                <Button
                  className={`bg-orange-500 text-white px-6 animate__animated ${
                    activeIndex === 0 ? "animate__fadeInUp" : ""
                  }`}
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* 🔥 Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1511499767150-a48a237f0083)"
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 text-white max-w-4xl mx-auto px-6 text-center">

              <h1
                className={`text-4xl md:text-6xl font-bold mb-4 animate__animated ${
                  activeIndex === 1 ? "animate__fadeInLeft" : ""
                }`}
              >
                Hot Deals 🔥
              </h1>

              <p
                className={`mb-6 text-gray-200 animate__animated ${
                  activeIndex === 1 ? "animate__fadeInRight" : ""
                }`}
              >
                Trending sunglasses & fashion items just for you!
              </p>

              <Link href="/all-product">
                <Button
                  className={`bg-pink-500 text-white px-6 animate__animated ${
                    activeIndex === 1 ? "animate__fadeInUp" : ""
                  }`}
                >
                  Explore Deals
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* 🏖️ Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)"
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 text-white max-w-4xl mx-auto px-6 text-center">

              <h1
                className={`text-4xl md:text-6xl font-bold mb-4 animate__animated ${
                  activeIndex === 2 ? "animate__fadeInUp" : ""
                }`}
              >
                Stay Cool This Summer 🏖️
              </h1>

              <p
                className={`mb-6 text-gray-200 animate__animated ${
                  activeIndex === 2 ? "animate__fadeIn" : ""
                }`}
              >
                Discover outfits, beachwear & skincare essentials.
              </p>

              <Link href="/all-product">
                <Button
                  className={`bg-purple-500 text-white px-6 animate__animated ${
                    activeIndex === 2 ? "animate__zoomInUp" : ""
                  }`}
                >
                  Browse Collection
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Hero;