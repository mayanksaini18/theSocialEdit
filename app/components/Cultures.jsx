import React from "react";
import SectionIntro from "@/app/components/SectionIntro";
import Container from "@/app/components/Container";
import { GridList, GridListItem } from "@/app/components/GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance passion with purpose."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Integrity" invert>
            We believe in honest, transparent partnerships. Our commitment is to our clients' success, built on a foundation of trust.
          </GridListItem>
          <GridListItem title="Innovation" invert>
            We are constantly exploring new technologies and strategies to keep our clients ahead of the curve.
          </GridListItem>
          <GridListItem title="Collaboration" invert>
            We believe the best results come from working together—with our clients and within our team.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
