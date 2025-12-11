import React from "react";
import { Link, Links } from "react-router";
import Container from "../Shared/Container";

const Slider = () => {
  return (
    <Container>
      <div>
        <div className="w-full flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-10 items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Text Content */}
          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
              Clubs - latest trendy
            </h1>

            <div>
              <Link to="/clubs">
                <button className="btn btn-ghost rounded-full text-base sm:text-lg md:text-xl bg-orange-400 hover:bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4">
                  Join a club
                </button>
              </Link>
            </div>
          </div>

          {/* Carousel */}
          <div className="flex-1 w-full">
            <div className="carousel w-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                  alt="Product 1"
                />
                <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                  alt="Product 2"
                />
                <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                  alt="Product 3"
                />
                <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                  alt="Product 4"
                />
                <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Slider;
