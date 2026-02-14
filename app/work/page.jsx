"use client"
import React from "react";

// --- DATA STRUCTURE ---
const clients = [
  {
    id: "org1",
    name: "Apex Fashion Labs",
    reels: [
      {
        id: 1,
        
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1770195512/0201_ywugzt.mp4", 
      },
      {
        id: 2,
       
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771102817/AQMaqkSlIJglkaHgOvF7WF8cr3W2M16SAQgFeLB_ws5xNnI9M8rDDCMqLeQ4hYatPKDNEk7LHOIDKKv21KwSqe7eY2HKqZKFj0g9jWQ_h9xuxs.mp4"
      },
      {
        id: 3,
        
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771102810/AQM-jJ_DyINUoPkNLTcfUeC0rLtgw9FVryaUo0Syma3PssPtWHNNpCEmoLROdsd7hnYVvWrGOsDwooVylxsyojBZYie62zxACSvRSLU_mhybl2.mp4",
      }
    ]
  },
  {
    id: "org2",
    name: "Texora",
    reels: [
      {
        id: 4,
        
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771102550/AQNrTtbSgXcXDyxkttZ6mwNvYbs5Ab87YAVMXGT2AgBgDC8DwlU2DOKRiHPB2fqLzZiYETZ5Sh8iWdXcVhRxExKvBUEpE_IXHpNyuaw_wnuycz.mp4",
      },
      {
        id: 5,
        
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771102550/AQOp7flNESmyG24KXwenex7h5DDaQ0-0DE-TnKvmoM2Ac9BfEa5qzziLMscxxnaHwODp915MKp_tv-vPRqMHAKCn7zq5S2edo7XdEWM_gadksk.mp4",
      },
      {
        id: 6,
        
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771103260/AQM6Es1fros1oDxEK75YWx09AT4D9fA4NN2NxWwxVu14Yy6K4_bZ9bDnPoOnGohyTyBht0fJjkpt6-k8mCFTGsB-e_ZI3dm1cPc-eQM_hlua8r.mp4",
      }
    ]
  },
  {
    id: "org3",
    name: "Xperio",
    reels: [
      {
        id: 4,
       
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771102676/AQNDp3Sr0cwNSt14ZAcyQvbZ0zWpIGv6E9mq72ldMSXj_bQc0BFoBZ60iKTrH4R_Qdzl1O3JHzRlO68UtKJ57K9LGZNbP_eq7phMzXY_ephj4j.mp4",
      },
      {
        id: 5,
        
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771102674/AQNh_2fJ8_J46bbE6E510hQ3S0hV3rskzlcF4ypwxk4UkQMGtNPgYK1836fO9VYZeISQJ2JY62nAYiuMaB5khvEXopahgFWL_Fwj1IE_i7mvpg.mp4",
      },
      {
        id: 6,
        
        videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771102672/AQMgWnPzdCjgObjB10ieOaiK612_xRXXgGBUvmrYZep2YE4AwHLR5uD14gHo16s7nrgW1zOmlWKiETYGlt3XDa0VUYZTYVwLDeqia9Y_k5hzdo.mp4",
      }
    ]
  },
  
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
    <section className="bg-white py-24 px-10 text-neutral-900">
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