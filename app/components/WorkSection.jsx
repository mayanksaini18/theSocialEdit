"use client"

// import { Link } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    client: "Urban Brew",
    category: "Brand Identity",
    video: "/videos/anonimostory.com_Instagram_apexfashionlab_3797574884055199598_66309954011.mp4",
  },
  {
    id: 2,
    client: "Neon Fitness",
    category: "Reels Production",
    video: "/videos/anonimostory.com_Instagram_texoraai_3752660752579505381_75733704479 (2).mp4",
  },
  {
    id: 3,
    client: "Tech Nova",
    category: "Product Launch",
    video: "videos/Video-769.mp4",
  },
];

const VideoCard = ({ project }) => {
  return (
    <div className="group relative flex flex-col gap-3">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-xl">
        
        <video
          src={project.video}
          muted
          autoPlay
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex items-start justify-between px-1">
        <div>
          <h3 className="text-xl font-bold text-white">{project.client}</h3>
          <p className="text-sm font-medium text-neutral-400">{project.category}</p>
        </div>
      </div>
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
          {projects.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
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
