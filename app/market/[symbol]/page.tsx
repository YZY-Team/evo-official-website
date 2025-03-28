"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Background from "@/components/Background";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const TradingViewChart = dynamic(
  () => import("@/components/TradingViewChart"),
  { ssr: false }
);

const symbols = [
  { symbol: "CAKE", icon: "/market-logo/cake.svg" },
  { symbol: "ADA", icon: "/market-logo/ada.svg" },
  { symbol: "BNB", icon: "/market-logo/bnb.svg" },
  { symbol: "DOGE", icon: "/market-logo/doge.svg" },
  { symbol: "EVO", icon: "/market-logo/evo.svg" },
];

export default function MarketSymbol() {
  const params = useParams();
  const initialSymbol = (params.symbol as string).toUpperCase();
  const [currentSymbol, setCurrentSymbol] = useState(initialSymbol);

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden">
      <Background />
      <div className="relative z-10">
        <div className="w-full flex  items-center px-[1vw]  gap-16 ">
          <div>
            <Link href="/market">
              <Image
                src="/logo.svg"
                alt="EVO-AI"
                width={129}
                height={44}
                className="w-[5.44vw] h-[2vw]"
              />
            </Link>
          </div>
          <div className="flex h-[5dvh] items-center justify-center gap-4 py-4 bg-black/20 backdrop-blur-md border-t border-white/20">
            {symbols.map((item) => (
              <div
                key={item.symbol}
                onClick={() => setCurrentSymbol(item.symbol)}
                className={`p-2 rounded-full ${
                  currentSymbol === item.symbol
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                } cursor-pointer transition-all`}
              >
                <Image
                  src={item.icon}
                  alt={item.symbol}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            ))}
          </div>
          <div>
            <div className="text-[#0FF7FF] font-poppins text-[18px] font-bold leading-normal">
              {/* Market */}
            </div>
          </div>
        </div>
        <TradingViewChart symbol={currentSymbol} />
      </div>
    </div>
  );
}
