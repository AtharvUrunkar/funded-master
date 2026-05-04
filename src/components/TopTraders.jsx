function TopTraders() {
  const traders = [
    { name: "John Bartlett", country: "Poland", amount: "$3,423.39", time: "1 Hours" },
    { name: "Thomas Vargas", country: "Austria", amount: "$9,423.39", time: "4 Hours" },
    { name: "James Colon", country: "Norway", amount: "$14,291.76", time: "8 Hours" },
    { name: "Joseph Hurst", country: "Poland", amount: "$1,117.97", time: "6 Hours" },
    { name: "Richard Miles", country: "Iraq", amount: "$6,142.12", time: "20 Hours" },
  ];

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute left-[-200px] top-[100px] w-[500px] h-[400px] bg-[#00E24B]/20 blur-[180px]" />

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Rewarding Our <br />
            <span className="text-white font-bold">Best Traders</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md">
            Choose the evaluation based on your preference to become a Master Trader.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mt-10 flex-wrap">

            <div>
              <h3 className="text-primary text-3xl font-bold">$2.7M+</h3>
              <p className="text-gray-400 text-sm mt-1">Total Payouts</p>
            </div>

            <div>
              <h3 className="text-primary text-3xl font-bold">$5K+</h3>
              <p className="text-gray-400 text-sm mt-1">Total Traders</p>
            </div>

            <div>
              <h3 className="text-primary text-3xl font-bold">5hrs</h3>
              <p className="text-gray-400 text-sm mt-1">Avg. Payout time</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[450px] overflow-hidden">

          {/* Fade Top */}
          <div className="absolute top-0 left-0 w-full h-20 z-10 bg-gradient-to-b from-black to-transparent pointer-events-none" />

          {/* Fade Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-20 z-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          {/* SCROLL CONTAINER */}
          <div className="flex flex-col gap-5 animate-scroll-y">

            {[...traders, ...traders].map((trader, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 rounded-2xl 
                bg-[#05120B] border border-[#244D37]
                hover:shadow-[0_0_25px_rgba(0,255,150,0.15)] transition duration-300"
              >

                {/* LEFT */}
                <div className="flex items-center gap-4">

                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-[#0c2a1a] flex items-center justify-center text-primary font-bold">
                    {trader.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold">{trader.name}</h4>
                    <p className="text-gray-400 text-sm">{trader.country}</p>
                  </div>

                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <h4 className="text-primary font-semibold text-lg">
                    {trader.amount}
                  </h4>

                  <span className="inline-block mt-2 px-3 py-1 text-xs rounded-md bg-[#136036] text-white">
                    {trader.time}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div> {/* ✅ FIXED: Missing closing div */}

    </section>
  );
}

export default TopTraders;