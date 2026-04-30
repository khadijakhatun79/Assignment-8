"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[60vh] md:h-[70vh]"
      >
        {/* 🌞 Slide 1 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)"
            }}
            className="h-full bg-cover bg-center flex items-center"
          >
            <div className="bg-black/50 w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-3xl md:text-6xl font-bold mb-4 max-w-xl">
                  Summer Sale 50% OFF 🌞
                </h1>
                <p className="mb-6 text-lg text-gray-200 max-w-md">
                  Grab your favorite summer essentials at half price!
                </p>

                <Link href="/products">
                  <Button className="bg-orange-500 text-white">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 🔥 Slide 2 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1511499767150-a48a237f0083)"
            }}
            className="h-full bg-cover bg-center flex items-center"
          >
            <div className="bg-black/50 w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-3xl md:text-6xl font-bold mb-4 max-w-xl">
                  Hot Deals 🔥
                </h1>
                <p className="mb-6 text-lg text-gray-200 max-w-md">
                  Trending sunglasses & fashion items just for you!
                </p>

                <Link href="/products">
                  <Button className="bg-pink-500 text-white">
                    Explore Deals
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 🏖️ Slide 3 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)"
            }}
            className="h-full bg-cover bg-center flex items-center"
          >
            <div className="bg-black/50 w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-3xl md:text-6xl font-bold mb-4 max-w-xl">
                  Stay Cool This Summer 🏖️
                </h1>
                <p className="mb-6 text-lg text-gray-200 max-w-md">
                  Discover outfits, beachwear & skincare essentials.
                </p>

                <Link href="/products">
                  <Button className="bg-purple-500 text-white">
                    Browse Collection
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;