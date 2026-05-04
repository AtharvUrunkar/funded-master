import { useState } from "react";

const faqs = [
  {
    question: "What is Empire Trading?",
    answer:
      "To win the game, you need strong support and diligent preparation. Join For Traders Community.",
  },
  {
    question: "Who can apply?",
    answer:
      "Anyone with basic trading knowledge and discipline can apply to our evaluation programs.",
  },
  {
    question: "How does funding work?",
    answer:
      "Pass the evaluation and get access to a funded account with profit split.",
  },
  {
    question: "Which markets can I trade?",
    answer:
      "You can trade Forex, Crypto, Indices, Commodities and more.",
  },
  {
    question: "How do you help manage risk?",
    answer:
      "We provide strict risk rules like max drawdown and daily loss limits.",
  },
  {
    question: "Do you offer resources for new traders?",
    answer:
      "Yes, we provide guides, community support, and mentorship.",
  },
  {
    question: "How fast are payouts?",
    answer:
      "Payouts are processed within 24–48 hours depending on performance.",
  },
  {
    question: "What trading platforms do you support?",
    answer:
      "We support MT4, MT5, and other professional trading platforms.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-black text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute right-[-200px] top-[100px] w-[500px] h-[400px] bg-[#04472C] blur-[200px]" />

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-center font-semibold">
          Frequently Asked{" "}
          <span className="text-primary">Questions</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          I know... just like you many traders have these questions,
          so here are the answers!
        </p>

        {/* FAQ LIST */}
        <div className="mt-16 space-y-4">

          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300
                ${
                  isActive
                    ? "bg-[#092616] border-[#2a6b4a]"
                    : "bg-[#020B06] border-white/10"
                }`}
              >

                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-primary">
                    {item.question}
                  </span>

                  {/* ICON */}
                  <span
                    className={`text-2xl transition-transform duration-300 ${
                      isActive ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-40 px-6 pb-6" : "max-h-0 px-6"
                  }`}
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQ;