import { useEffect, useRef } from "react";

function FinalCTA() {
  const glowRef = useRef(null);

  // 🎯 Mouse Parallax Glow
  useEffect(() => {
    const moveGlow = (e) => {
      if (!glowRef.current) return;

      const { clientX, clientY } = e;
      glowRef.current.style.transform = `translate(${clientX * 0.02}px, ${clientY * 0.02}px)`;
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <section className="py-32 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CONTAINER */}
        <div className="relative rounded-[48px] overflow-hidden p-12 md:p-20 text-center border border-[#1a3d2a]">

          {/* 🔥 PREMIUM BLACK + GREEN BACKGROUND */}
          <div className="absolute inset-0 animate-gradient 
          bg-[radial-gradient(circle_at_20%_30%,#00E24B22,transparent_40%),radial-gradient(circle_at_80%_70%,#23C87733,transparent_50%),linear-gradient(135deg,#000000,#020806,#03150c,#000000)]" />

          {/* 🔥 PARALLAX GLOW */}
          <div
            ref={glowRef}
            className="absolute w-[600px] h-[600px] bg-[#00E24B]/30 blur-[220px] rounded-full top-[-150px] left-[-150px]"
          />

          {/* 🔥 SECONDARY GLOW */}
          <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#23C877]/40 blur-[220px]" />

          {/* CONTENT */}
          <div className="relative z-10">

            {/* CTA TEXT */}
            <h2 className="
              font-figtree font-normal
              text-[48px] md:text-[85px]
              leading-[56px] md:leading-[100px]
              tracking-[-1px] md:tracking-[-3px]
              text-center text-white
            ">
              Let’s join with millions of <br />
              <span className="bg-gradient-to-r from-[#39FF9C] to-[#A5FFCD] bg-clip-text text-transparent">
                Traders in the world
              </span>
            </h2>

            {/* BUTTONS */}
            <div className="flex justify-center gap-6 mt-10 flex-wrap">

              {/* 🔥 PRIMARY BUTTON */}
              <button className="relative px-10 py-4 rounded-full font-semibold text-lg text-black
              bg-gradient-to-r from-[#00B258] to-[#6AF4B3]
              transition-all duration-300 hover:scale-105
              shadow-[0_0_25px_rgba(0,255,150,0.4)]
              hover:shadow-[0_0_45px_rgba(0,255,150,0.7)]">

                {/* Pulse Glow */}
                <span className="absolute inset-0 rounded-full bg-[#00E24B]/30 blur-xl animate-pulse" />

                <span className="relative">Get Funded</span>
              </button>

              {/* 🔥 SECONDARY BUTTON */}
              <button className="px-10 py-4 rounded-full 
              bg-white/10 backdrop-blur-md border border-white/20
              text-white font-semibold text-lg
              transition-all duration-300
              hover:bg-white/20 hover:scale-105">
                Try Demo
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FinalCTA;