import { User, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  // 🔥 Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 NAVBAR */}
      <nav
        className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-[#00E24B]/10 shadow-md"
            : "bg-transparent"
        }
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* 🔹 Logo */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-primary text-2xl">🏛️</span>
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Funded Master
            </h1>
          </div>

          {/* 🔹 Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

            <button onClick={() => scrollToSection("programs")} className="hover:text-white transition">
              Programs
            </button>

            <button onClick={() => scrollToSection("pricing")} className="hover:text-white transition">
              Pricing
            </button>

            <button onClick={() => scrollToSection("testimonials")} className="text-primary font-medium">
              Testimonials
            </button>

            <button onClick={() => scrollToSection("faq")} className="hover:text-white transition">
              FAQ
            </button>

            <button onClick={() => scrollToSection("affiliates")} className="hover:text-white transition">
              Affiliates
            </button>

          </div>

          {/* 🔹 RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* LOGIN BUTTON (desktop) */}
            <button
              onClick={() => navigate("/login")}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-medium 
              bg-gradient-to-r from-[#00c97f] to-[#00a86b] 
              shadow-[0_0_12px_rgba(0,201,127,0.6)] 
              hover:opacity-90 transition"
            >
              Log in
              <User size={16} />
            </button>

            {/* 🔥 MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </nav>

      {/* 🔥 MOBILE MENU */}
      <div
        className={`
        fixed top-0 left-0 w-full h-screen z-40
        bg-black/95 backdrop-blur-xl
        flex flex-col items-center justify-center gap-8 text-lg
        transition-all duration-300

        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      >
        <button onClick={() => scrollToSection("programs")}>Programs</button>
        <button onClick={() => scrollToSection("pricing")}>Pricing</button>
        <button onClick={() => scrollToSection("testimonials")}>Testimonials</button>
        <button onClick={() => scrollToSection("faq")}>FAQ</button>
        <button onClick={() => scrollToSection("affiliates")}>Affiliates</button>

        {/* LOGIN MOBILE */}
        <button
          onClick={() => {
            setOpen(false);
            navigate("/login");
          }}
          className="mt-4 px-8 py-3 rounded-full text-white font-medium
          bg-gradient-to-r from-[#00c97f] to-[#00a86b]
          shadow-[0_0_15px_rgba(0,255,150,0.5)]"
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Navbar;