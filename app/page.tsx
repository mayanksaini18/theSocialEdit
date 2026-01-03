import Clients from "@/app/components/Clients";

import ContactSection from "@/app/components/ContactSection";
import Container from "@/app/components/Container";
import FadeIn from "@/app/components/FadeIn";
import Services from "@/app/components/Services";
import Testimonials from "@/app/components/Testimonials";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 text-balance sm:text-7xl">
            Elevating Brands with Content, Strategy, and Web Solutions.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a content marketing agency that partners with brands to
            deliver powerful brand strategy and bespoke web solutions, building
            an online presence that drives growth and engagement.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials className="mt-24 sm:mt-32 lg:mt-40" client={{ name: "Bangalore Bytes" }}>
        The team at Built X transformed our digital strategy. Their expertise
        in content and web solutions resulted in a significant increase in our
        online engagement and lead generation. Truly a game-changer for our brand.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
