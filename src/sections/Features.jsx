import FeatureCard from "../components/FeatureCard";

import profitIcon from "../assets/icons/profit.webp";
import challengeIcon from "../assets/icons/challenge.webp";
import lightningIcon from "../assets/icons/lightning.webp";
import newsIcon from "../assets/icons/news.webp";
import targetIcon from "../assets/icons/target.webp";

function Features() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold">
            Multiple Trading <span className="text-primary">Assets</span>
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            Trade in the following markets:
          </p>
        </div>

        {/* TOP ROW */}
        <div className="grid md:grid-cols-3 gap-8">

          <FeatureCard
            icon={profitIcon}
            title="Up to 100% Profit Splits"
            desc="Keep every dollar you earn—Our funding model lets you keep up to 100% of your profits."
          />

          <FeatureCard
            icon={challengeIcon}
            title="1-Step Challenge"
            desc="One clear target, one easy step—prove your skills and unlock funding."
          />

          <FeatureCard
            icon={lightningIcon}
            title="Lightning Fast Payouts"
            desc="Trade hard today, spend tomorrow—experience lightning fast payouts."
          />

        </div>

        {/* BOTTOM ROW */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">

          <FeatureCard
            icon={newsIcon}
            title="Trade News Freely"
            desc="Earn your share of the profits and receive payout within 24 hrs."
          />

          <FeatureCard
            icon={targetIcon}
            title="6% Profit Target"
            desc="Hit your mark effortlessly with our ultra-low 6% profit target."
          />

        </div>

      </div>
    </section>
  );
}

export default Features;