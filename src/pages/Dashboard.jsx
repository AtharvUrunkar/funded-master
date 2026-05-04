import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-6 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute left-[-200px] top-[20%] w-[400px] h-[400px] bg-[#00E24B]/10 blur-[180px]" />
      <div className="absolute right-[-200px] bottom-[10%] w-[300px] h-[300px] bg-[#23C877]/10 blur-[160px]" />

      {/* 🔹 HEADER */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 relative z-10">

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Welcome, {user?.displayName || "Trader"}
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="
          px-4 py-2 text-sm
          rounded-full
          bg-white/5 border border-white/10
          hover:bg-white/10
          transition
          self-start sm:self-auto
          "
        >
          Logout
        </button>
      </div>

      {/* 🔥 STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 relative z-10">

        {[
          { title: "Account Balance", value: "$100,000" },
          { title: "Profit Split", value: "95%" },
          { title: "Max Drawdown", value: "$5,000" },
        ].map((item, i) => (
          <div
            key={i}
            className="
            p-5 rounded-2xl
            bg-gradient-to-br from-[#02150c] via-[#06331f] to-[#02150c]
            border border-[#00E24B]/10
            shadow-[inset_0_0_30px_rgba(0,255,150,0.05)]
            "
          >
            <p className="text-gray-400 text-xs uppercase tracking-wide">
              {item.title}
            </p>

            <h3 className="text-2xl font-bold text-white mt-2">
              {item.value}
            </h3>
          </div>
        ))}

      </div>

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

        {/* 🟢 ACCOUNT SETUP */}
        <div className="
        p-6 rounded-3xl
        bg-gradient-to-br from-[#02150c] via-[#052016] to-[#03110a]
        border border-[#00E24B]/10
        shadow-[0_0_40px_rgba(0,255,150,0.05)]
        ">

          <h2 className="text-lg sm:text-xl font-semibold mb-5 text-primary">
            Account Setup
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="
              w-full p-3 text-sm rounded-lg
              bg-black/40
              border border-white/10
              focus:border-[#00E24B]
              focus:ring-1 focus:ring-[#00E24B]/40
              outline-none transition
              "
            />

            <input
              type="text"
              placeholder="Trading Experience"
              className="
              w-full p-3 text-sm rounded-lg
              bg-black/40
              border border-white/10
              focus:border-[#00E24B]
              focus:ring-1 focus:ring-[#00E24B]/40
              outline-none transition
              "
            />

            <select
              className="
              w-full p-3 text-sm rounded-lg
              bg-black/40
              border border-white/10
              focus:border-[#00E24B]
              focus:ring-1 focus:ring-[#00E24B]/40
              outline-none transition
              "
            >
              <option>Select Account Size</option>
              <option>$10,000</option>
              <option>$25,000</option>
              <option>$50,000</option>
              <option>$100,000</option>
            </select>

            <button
              className="
              w-full py-3 rounded-lg font-semibold text-white text-sm

              bg-gradient-to-r 
              from-[#004d2f] via-[#007a4d] to-[#004d2f]

              shadow-[0_0_25px_rgba(0,255,150,0.3)]
              hover:shadow-[0_0_40px_rgba(0,255,150,0.6)]

              transition duration-300
              "
            >
              Continue Setup
            </button>

          </div>
        </div>

        {/* 📊 MARKET */}
        <div className="
        p-6 rounded-3xl
        bg-gradient-to-br from-[#02150c] via-[#052016] to-[#03110a]
        border border-[#00E24B]/10
        shadow-[0_0_40px_rgba(0,255,150,0.05)]
        ">

          <h2 className="text-lg sm:text-xl font-semibold mb-5 text-primary">
            Live Market
          </h2>

          <div className="w-full h-[220px] sm:h-[300px] rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="market"
              src="https://s.tradingview.com/widgetembed/?symbol=NSE:NIFTY&interval=15"
              className="w-full h-full"
            />
          </div>

          <div className="grid grid-cols-3 gap-3 mt-5 text-center">

            <div className="p-2 rounded-lg bg-black/50 border border-white/10">
              <p className="text-gray-400 text-[10px] sm:text-sm">Market</p>
              <p className="text-primary text-xs sm:text-base font-semibold">NIFTY 50</p>
            </div>

            <div className="p-2 rounded-lg bg-black/50 border border-white/10">
              <p className="text-gray-400 text-[10px] sm:text-sm">Status</p>
              <p className="text-green-400 text-xs sm:text-base font-semibold">Live</p>
            </div>

            <div className="p-2 rounded-lg bg-black/50 border border-white/10">
              <p className="text-gray-400 text-[10px] sm:text-sm">Update</p>
              <p className="text-white text-xs sm:text-base font-semibold">Realtime</p>
            </div>

          </div>
        </div>

      </div>

      {/* 🔥 ACTIVITY */}
      <div className="
      mt-8 p-6 rounded-3xl
      bg-gradient-to-br from-[#02150c] via-[#052016] to-[#03110a]
      border border-[#00E24B]/10
      shadow-[0_0_40px_rgba(0,255,150,0.05)]
      relative z-10
      ">

        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-primary">
          Recent Activity
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm">
          No activity yet — start trading to see updates.
        </p>

      </div>

    </div>
  );
}

export default Dashboard;