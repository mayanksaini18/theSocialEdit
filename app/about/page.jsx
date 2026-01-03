import ContactSection from "@/app/components/ContactSection";
import Container from "@/app/components/Container";
import Cultures from "@/app/components/Cultures";
import PageIntro from "@/app/components/PageIntro";
import { StatList, StatListItem } from "@/app/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About Us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Built X was founded by a group of passionate strategists and creators who saw a need for a more integrated approach to digital presence. We are committed to transparency, excellence, and delivering measurable results.
          </p>
          <p>
            At Built X, we’re more than just colleagues — we’re a dedicated team. We foster a supportive environment where creativity and strategy thrive, enabling our employees to produce their best work for our clients.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="50+" label="Happy clients" />
          <StatListItem value="120+" label="Projects completed" />
          <StatListItem value="15" label="Team members" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
