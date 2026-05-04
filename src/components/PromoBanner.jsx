function PromoBanner() {
  return (
    <section className="py-16 bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-2xl 
        bg-[#001108] border border-white/10 
        py-6 px-6 text-center">

          {/* 🔥 PULSE GLOW */}
          <div className="absolute inset-0 
          bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10 
          blur-[80px] animate-pulse" />

          {/* 🔁 SCROLLING TEXT */}
          <div className="overflow-hidden whitespace-nowrap relative">

            <div className="animate-marquee inline-block">

              <span className="mx-8 text-xl md:text-3xl font-semibold 
              bg-gradient-to-r from-[#027F49] to-[#4BFFC6] 
              bg-clip-text text-transparent animate-shimmer">
                Get Paid in 48 Hours or Get $2000!
              </span>

              <span className="mx-8 text-xl md:text-3xl font-semibold 
              bg-gradient-to-r from-[#027F49] to-[#4BFFC6] 
              bg-clip-text text-transparent animate-shimmer">
                Get Paid in 48 Hours or Get $2000!
              </span>

            </div>

          </div>

          {/* 🎯 CTA BUTTON */}
          <div className="mt-6 relative z-10">
            <button className="px-8 py-3 rounded-full 
            bg-[#59D28F] text-[#001B0C] font-semibold 
            shadow-[0_0_20px_rgba(0,255,150,0.4)]
            hover:scale-105 hover:shadow-[0_0_35px_rgba(0,255,150,0.7)]
            transition duration-300">
              Get Funded
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default PromoBanner;