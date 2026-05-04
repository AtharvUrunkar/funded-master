import { useState } from "react";

function TradingPlans() {
  const [plan, setPlan] = useState("Instant");
  const [amount, setAmount] = useState(50000);

  const getPrice = () => {
    if (amount === 25000) return 497;
    if (amount === 50000) return 897;
    if (amount === 100000) return 1297;
  };

  return (
    <section id ="programs" className="relative py-28 bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-full 
      bg-gradient-to-l from-green-500/20 to-transparent blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold">
            Become an <span className="text-primary">Master Trader</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            Choose the evaluation based on your preference to become an Empire Trader.
          </p>
        </div>

        {/* 🔥 TOP GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div>

            {/* Trading Path */}
            <p className="text-xl font-medium mb-4">
              Choose your Trading Path
            </p>

            <div className="bg-[#020B06] p-3 rounded-2xl border border-[#28533B]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Instant", "1-Step", "2-Step", "Spartan"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setPlan(item)}
                    className={`h-[55px] px-4 rounded-lg text-base font-medium transition
                    ${
                      plan === item
                        ? "bg-[#59D28F] text-[#001B0C]"
                        : "border border-[#28533B] text-white hover:border-primary"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Account Size */}
            <p className="text-xl font-medium mt-8 mb-4">
              Select Account Size
            </p>

            <div className="bg-[#020B06] p-3 rounded-2xl border border-[#28533B]">
              <div className="grid grid-cols-3 gap-3">
                {[25000, 50000, 100000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`h-[55px] px-4 rounded-lg text-base font-medium transition
                    ${
                      amount === amt
                        ? "bg-[#59D28F] text-[#001B0C]"
                        : "border border-[#28533B] text-white hover:border-primary"
                    }`}
                  >
                    ${amt / 1000}K
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center md:justify-end">

  <div className="relative w-full max-w-md 
  rounded-2xl p-8 md:p-10 text-center
  bg-[rgba(89,210,143,0.08)] 
  border border-[rgba(89,210,143,0.25)]
  backdrop-blur-xl
  shadow-[0_0_40px_rgba(0,255,150,0.15)]">

    {/* Soft inner glow */}
    <div className="absolute inset-0 rounded-2xl 
    bg-[rgba(89,210,143,0.15)] blur-2xl opacity-40" />

    {/* Badge (same tone as button) */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
      <span className="px-4 py-1 text-xs rounded-full 
      bg-[#59D28F] text-[#001B0C] font-medium
      shadow-[0_0_12px_rgba(0,255,150,0.6)]">
        🔥 MOST POPULAR
      </span>
    </div>

    <div className="relative z-10">

      <p className="text-gray-300 text-sm mt-4 tracking-wide">
        START NOW AT ONLY
      </p>

      {/* Price */}
      <h3 className="text-5xl md:text-6xl font-bold mt-4 
      text-white drop-shadow-[0_0_25px_rgba(0,0,0,0.9)]">
        ${getPrice()}
      </h3>

      {/* Button */}
      <button className="mt-8 w-full py-3 rounded-lg 
      bg-[#59D28F] text-[#001B0C] font-semibold 
      shadow-[0_0_20px_rgba(0,255,150,0.4)]
      hover:scale-105 hover:shadow-[0_0_35px_rgba(0,255,150,0.7)]
      transition duration-300">
        Get Funded
      </button>

    </div>

  </div>

</div>

        </div> {/* ✅ FIXED: GRID CLOSED */}

        {/* 🔥 BOTTOM CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* VERIFICATION */}
          <div className="rounded-2xl bg-[#00150d]/60 border border-white/10 p-8">
            <h3 className="text-lg font-semibold mb-3">1. VERIFICATION</h3>
            <div className="h-[1px] bg-white/10 mb-4" />

            <div className="space-y-3">
              <div className="flex justify-between bg-black/40 px-4 py-3 rounded-lg">
                <span>Max Daily Drawdown</span>
                <span>2%</span>
              </div>
              <div className="flex justify-between bg-black/40 px-4 py-3 rounded-lg">
                <span>Max Overall Drawdown</span>
                <span>10%</span>
              </div>
              <div className="flex justify-between bg-black/40 px-4 py-3 rounded-lg">
                <span>Minimum Profitable Days</span>
                <span>3 Days</span>
              </div>
              <div className="flex justify-between bg-black/40 px-4 py-3 rounded-lg">
                <span>Leverage</span>
                <span>30:1</span>
              </div>
            </div>
          </div>

          {/* LIVE */}
          <div className="rounded-2xl bg-[#00150d]/60 border border-white/10 p-8">
            <h3 className="text-lg font-semibold mb-3">2. LIVE SIMULATED TRADER</h3>
            <div className="h-[1px] bg-white/10 mb-4" />

            <div className="space-y-3">
              <div className="flex justify-between bg-black/40 px-4 py-3 rounded-lg">
                <span>Payout Share</span>
                <span className="text-primary font-semibold">90%</span>
              </div>
              <div className="flex justify-between bg-black/40 px-4 py-3 rounded-lg">
                <span>Max Daily Drawdown</span>
                <span>4%</span>
              </div>
              <div className="flex justify-between bg-black/40 px-4 py-3 rounded-lg">
                <span>Max Overall Drawdown</span>
                <span>6%</span>
              </div>
              <div className="flex justify-between bg-black/40 px-4 py-3 rounded-lg">
                <span>Payout Frequency</span>
                <span>14 days</span>
              </div>
              <div className="flex justify-between bg-black/40 px-4 py-3 rounded-lg">
                <span>Trading Period</span>
                <span>Unlimited</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TradingPlans;