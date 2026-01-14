import Clients from "@/app/components/Clients";

import ContactSection from "@/app/components/ContactSection";
import Container from "@/app/components/Container";
import FadeIn from "@/app/components/FadeIn";
import Services from "@/app/components/Services";
import Testimonials from "@/app/components/Testimonials";
import ScrollCard from "@/app/components/ScrollCard"
import InnovationSection from "./components/InnovationSection";

export default function Home() {
  return (
    <main className=" text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-black text-balance sm:text-7xl">
            Elevating Brands with{" "}
            <span className="text-yellow-500">Content</span>,{" "}
            <span className="text-yellow-500">Strategy</span> and{" "}
            <span className="text-yellow-500">Web Solutions</span>.
          </h1>
 <p className="mt-6 text-xl text-neutral-300">
            We are a content marketing agency that partners with brands to
            deliver powerful brand strategy and bespoke web solutions, building
            an online presence that drives growth and engagement.
          </p> 
        </FadeIn>
      </Container>

<InnovationSection/>
    </main>
  );
}

