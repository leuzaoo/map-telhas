"use client";
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";
import React, { useState } from "react";
import Center from "../center";

export default function Slider() {
  const slides = [
    {
      url: "/slider/slide1.png",
    },
    {
      url: "/slider/slide2.png",
    },
    {
      url: "/slider/slide3.png",
    },

    {
      url: "/slider/slide4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="hidden md:block">
      <Center>
        <div className="flex justify-between">
          <h1 className="text-primaryRed text-3xl lg:text-[60px] font-bold uppercase">
            Depoimentos
          </h1>{" "}
          <div className="flex items-end justify-center gap-4">
            <p className="font-semibold text-xl">Avaliações: </p>
            <div className="flex items-center">
              <BiSolidStar size={40} color="orange" />
              <BiSolidStar size={40} color="orange" />
              <BiSolidStar size={40} color="orange" />
              <BiSolidStar size={40} color="orange" />
              <BiSolidStarHalf size={40} color="orange" />
            </div>
          </div>
        </div>
        <div className="md:w-[658px] md:h-[150px] mt-5 lg:mt-10 mb-20 m-auto relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl duration-500"
          />
          {/* Left Arrow */}
          <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/80 text-white cursor-pointer">
            <ArrowLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/80 text-white cursor-pointer">
            <ArrowRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <Dot />
              </div>
            ))}
          </div>
        </div>
      </Center>
    </div>
  );
}
