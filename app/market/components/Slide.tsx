import React from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "../css/Slide.css";
import Image from "next/image";
export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;

  console.log(coverImage);
  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            console.log(dataIndex,slideIndex);
            
            if (!isCenterSlide && slideIndex >= -2 && slideIndex < 3) {
              swipeTo(slideIndex);
            }
          }}
        />
      </div>
      <div className="detail fill">
        <div className="discription w-full flex flex-col items-center">
          <div className="w-[21.25vw] aspect-[306/475] relative">
            <Image
              fill
              alt="j"
              className="cover-image object-cover"
              src={coverImage}
            />
          </div>
          <p className="text-center mt-[4.17vw] text-white font-inter text-[3.4vw] font-bold">{text}</p>
        </div>
      </div>
    </div>
  );
});
