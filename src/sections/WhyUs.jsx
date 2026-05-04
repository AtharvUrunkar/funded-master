import {
  CircleDollarSign,
  Briefcase,
  CreditCard,
  HeadphonesIcon,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: <CircleDollarSign size={24} />,
    title: "Lower Spreads",
    desc: "Reduce your trading costs with our average spread on majors from 0.0 pips, low commissions, and deep liquidity.",
  },
  {
    icon: <span className="text-xl font-bold">0</span>,
    title: "$0 Minimum Acc Size",
    desc: "Start trading with as little or as much as you like with no hidden costs.",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Range of Markets",
    desc: "Trade 150+ global markets including FX, Crypto, and Commodities.",
  },
  {
    icon: <CreditCard size={24} />,
    title: "No Fees to Deposit",
    desc: "We cover all deposit fees across multiple funding methods.",
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: "24/7 Support",
    desc: "Our team is available all day, every day to support your journey.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Low Latency",
    desc: "Execute trades with ultra-fast speeds as low as 5ms.",
  },
];

function WhyUs() {
  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-16">
          Why We’re{" "}
          <span className="text-[#59D28F]">Top Rated PropFirm</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl overflow-hidden
              bg-gradient-to-br from-[#0b2816] via-[#050c07] to-[#020b06]
              border border-[#2f5d45]/30
              hover:border-[#59D28F]/40
              transition duration-300
              hover:shadow-[0_0_30px_rgba(0,255,150,0.08)]
              hover:-translate-y-1"
            >

              {/* WATERMARK */}
              <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 flex gap-2 opacity-[0.04]">
                <div className="w-6 h-32 bg-white rounded"></div>
                <div className="w-6 h-32 bg-white rounded"></div>
                <div className="w-6 h-32 bg-white rounded"></div>
              </div>

              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-5
              bg-black/50 border border-[#59D28F]/30
              shadow-[inset_0_0_15px_rgba(89,210,143,0.3)]
              text-[#59D28F]">

                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-[#a0b3a8] text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyUs;