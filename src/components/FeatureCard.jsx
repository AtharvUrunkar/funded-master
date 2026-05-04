function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-2xl 
    bg-[#00150d]/60 border border-white/10 
    text-center
    hover:shadow-[0_0_30px_rgba(0,255,150,0.25)] 
    hover:-translate-y-1
    transition duration-300">

      {/* 🔹 ICON (no circle) */}
      <div className="flex justify-center mb-5">
        <img
          src={icon}
          alt="icon"
          className="w-14 h-14 object-contain 
          drop-shadow-[0_0_10px_rgba(0,255,150,0.6)]"
        />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-gray-400 text-sm mt-2">{desc}</p>
    </div>
  );
}
export default FeatureCard;