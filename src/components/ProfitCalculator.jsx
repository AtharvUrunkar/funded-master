import { useState } from "react";

const accountOptions = [10000, 25000, 50000, 100000, 200000];

function ProfitCalculator() {
  const [accountIndex, setAccountIndex] = useState(3);
  const [profitRate, setProfitRate] = useState(18);

  const accountSize = accountOptions[accountIndex];
  const profit = Math.round(accountSize * (profitRate / 100) * 0.95);

  return (
    <section id ="pricing"className="relative py-32 bg-black text-white overflow-hidden">

      {/* 🔥 RIGHT AMBIENT GLOW */}
{/* 🔥 RIGHT AMBIENT GLOW */}
<div className="absolute right-[-300px] top-1/2 -translate-y-1/2 
w-[700px] h-[700px] 
bg-[#00E24B]/25 blur-[220px] 
rounded-full z-0" />

      {/* 🔥 SECONDARY SOFT GLOW */}
      <div className="absolute right-[-200px] bottom-[-100px] 
      w-[400px] h-[400px] bg-[#23C877]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-center font-semibold">
          How much can you <span className="text-primary">Earn with Us?</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover the potential to earn your desired income through trading without risking your own capital.
        </p>

        <div className="grid md:grid-cols-2 gap-16 mt-20 items-center">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-xl mb-4">Account Size</h3>

            <input
              type="range"
              min="0"
              max={accountOptions.length - 1}
              value={accountIndex}
              onChange={(e) => setAccountIndex(e.target.value)}
              className="w-full accent-green-400"
            />

            <div className="flex justify-between mt-2 text-sm text-gray-400">
              {accountOptions.map((val, i) => (
                <span
                  key={i}
                  className={i == accountIndex ? "text-primary font-semibold" : ""}
                >
                  ${val / 1000}K
                </span>
              ))}
            </div>

            <h3 className="text-xl mt-10 mb-4">Monthly Profit Rate</h3>

            <input
              type="range"
              min="1"
              max="50"
              value={profitRate}
              onChange={(e) => setProfitRate(e.target.value)}
              className="w-full accent-green-400"
            />

            <div className="mt-2">
              <span className="bg-primary text-black px-3 py-1 rounded-md text-sm">
                {profitRate}%
              </span>
            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative p-10 rounded-3xl text-center overflow-hidden
          bg-gradient-to-br from-[#0a1f14] via-[#0c2a1a] to-[#02150c]
          border border-white/10">

            {/* 🔥 INNER CARD GLOW (SUBTLE ONLY) */}
            <div className="absolute -top-10 -right-10 w-[200px] h-[200px]
            bg-[#00E24B]/10 blur-[120px]" />

            <div className="absolute bottom-[-60px] left-[-60px] w-[180px] h-[180px]
            bg-[#00E24B]/10 blur-[100px]" />

            {/* CONTENT */}
            <div className="relative">
              <p className="text-gray-300 mb-6">
                Your total profit with <br /> 95% Profit Split.
              </p>

              <div className="h-px bg-white/20 mb-6" />

              <h3 className="text-5xl md:text-6xl font-bold text-white">
                ${profit.toLocaleString()}
                <span className="text-lg text-gray-400"> /month</span>
              </h3>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button
            className="
            w-[260px] md:w-[320px]
            h-[60px]
            rounded-full
            bg-[#59D28F]
            text-[#001B0C]
            font-semibold
            text-lg
            tracking-wide
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(89,210,143,0.6)]
            active:scale-95
            "
          >
            Get Funded
          </button>
        </div>

      </div>
    </section>
  );
}

export default ProfitCalculator;