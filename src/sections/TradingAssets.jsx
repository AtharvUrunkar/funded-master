import Card from "../components/Card";

function TradingAssets() {
  const assets = [
    { title: "Crypto", description: "Trade Bitcoin, Ethereum and more" },
    { title: "Stocks", description: "Invest in top global companies" },
    { title: "Forex", description: "Trade currencies with low spreads" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Trading Assets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TradingAssets;