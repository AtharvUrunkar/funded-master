function Card({ title, description }) {
  return (
    <div className="bg-card border border-white/10 rounded-xl p-6 hover:border-primary transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default Card;