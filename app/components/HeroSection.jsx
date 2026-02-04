import React from "react";
import { ArrowRight } from "lucide-react";

// Assuming you have the Shadcn Button component set up.
// If not, you can replace this import with a standard HTML <button>
// import { Button } from "../components/Button"; 

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center  px-4 py-24 text-center">
      
      {/* Optional: Subtle Grid Background for texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="z-10 mx-auto flex max-w-5xl flex-col items-center gap-6">
        
        {/* Main Headline - Replicating the "NOT ANOTHER AGENCY" style */}
        <h1 className="flex flex-col text-5xl font-black uppercase leading-[0.9] tracking-tighter text-black md:text-7xl lg:text-[7rem]">
          You build the brand. We build the presence
        </h1>

        {/* Subtext - Replicating the "Strategic solutions" text */}
        <p className="max-w-xl text-lg font-medium text-neutral-600 md:text-xl">
          Presence for  startups and creators—built from  <span className="underline decoration-wavy decoration-amber-500"> day one.</span>”
        </p>

        {/* CTAs using Shadcn styling */}
        {/* <div className="mt-10 flex items-center gap-4">
        <button className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-neutral-800">
          Our Work.
        </button>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black transition hover:scale-110 cursor-pointer">
          ↗
        </span>
        <div/> */}
      </div>
    </section>
  );
};

export default HeroSection;