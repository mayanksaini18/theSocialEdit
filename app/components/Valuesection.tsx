import React from "react";
import { 
  Sparkles, 
  Target, 
  User, 
  CalendarClock, 
  TrendingUp 
} from "lucide-react";

const valuePoints = [
  {
    icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
    title: "High-Quality Editing at a Convenient Price",
    description: "Premium video and content editing that looks professional, polished, and platform-ready — without expensive agency costs."
  },
  {
    icon: <Target className="h-6 w-6 text-yellow-500" />,
    title: "Niche Clarity for Confident Creation",
    description: "We help you clearly define your niche, audience, and content direction so you know what to post, who you’re talking to, and why it works."
  },
  {
    icon: <User className="h-6 w-6 text-yellow-500" />,
    title: "Personal Brand Building",
    description: "From content ideas to editing, captions, and posting strategy — we help you build a strong personal brand that feels authentic and consistent."
  },
  {
    icon: <CalendarClock className="h-6 w-6 text-yellow-500" />,
    title: "Content Strategy That Saves Time",
    description: "We plan your content in advance, repurpose it across platforms, and streamline the process so you can focus on growth instead of stress."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
    title: "Consistent Growth & Engagement",
    description: "Our editing style and content approach are designed to increase watch time, engagement, and trust — turning viewers into followers and clients."
  }
];

const ValueSection = () => {
  return (
    <section className="bg-black py-24 px-4 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            What Value Our <span className="text-yellow-500">Clients Get</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            We don't just edit videos; we build ecosystems for growth.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valuePoints.map((item, index) => (
            <div 
              key={index}
              className="group relative flex flex-col justify-start overflow-hidden rounded-2xl border border-neutral-800 bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-yellow-500/50 hover:bg-neutral-900/50"
            >
              {/* Icon Box */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 transition-colors group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValueSection;