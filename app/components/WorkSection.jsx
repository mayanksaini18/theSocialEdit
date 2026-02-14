"use client"

// import { Link } from "lucide-react";
import Link from "next/link";

const projects = [
  {
     reels: [
      {
  id: 1,
  videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771104411/personal_1_prdduq.mp4"
},
      {
  id: 2,
  videoUrl: "https://res.cloudinary.com/ddpydxytb/video/upload/v1771104002/Harsh_ad_2_coshkl.mp4"
},{
  id: 3,
  videoUrl:"https://res.cloudinary.com/ddpydxytb/video/upload/v1771103261/AQM7ykwBeGggukodVwX7mCFs8Rw1XsFmr05CaMeJsdG6gPRbkd14fBDe110HhGKY16yyiootD9xK0Yv8xYGbdbHE48R1gkR19bVlr20_zs3eu5.mp4"
}


    ]
  },
];

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
    <section className=" py-6 bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Work</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-lg">
              A curation of our best edits. We turn raw footage into scrolling-stopping content for brands that dare to be different.
            </p>
          </div>
        
         <Link href="/work" >
       
          <button className="hidden md:flex items-center gap-2 border-b border-white pb-1 text-sm font-bold uppercase tracking-widest text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors">
            View All Projects
          </button>
       </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {projects.flatMap((project) =>
    project.reels.map((reel) => (
      <ReelCard key={reel.id} reel={reel} />
    ))
  )}
</div>


        {/* Mobile Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <button className="rounded-full border border-neutral-700 px-8 py-3 text-sm font-bold uppercase text-white">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default WorkSection;
