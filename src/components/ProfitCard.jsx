function ProfitCard() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute right-[-100px] top-[-50px] w-[400px] h-[300px] 
      bg-green-500/30 blur-[150px] rotate-12" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative bg-white/10 backdrop-blur-xl 
        border border-white/10 rounded-[30px] p-10 md:p-16 
        max-w-3xl ml-auto">

          {/* 🔹 Title */}
          <h3 className="text-2xl md:text-3xl font-semibold text-center">
            Your total profit with <span className="text-primary">95% Profit Split</span>
          </h3>

          {/* 🔹 Divider */}
          <div className="h-[2px] bg-purple-500/50 my-6 mx-auto w-[80%]" />

          {/* 🔹 Profit */}
          <div className="flex items-end justify-center gap-2 mt-6">

            <h2 className="text-[70px] md:text-[110px] font-bold leading-none text-white 
            drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              $5,400
            </h2>

            <span className="text-xl md:text-2xl mb-3 text-gray-300">
              /month
            </span>

          </div>

        </div>

        {/* 🔥 CTA BUTTON */}
        <div className="mt-12 flex justify-center">

          <button className="px-10 py-4 rounded-full 
          bg-[#59D28F] text-[#001B0C] font-semibold text-lg
          hover:scale-105 transition duration-300 
          shadow-[0_0_25px_rgba(0,255,150,0.5)]">
            Get Funded
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProfitCard;