import Image from "next/image";
import SpineCharacter from "@/components/SpineCharacter";
import Background from "@/components/Background";
import Link from "next/link";
import ScrollBanner from "@/components/ScrollBanner";

const scrollImages = [
  "/scroll/scroll1.svg",
  "/scroll/scroll2.svg",
  "/scroll/scroll3.svg",
];

export default function Home() {
  return (
    <div className="relative flex-1 flex flex-col  h-full overflow-hidden">
      <Background />
      {/* 背景渐变 */}
      <div className="fixed -z-20 inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#0d3d3d]" />

      {/* 主要内容 */}
      <main className="flex flex-col flex-1 h-full">
        {/* 上半部分内容，占据剩余空间 */}
        <div className="flex-1 px-[10vw] relative">
          <div className=" pt-[8.13vw]">
            <h1 className="text-white max-w-[40.62vw] font-sigmar text-[6.696vw] font-normal leading-normal animate-text-gradient">
              EVO-AI
            </h1>
            <p className="font-inter max-w-[32.62vw] text-[0.873vw] font-normal leading-[150%] text-white/50">
              EVO-AI Agent is a revolutionary blockchain smart assistant
              dedicated to providing users with a seamless cryptocurrency
              experience through advanced AI technology
            </p>
            <div className="flex max-w-[40.62vw] gap-[1.11vw] mt-[2.15vw]">
              <Link href={"https://www.deepseek.com/"} target="_blank">
                <Image
                  src="/deepseek.svg"
                  alt="Bitcoin"
                  width={45}
                  height={45}
                  className="w-[2.817vw] h-[2.817vw] cursor-pointer transition-transform hover:scale-110"
                />
              </Link>
              <Link href={"https://www.deeplearning.ai/"} target="_blank">
                <Image
                  src="/deeplearning.svg"
                  alt="Bitcoin"
                  width={45}
                  height={45}
                  className="w-[2.817vw] h-[2.817vw] cursor-pointer transition-transform hover:scale-110"
                />
              </Link>
              <Link href={"https://aiethicslab.com/"} target="_blank"><Image
                src="/ai-ethics-lab.svg"
                alt="Bitcoin"
                width={45}
                height={45}
                className="w-[2.817vw] h-[2.817vw] cursor-pointer transition-transform hover:scale-110"
              /></Link>
              <Image
                src="/github.svg"
                alt="GitHub"
                width={45}
                height={45}
                className="w-[2.817vw] h-[2.817vw] cursor-pointer transition-transform hover:scale-110"
              />
            </div>

            <div className="overflow-hidden relative -z-20"></div>
            <div className="flex gap-[1.665vw] mt-[10.41vw]">
              <a
                href="https://x.com/EVOAIVIP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[0.21vw] cursor-pointer"
              >
                <Image
                  src="/links/x.svg"
                  alt="Twitter"
                  width={18}
                  height={17}
                  className="w-[5.0625vw] h-[4.779vw] transition-transform hover:scale-110"
                />
              </a>
              <a
                href="https://x.com/EVOAIVIP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[0.21vw] cursor-pointer"
              >
                <Image
                  src="/links/tg.svg"
                  alt="Twitter"
                  width={18}
                  height={17}
                  className="w-[5.0625vw] h-[4.779vw] transition-transform hover:scale-110"
                />
              </a>
              <Link
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[0.21vw] cursor-pointer"
              >
                <Image
                  src="/links/book.svg"
                  alt="Book"
                  width={18}
                  height={17}
                  className="w-[5.0625vw] h-[4.779vw] transition-transform hover:scale-110"
                />
              </Link>
            </div>
          </div>

          <div className="absolute -z-10 right-0 translate-x-1/3 top-0">
            <SpineCharacter />
          </div>
        </div>

        {/* 底部 Banner，固定高度 */}
        <div className="h-[3vw]">
          <ScrollBanner />
        </div>
      </main>
    </div>
  );
}
