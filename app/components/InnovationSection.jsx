// components/InnovationSection.tsx

export default function InnovationSection() {
  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT */}
        <div className="flex-1 space-y-5">
          <h2 className="text-4xl font-semibold">
            We live inside a circle of Innovation
          </h2>
          <p className="text-gray-300">
            As the best digital marketing company in Bangalore, we believe that
            innovation lies in continuous evolution. We learn, we plan,
            we do, we check, we repeat…
          </p>

          <button className="bg-yellow-400 text-black font-medium px-5 py-2 rounded-full inline-flex items-center gap-2">
            Know More <span>→</span>
          </button>
        </div>

        {/* RIGHT - Circle Graphic Placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 rounded-full border-[3px] border-gray-500 flex items-center justify-center">
            <span className="text-sm text-gray-400">Circle Graphic</span>
          </div>
        </div>
      </div>

      {/* SHOW-OFF CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        <Card title="200+" subtitle="Clients Served" />
        <Card title="🏆 DesignRush" subtitle="Best Web Design Award" />
        <Card title="300+" subtitle="Projects Completed" />
        <Card title="⭐ 4.8" subtitle="Rated on Google" />
      </div>

      {/* BOTTOM CTA */}
      <div className="max-w-6xl mx-auto mt-14 bg-transparent border border-gray-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-lg text-gray-200">
          We’re getting a feeling you like us already!
        </p>
        <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-full inline-flex items-center gap-2 mt-4 md:mt-0">
          Contact us <span>→</span>
        </button>
      </div>
    </section>
  );
}

function Card({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-5 bg-[#141414] rounded-xl border border-gray-800">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}
