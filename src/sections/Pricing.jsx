function Pricing() {
  const plans = [
    { name: "Basic", price: "$19/mo", features: ["Feature A", "Feature B"] },
    { name: "Pro", price: "$49/mo", features: ["Feature A", "Feature B", "Feature C"] },
    { name: "Enterprise", price: "$99/mo", features: ["All Features"] },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-10">Pricing Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-card border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-2xl my-4">{plan.price}</p>

              <ul className="text-gray-400 text-sm space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <button className="bg-primary text-black px-4 py-2 rounded-md">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;