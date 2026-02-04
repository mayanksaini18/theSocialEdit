"use client"
import React from "react";

// --- DATA STRUCTURE ---
const clients = [
  {
    id: "org1",
    name: "Apex Fashion Labs",
    description: "Rebranding their social presence with high-energy cafe lifestyle edits.",
    logo: "☕",
    reels: [
      {
        id: 1,
        title: "Morning Routine",
        // Note: Ensure this is a valid video URL (mp4/webm)
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1770195512/0201_ywugzt.mp4", 
      },
      {
        id: 2,
        title: "Latte Art Showcase",
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1770195674/Day_7_new_vqmepm.mp4"
      },
      {
        id: 3,
        title: "Customer Testimonials",
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1770195674/Day_7_new_vqmepm.mp4",
      }
    ]
  },
  {
    id: "org2",
    name: "Tesora",
    description: "Driving membership signups through intense, fast-paced workout montages.",
    logo: "⚡",
    reels: [
      {
        id: 4,
        title: "HIIT Intensity",
        videoUrl: "https://res.cloudinary.com/demo/video/upload/v1679668474/dog_closeup_ns.mp4",
      },
      {
        id: 5,
        title: "Trainer Spotlight",
        videoUrl: "https://res.cloudinary.com/demo/video/upload/v1679668474/dog_closeup_ns.mp4",
      },
      {
        id: 6,
        title: "Member Transformation",
        videoUrl: "https://res.cloudinary.com/demo/video/upload/v1679668474/dog_closeup_ns.mp4",
      }
    ]
  }
];

// --- COMPONENT ---

const ReelCard = ({ reel }) => {
  return (
    <div className="group relative flex flex-col gap-3">
      {/* 9:16 Aspect Ratio Container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-gray-100 border border-neutral-200 shadow-sm transition-all duration-300 group-hover:border-yellow-500/50 group-hover:shadow-lg">
        
        <video
          src={reel.videoUrl}
          autoPlay
          loop
          muted             // Always muted (required for reliable autoplay)
          playsInline       // Required for iOS
          className="h-full w-full object-cover"
        />

        {/* No Controller / No Overlay */}
      </div>
      
      {/* Reel Title */}
      <p className="text-sm font-semibold text-neutral-500 transition-colors group-hover:text-black">
        {reel.title}
      </p>
    </div>
  );
};

const WorkSection = () => {
  return (
    <section className="bg-white py-24 px-4 text-neutral-900">
      <div className="mx-auto max-w-5xl">
        
        {/* Main Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-black uppercase tracking-tighter md:text-7xl text-black">
            OURS <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Work</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-500">
            Real results for real brands. Here is how we translated their vision into viral content.
          </p>
        </div>

        {/* Organization Loops */}
        <div className="flex flex-col gap-24">
          {clients.map((client) => (
            <div key={client.id} className="relative">
              
              {/* Organization Header */}
              <div className="mb-8 flex flex-col items-start justify-center border-l-4 border-yellow-500 pl-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{client.logo}</span>
                  <h3 className="text-3xl font-bold text-black">{client.name}</h3>
                </div>
                <p className="mt-2 text-neutral-500 max-w-lg">
                  {client.description}
                </p>
              </div>

              {/* 3 Reels Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {client.reels.map((reel) => (
                  <ReelCard key={reel.id} reel={reel} />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkSection;