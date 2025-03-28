"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // 如果路径匹配 /market/xxx 模式，则不显示 header
  if (pathname.match(/^\/market\/[^/]+$/)) {
    return null;
  }

  return (
    <header className="flex pt-[2vw] box-border justify-between items-center px-[10vw]">
      <div className="flex items-center gap-[1.11vw]">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="EVO-AI"
            width={129}
            height={44}
            className="w-[10.44vw] h-[4vw]"
          />
        </Link>
      </div>
      <div className="flex items-center gap-[3.75vw]">
        <Link
          href="/"
          className={`text-[1.125vw] font-poppins font-bold leading-none align-middle ${
            pathname === "/" ? "text-[#00A3FF]" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href="/market"
          className={`text-[1.125vw] font-poppins font-bold leading-none align-middle ${
            pathname === "/market" ? "text-[#00A3FF]" : "text-white"
          }`}
        >
          Market
        </Link>
        <a
          href="https://bscscan.com/"
          target="_blank"
          className={` font-poppins font-bold leading-none align-middle ${
            pathname === "/about" ? "text-[#00A3FF]" : "text-white"
          }`}
        >
          <Image
            src={"/header/bscScan.svg"}
            alt=""
            width={89}
            height={23}
          ></Image>
        </a>
        <a
          href="https://pancakeswap.finance/home"
          target="_blank"
          className={` font-poppins font-bold leading-none align-middle ${
            pathname === "/about" ? "text-[#00A3FF]" : "text-white"
          }`}
        >
          <Image
            src={"/header/pancakeSwap.svg"}
            alt=""
            width={116}
            height={25}
          ></Image>
        </a>
      </div>
    </header>
  );
}
