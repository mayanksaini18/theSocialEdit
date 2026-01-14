"use client"
import { useRef } from "react";
import { useScroll } from "framer-motion";
import RightCards from "./RightCards";

export default function MarketingSection() {
  const containerRef = useRef(null);

  // Track scroll progress relative to this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],

  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="grid w-full grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-20">
          <div className="flex items-center justify-center">
            <StickyLeft />
          </div>
          <div className="flex items-center justify-center">
            <RightCards scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyLeft() {
  return (
    <div className="flex h-fit flex-col justify-center p-8">
      <p className="mb-4 text-sm text-neutral-500">
        Digital marketing agency that are
      </p>

      <h2 className="font-display text-5xl font-medium leading-tight text-neutral-950 sm:text-6xl">
        Jack of all trades,
        <br />
        master of results!
      </h2>

      <p className="mt-6 max-w-md text-neutral-600">
        We wear many hats (and rock them all), but at the end of the day we get
        the job done, no matter the challenge!
      </p>

      <div className="mt-10 flex items-center gap-4">
        <button className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-neutral-800">
          Talk to us.
        </button>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black transition hover:scale-110 cursor-pointer">
          ↗
        </span>
      </div>
    </div>
  );
}