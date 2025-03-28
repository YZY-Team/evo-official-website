"use client";
import React, { useState } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import dynamic from "next/dynamic";

import "./css/Slide.css";
import { Slide } from "./components/Slide";
import ScrollBanner from "@/components/ScrollBanner";
import Link from "next/link";

const TradingViewChart = dynamic(
  () => import("@/components/TradingViewChart"),
  {
    ssr: false,
  }
);

const data = [
  {
    image: "/market-scroll/1.png",
    text: "CAKE",
    symbol: "CAKE",
  },
  {
    image: "/market-scroll/2.png",
    text: "ADA",
    symbol: "ADA",
  },
  {
    image: "/market-scroll/3.png",
    text: "EVO-AI",
    symbol: "EVO",
  },
  {
    image: "/market-scroll/4.png",
    text: "DOGE",
    symbol: "DOGE",
  },
  {
    image: "/market-scroll/5.png",
    text: "BNB",
    symbol: "BNB",
  },
];

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // 添加自动轮播
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      if (ref.current) {
        ref.current.goNext();
      }
    }, 2000);
  };

  React.useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // 添加鼠标悬停时暂停功能
  // const handleMouseEnter = () => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //   }
  // };

  // const handleMouseLeave = () => {
  //   startAutoPlay();
  // };

  const handleCardClick = (symbol: string) => {
    
  };

  if (selectedSymbol) {
    return (
      <div className="h-screen bg-black">
        <button
          onClick={() => setSelectedSymbol(null)}
          className="absolute top-4 left-4 z-10 px-4 py-2 bg-blue-500 text-white rounded"
        >
          返回
        </button>
        <TradingViewChart symbol={selectedSymbol} />
      </div>
    );
  }

  return (
    <>
      <div
        className=" flex flex-col  justify-between"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${data[activeIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "0 15%",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.80)",
          }}
        />
        <div>
          <ScrollBanner />
        </div>
        <div>
          <ScrollBanner direction="right" />
        </div>
      </div>
      <div className="card flex  h-fit items-center">
        <div
          style={{ width: "100%", position: "relative" }}

        >
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={(props) => (
                    <Link
                      href={`/market/${data[props.dataIndex].symbol}`}
                      style={{
                        opacity:
                          props.slideIndex === -2
                            ? 0.25 // 最左边
                            : props.position === -1
                            ? 0.5 // 左二
                            : props.slideIndex === 0
                            ? 1 // 中间
                            : props.position === 1
                            ? 0.5 // 右二
                            : 0.25, // 最右边
                      }}
                    >
                      <Slide {...props} />
                    </Link>
                  )}
                  slideWidth={window.innerWidth * 0.2125}
                  carouselWidth={width}
                  data={data}
                  maxVisibleSlide={5}
                  disableSwipe
                  customScales={[1, 0.624, 0.415, 0.3]}
                  transitionTime={450}
                  onActiveSlideChange={setActiveIndex}
                />
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CardExample;
