import bannerImg from "../assets/banner.png";
import { Trophy, Landmark, DollarSign } from "lucide-react";

function ProfitBanner() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* 🔥 OUTSIDE GLOW (RIGHT SIDE) */}
      <div className="absolute top-0 right-0 w-[500px] h-full 
      bg-gradient-to-l from-green-500/30 via-green-400/10 to-transparent 
      blur-[120px] pointer-events-none z-0" />

      {/* 🔹 CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔥 MAIN CONTAINER */}
        <div className="rounded-3xl 
        bg-gradient-to-br from-[#00150d]/80 via-[#001f14]/70 to-[#002b1a]/80
        border border-white/20 
        shadow-[inset_0_0_80px_rgba(0,255,150,0.05)]
        p-10 md:p-16">

          {/* 🔹 TOP CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>
              <p className="text-primary text-sm tracking-wider mb-4">
                HOW IT WORKS
              </p>

              <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                Maximum Profit & <br />
                Secure <span className="text-primary">Trading Platform</span>
              </h2>

              <p className="mt-6 text-gray-400 max-w-md">
                Choose the evaluation based on your preference to become an Empire Trader.
              </p>

              <button
  className="
  mt-8 px-10 py-3.5 rounded-full
  text-sm md:text-base font-semibold text-white

  bg-gradient-to-r 
  from-[#004d2f] via-[#00E24B] to-[#004d2f]

  shadow-[0_0_20px_rgba(0,255,150,0.35)]
  hover:shadow-[0_0_40px_rgba(0,255,150,0.7)]

  hover:scale-105 active:scale-95
  transition-all duration-300

  relative overflow-hidden
  "
>
  <span className="relative z-10">Get Funded</span>

  {/* 🔥 SHIMMER EFFECT */}
  <span className="
    absolute inset-0 
    bg-gradient-to-r from-transparent via-white/20 to-transparent
    translate-x-[-100%] hover:translate-x-[100%]
    transition duration-700
  " />
</button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center md:justify-end">
              <img
                src={bannerImg}
                alt="banner"
                className="w-[300px] md:w-[450px] object-contain 
                drop-shadow-[0_0_40px_rgba(0,255,150,0.4)]"
              />
            </div>

          </div>

          {/* 🔥 BOTTOM CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {/* CARD 1 */}
            <div className="p-6 rounded-2xl bg-[#00150d]/40 border border-white/10 
            hover:shadow-[0_0_25px_rgba(0,255,150,0.25)] transition duration-300">

              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center 
              shadow-[0_0_25px_rgba(0,255,150,0.6)] mb-5">
                <Trophy className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-lg font-semibold">Challenge Phase</h3>
              <p className="text-gray-400 text-sm mt-2">
                Choose a Challenge account and showcase your skills.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-6 rounded-2xl bg-[#00150d]/40 border border-white/10 
            hover:shadow-[0_0_25px_rgba(0,255,150,0.25)] transition duration-300">

              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center 
              shadow-[0_0_25px_rgba(0,255,150,0.6)] mb-5">
                <Landmark className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-lg font-semibold">Get Funded Account</h3>
              <p className="text-gray-400 text-sm mt-2">
                Pass your challenge and get a simulated funded account.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-6 rounded-2xl bg-[#00150d]/40 border border-white/10 
            hover:shadow-[0_0_25px_rgba(0,255,150,0.25)] transition duration-300">

              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center 
              shadow-[0_0_25px_rgba(0,255,150,0.6)] mb-5">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-lg font-semibold">Get Rewarded</h3>
              <p className="text-gray-400 text-sm mt-2">
                Earn your share of the profits and receive payout within 24 hrs.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ProfitBanner;