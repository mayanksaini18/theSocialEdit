import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Guiding Principles for Client Success"
      >
        <p>
          We are committed to our core values, which shape every project we
          undertake. These principles ensure we deliver exceptional work and
          build lasting partnerships with our clients.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We believe the details make the difference. From pixel-perfect
            design to flawless code, we are committed to precision in every
            aspect of our work.
          </GridListItem>
          <GridListItem title="Efficient">
            We respect your time and budget. Our streamlined processes ensure we
            deliver high-quality solutions on schedule, maximizing your return
            on investment.
          </GridListItem>
          <GridListItem title="Adaptable">
            The digital world is always changing, and so are we. We create
            flexible, scalable solutions that can evolve with your business and
            the market.
          </GridListItem>
          <GridListItem title="Honest">
            Transparency is the foundation of trust. We maintain open and clear
            communication throughout our partnership, ensuring you're always
            informed.
          </GridListItem>
          <GridListItem title="Loyal">
            Your success is our success. We aim to be more than just a vendor;
            we strive to be a dedicated partner invested in your long-term
            growth.
          </GridListItem>
          <GridListItem title="Innovative">
            We stay at the forefront of technology and marketing trends to
            provide you with cutting-edge strategies and solutions that deliver
            real results.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
