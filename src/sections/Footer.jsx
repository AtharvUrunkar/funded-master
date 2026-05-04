function Footer() {
  return (
    <footer id="affiliates" className="bg-[#020B06] text-white pt-24 pb-16 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute -left-[400px] bottom-0 w-[800px] h-[800px] bg-[#06955C]/20 blur-[250px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* LEFT - BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Funded Master
            </h3>

            <p className="text-[#A8FFD6] text-sm leading-relaxed max-w-xs">
              To win the game, you need strong support and diligent preparation,
              For Traders.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Programs</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Trading Rules</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Affiliates</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-lg font-medium mb-4">Legal</h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Return & Refund Policy</li>
              <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-lg font-medium mb-4">Let’s Connect</h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Discord</li>
              <li className="hover:text-white cursor-pointer">X.com</li>
              <li className="hover:text-white cursor-pointer">Telegram</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">YouTube</li>
              <li className="hover:text-white cursor-pointer">LinkedIn</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-12" />

        {/* COPYRIGHT + LINKS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-white">
            © 2025 Funded Master Pvt.Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="underline cursor-pointer hover:text-primary">
              Terms & Conditions
            </span>
            <span className="underline cursor-pointer hover:text-primary">
              Privacy Policy
            </span>
          </div>

        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 text-[#7EB5A3] text-sm leading-relaxed space-y-4">

          <p>
            Funded Master is an education and evaluation company that does not
            collect customer deposits or offer financial services. All accounts
            are virtual.
          </p>

          <p>
            All information provided is for educational purposes only and does
            not serve as investment advice. Trading involves risk.
          </p>

          <p>
            Restricted countries: Pakistan, Iran, Syria, Myanmar, Bangladesh,
            Vietnam, North Korea, Russia, Belarus, Cuba, Lebanon, Libya, Sudan,
            Crimea, and others.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;