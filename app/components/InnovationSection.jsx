import React from "react";
import Container from "@/app/components/Container";
import FadeIn, { FadeInStagger } from "@/app/components/FadeIn";

export default function InnovationSection() {
  return (
    <section className="rounded-t-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <div className="flex flex-col items-center md:flex-row">
          {/* LEFT */}
          <div className="flex-1 space-y-5">
            <FadeIn>
              <h2 className="font-display text-4xl font-medium">
                We live inside a circle of Innovation
              </h2>
              <p className="text-neutral-300">
                As the best digital marketing company in Bangalore, we believe
                that innovation lies in continuous evolution. We learn, we plan,
                we do, we check, we repeat…
              </p>

              <button className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2  mt-2 font-medium text-black transition hover:bg-yellow-300">
                Know More <span>→</span>
              </button>
            </FadeIn>
          </div>

          {/* RIGHT - Circle Graphic Placeholder */}
          <div className="flex flex-1 justify-center">
            <FadeIn>
              <img
                src="https://innovkraft.com/wp-content/uploads/2025/04/Circle-of-innovation-1.png"
                alt="Circle of Innovation"
                className="w-full max-w-sm"
              />
            </FadeIn>
          </div>
        </div>

        {/* SHOW-OFF CARDS */}
        <FadeInStagger className="mt-24">
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="100+" label="Clients Served" />
            {/* <Stat value="DesignRush" label="Best Web Design Award" /> */}
            <Stat value="100+" label="Projects Completed" />
            <Stat value="4.8" label="Rated on Google" />
            <Stat value="2M+" label="Views" />
          </dl>

        </FadeInStagger>

        {/* BOTTOM CTA */}
        <FadeIn>
          <div className="mt-14 flex flex-col items-center justify-between rounded-2xl border border-neutral-700 bg-transparent p-6 md:flex-row">
            <p className="text-lg text-neutral-200">
              We’re getting a feeling you like us already!
            </p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-2 font-medium text-black transition hover:bg-yellow-300 md:mt-0">
              Contact us <span>→</span>
            </button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <FadeIn className="flex flex-col-reverse border-l border-neutral-800 pl-8">
      <dt className="text-base text-neutral-300">{label}</dt>
      <dd className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {value}
      </dd>
    </FadeIn>
  );
}
