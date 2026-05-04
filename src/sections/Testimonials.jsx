const testimonials = [
  {
    title: "Great!",
    text: "Great, while on the Evaluation stage, I can't comment further because I never had a funded account.",
  },
  {
    title: "Great and fast answers",
    text: "Support team was fantastic and response time was super fast.",
  },
  {
    title: "Great Customer Service",
    text: "Best company no problem so far. Hope to get payout soon.",
  },
  {
    title: "Support team is best",
    text: "Support team is best I ever seen and guidance is amazing.",
  },
  {
    title: "Excellent experience",
    text: "Very smooth process and great support overall.",
  },
  {
    title: "Highly recommended",
    text: "No issues so far, everything works perfectly.",
  },
];

// split into 3 columns
const col1 = testimonials.slice(0, 2);
const col2 = testimonials.slice(2, 4);
const col3 = testimonials.slice(4, 6);

function Testimonials() {
  return (
    <section id ="testimonials"className="py-32 bg-black text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute left-[-300px] top-[200px] w-[600px] h-[500px] bg-[#04472C] blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* LABEL */}
        <p className="text-primary text-center text-sm tracking-widest mb-4">
          TESTIMONIALS
        </p>

        {/* HEADING */}
        <h2 className="text-center text-5xl md:text-6xl font-semibold">
          <span className="bg-gradient-to-r from-[#39FF9C] to-[#A5FFCD] bg-clip-text text-transparent">
            Trust Us
          </span>{" "}
          – You’re In Safe Hands
        </h2>

        {/* TRUSTPILOT STYLE */}
        <div className="text-center mt-6">
          <p className="text-lg mb-2">Excellent</p>

          <div className="flex justify-center gap-2 mb-2">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="w-8 h-8 bg-[#219653] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M12 2l3 7h7l-5.5 4.2 2 7L12 16l-6.5 4.2 2-7L2 9h7z"/>
                </svg>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm">
            Rated 4.8 / 5 based on 4,258 reviews
          </p>
        </div>

        {/* SCROLLING COLUMNS */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 h-[600px] overflow-hidden">

          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6 animate-scroll-y">
            {[...col1, ...col1].map((item, i) => (
              <Card item={item} key={i} />
            ))}
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6 animate-scroll-y-slow">
            {[...col2, ...col2].map((item, i) => (
              <Card item={item} key={i} />
            ))}
          </div>
            
          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6 animate-scroll-y-fast">
            {[...col3, ...col3].map((item, i) => (
              <Card item={item} key={i} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* CARD COMPONENT */
function Card({ item }) {
  return (
    <div className="p-6 rounded-2xl bg-[#030907] border border-white/10 
    hover:shadow-[0_0_25px_rgba(0,255,150,0.15)] transition">

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[1,2,3,4,5].map((i) => (
          <svg key={i} viewBox="0 0 24 24" fill="#219653" className="w-5 h-5">
            <path d="M12 2l3 7h7l-5.5 4.2 2 7L12 16l-6.5 4.2 2-7L2 9h7z"/>
          </svg>
        ))}
      </div>

      {/* Name */}
      <p className="text-gray-400 text-sm mb-2">
        Karan Gupta, 16 hours ago
      </p>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2">
        {item.title}
      </h3>

      {/* Text */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {item.text}
      </p>

    </div>
  );
}

export default Testimonials;