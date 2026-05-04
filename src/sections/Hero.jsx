import heroImg from "../assets/hero.png";

function Hero() {

  const stats = [
    { type: "payout", value: "$4,659.58", location: "Toronto, Canada" },
    { type: "traders", value: "5,863", label: "Active Traders" },
    { type: "payout", value: "$2,119.48", location: "Sydney, Australia" },
    { type: "countries", value: "180+", label: "Countries" },
    { type: "payout", value: "$7,842.21", location: "Berlin, Germany" },
    { type: "payout", value: "$3,201.90", location: "Dubai, UAE" },
    { type: "traders", value: "12,340", label: "Total Accounts" },
    { type: "payout", value: "$9,118.77", location: "New York, USA" },
    { type: "payout", value: "$1,982.33", location: "Mumbai, India" },
    { type: "countries", value: "24/7", label: "Support" },
  ];

  return (
    
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-center bg-black text-white">

      {/* 🔹 RIGHT GLOW */}
      <div className="absolute right-[-250px] top-[30%] 
      w-[600px] h-[600px] bg-[#00E24B]/20 blur-[220px]" />

      {/* 🔹 IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="hero"
          className="w-full h-full object-cover object-right"
        />

        {/* 🔹 DARK OVERLAY */}
       <div className="absolute inset-0 bg-gradient-to-r 
from-black via-black/30 to-transparent" />
      </div>

      {/* 🔹 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-xl">

          {/* ✅ THEME COLORED HEADING */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-primary">
            Funded Master
          </h1>

        
        </div>

      </div>

      {/* 🔥 STATS BAR */}
      <div className="absolute bottom-0 w-full bg-[#050D08] overflow-hidden border-t border-white/10">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* TRACK */}
        <div className="flex animate-scroll-x whitespace-nowrap">

          {[...stats, ...stats].map((item, i) => (
            <div key={i} className="flex items-center">

              <div className="px-10 py-6 text-center min-w-[220px]">

                {item.type === "payout" && (
                  <>
                    <p className="text-primary text-2xl font-semibold 
                    drop-shadow-[0_0_8px_rgba(0,255,150,0.6)]">
                      {item.value}
                    </p>
                    <p className="text-white text-sm">{item.location}</p>
                  </>
                )}

                {item.type === "traders" && (
                  <>
                    <p className="text-white text-xl font-semibold">
                      {item.value}
                    </p>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                  </>
                )}

                {item.type === "countries" && (
                  <>
                    <p className="text-primary text-xl font-semibold">
                      {item.value}
                    </p>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                  </>
                )}

              </div>

              {/* DIVIDER */}
              <div className="h-10 w-px bg-green-800/40"></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;