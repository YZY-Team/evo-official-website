export default function Background() {
  return (
    <>
      {/* 背景渐变 */}
      <div className="fixed -z-20 inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#0d3d3d]" />

      {/* 动态背景球体 */}
      <div className="fixed -z-10 inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[88%] max-w-[69.44vw]">
          {/* 大蓝色形状 */}
          <div className="absolute w-[80%] h-[42%] rounded-[6.94vw] gradient-blue opacity-20 blur-[6.94vw] animate-float-1 top-[10%] left-[-10%] rotate-[-45deg]" />

          {/* 小蓝色形状 */}
          <div className="absolute w-[40%] h-[42%] rounded-[6.94vw] gradient-blue opacity-20 blur-[6.94vw] animate-float-2 top-[50%] right-[-5%] rotate-[-45deg]" />

          {/* 白色形状 */}
          <div className="absolute w-[60%] h-[42%] rounded-[6.94vw] gradient-white opacity-20 blur-[6.94vw] animate-float-3 top-[5%] right-[10%] rotate-[-45deg]" />

          {/* 绿色形状 */}
          <div className="absolute w-[60%] h-[42%] rounded-[6.94vw] gradient-green opacity-20 blur-[6.94vw] animate-float-1 top-[40%] left-[15%] rotate-[-45deg]" />

          {/* 粉色形状 */}
          <div className="absolute w-[40%] h-[42%] rounded-[6.94vw] gradient-pink opacity-20 blur-[6.94vw] animate-float-2 top-[25%] left-[0%] rotate-[-45deg]" />
        </div>
      </div>
    </>
  );
}